using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ShoppingListMaker.Models;
using ShoppingListMaker.Models.Entities;
using ShoppingListMaker.Models.Request.Auth;
using ShoppingListMaker.Models.Response;
using ShoppingListMaker.Utils;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShoppingListMaker.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : BaseController
    {
        private JwtOptions JwtOptions { get; set; }

        public AuthController(ShoppingListMakerDBContext context, IConfiguration appSettings) : base(context, appSettings)
        {
            JwtOptions = appSettings.GetSection("JwtOptions").Get<JwtOptions>()!;
        }
        /// <summary>
        /// Login
        /// </summary>
        /// <response code="200">Returns the jwt Token</response> 
        /// <response code="401">If the username or password are invalid</response>
        [ProducesResponseType(typeof(LoginResponse), 200)]
        [ProducesResponseType(401)]
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest body)
        {
            var user = DB.Users.FirstOrDefault(u => u.Name == body.Name);
            if (user == null || user.Password != body.Password)
            {
                return Unauthorized();
            }

            var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new(JwtRegisteredClaimNames.Email, body.Name),
            new(JwtRegisteredClaimNames.Sub, body.Name),
        };

            var tokenHandler = new JwtSecurityTokenHandler();
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtOptions.SigningKey));
            var tokenExpirationHours = Convert.ToInt32(JwtOptions.ExpirationHours);

            var tokenDescription = new SecurityTokenDescriptor
            {
                Issuer = JwtOptions.Issuer,
                Audience = JwtOptions.Audience,
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(tokenExpirationHours),
                SigningCredentials = new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescription);
            var jwt = tokenHandler.WriteToken(token);

            var response = new LoginResponse()
            {
                User = user.MapToUserResponse(),
                Token = jwt
            };

            return Ok(response);
        }

        /// <summary>
        /// Get current user
        /// </summary>
        /// <response code="200">Returns the current user</response>
        /// <response code="401">If the user is not authenticated</response>
        [ProducesResponseType(typeof(UserResponse), 200)]
        [ProducesResponseType(401)]
        [Authorize]
        [HttpGet("me")]
        public IActionResult Me()
        {
            string? email = User.FindFirstValue(ClaimTypes.Email);
            if (email == null)
            {
                return Unauthorized();
            }

            var user = DB.Users.FirstOrDefault(u => u.Name == email);
            if (user == null)
            {
                return Unauthorized();
            }

            return Ok(user.MapToUserResponse());
        }
    }
}
