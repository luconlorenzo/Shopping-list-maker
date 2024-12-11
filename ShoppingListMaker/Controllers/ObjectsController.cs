using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingListMaker.Models;
using ShoppingListMaker.Models.Entities;
using ShoppingListMaker.Models.Requests.Objects;
using ShoppingListMaker.Models.Responses;
using System.Security.Claims;

namespace ShoppingListMaker.Controllers
{
    [ApiController]
    [Route("api/objects")]
    public class ObjectsController : BaseController
    {
        public ObjectsController(ShoppingListMakerDBContext db) : base(db)
        {
        }
        /// <summary>
        /// Create in list
        /// </summary>
        /// <response code="201">Returns the created object</response>
        [Authorize]
        [HttpPost("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(ObjectResponse), StatusCodes.Status200OK)]
        public IActionResult AddObject([FromBody] CreateObjectRequest objectRequest, int id)
        {
            string? name = User.FindFirstValue(ClaimTypes.Email);
            if (name == null)
            {
                return Unauthorized();
            }
            var user = DB.Users.FirstOrDefault(u => u.Name == name);
            if (user == null)
            {
                return Unauthorized();
            }
            var exists = DB.UsersLists.Any(ul => ul.UserId == user.Id && ul.ListId == id);
            if (!exists)
            {
                return Unauthorized();
            }
            var obj = new Models.Entities.Object()
            {
                Name = objectRequest.ObjectName,
                ListId = id
            };
            DB.Objects.Add(obj);
            DB.SaveChanges();
            return Ok(obj.MapToObjectResponse());
        }

        /// <summary>
        ///  Get filtered objects in list
        /// </summary>
        /// <response code="200">Returns filtered objects in list</response>
        [Authorize]
        [HttpGet("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(List<Models.Entities.Object>), StatusCodes.Status200OK)]
        public IActionResult GetObjects(int id)
        {
            string? name = User.FindFirstValue(ClaimTypes.Email);
            if (name == null)
            {
                return Unauthorized();
            }
            var user = DB.Users.FirstOrDefault(u => u.Name == name);
            if (user == null)
            {
                return Unauthorized();
            }
            var exists = DB.UsersLists.Any(ul => ul.UserId == user.Id && ul.ListId == id);
            if (!exists)
            {
                return Unauthorized();
            }
            var objects = DB.Objects.Where(el => el.DeletedAt  == null).ToList();
            if (id != 0)
            {
                objects = objects.Where(el => el.ListId == id).ToList();
            }
            return Ok(objects);
        }

        /// <summary>
        ///  remove list   
        /// </summary>
        /// <response code="200">remove list</response>
        [Authorize]
        [HttpDelete("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public IActionResult DeleteObjects(string objectName, int id)
        {
            string? name = User.FindFirstValue(ClaimTypes.Email);
            if (name == null)
            {
                return Unauthorized();
            }
            var user = DB.Users.FirstOrDefault(u => u.Name == name);
            if (user == null)
            {
                return Unauthorized();
            }
            var obj = DB.Objects.FirstOrDefault(el => el.Id == id);
            var userList = DB.UsersLists.FirstOrDefault(ul => ul.UserId == user.Id && ul.ListId == obj.ListId);
            if (userList == null)
            {
                return Unauthorized();
            }
            if (obj == null)
            {
                return NotFound();
            }
            obj.DeletedAt = DateTime.Now;
            DB.SaveChanges();
            return Ok(obj);

        }


    }
}
