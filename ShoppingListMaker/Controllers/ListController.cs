using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using ShoppingListMaker.Models;
using ShoppingListMaker.Models.Entities;
using ShoppingListMaker.Models.Requests.List;
using ShoppingListMaker.Models.Requests.Objects;
using ShoppingListMaker.Models.Requests.Users;
using ShoppingListMaker.Models.Responses;
using System.Security.Claims;

namespace ShoppingListMaker.Controllers
{
    [ApiController]
    [Route("api/lists")]
    public class ListController : BaseController
    {
        public ListController(ShoppingListMakerDBContext db) : base(db)
        {
        }
        /// <summary>
        ///  Get filtered list
        /// </summary>
        /// <response code="200">Returns all list</response>
        [Authorize]
        [HttpGet("")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(List<List>), StatusCodes.Status200OK)]
        public IActionResult GetLists([FromQuery] GetListRequest listRequest)
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
            var list = DB.UsersLists
                .Include(ul => ul.List)
                .Where(ul => ul.UserId == user.Id && ul.DeletedAt == null)
                .Select(ul => ul.List)
                .ToList();
            return Ok(list);
        }
        /// <summary>
        ///  Add list   
        /// </summary>
        /// <response code="200">add list</response>
        [Authorize]
        [HttpPost("")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(ListResponse), StatusCodes.Status200OK)]
        public IActionResult AddList([FromBody] CreateListRequest listRequest)
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
            using var transaction = DB.Database.BeginTransaction();
            try
            {
                var list = new List
                {
                    Name = listRequest.ListName,
                };

                DB.Lists.Add(list);
                DB.SaveChanges();

                var userList = new UsersLists
                {
                    UserId = user.Id,
                    ListId = list.Id,
                };

                DB.UsersLists.Add(userList);
                DB.SaveChanges();

                transaction.Commit();

                return Ok(list.MapToListResponse());
            }
            catch
            {
                transaction.Rollback();
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the list.");
            }
        }
        /// <summary>
        ///  remove list   
        /// </summary>
        /// <response code="200">remove list</response>
        [Authorize]
        [HttpDelete("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public IActionResult DeleteList(int id)
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
            var userList = DB.UsersLists.Where(ul => ul.ListId == id).ToList();
            if (userList == null)
            {
                return Unauthorized();
            }
            var list = DB.Lists.FirstOrDefault(l => l.Id == id);
            if (list == null)
            {
                return NotFound();
            }
            var objs = DB.Objects.Where(el => el.ListId == list.Id).ToList();
            using var transaction = DB.Database.BeginTransaction();
            try
            {
                userList.ForEach(o => { o.DeletedAt = DateTime.Now; });
                DB.SaveChanges();

                list.DeletedAt = DateTime.Now;
                DB.SaveChanges();

                objs.ForEach(o => { o.DeletedAt = DateTime.Now; });
                DB.SaveChanges();

                transaction.Commit();

                return Ok(true);
            }
            catch
            {
                transaction.Rollback();
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the list.");
            }
        }

        /// <summary>
        /// Share list
        /// </summary>
        [Authorize]
        [HttpPut("{id}")]
        [Produces("application/json")]
        public IActionResult ShareUser([FromBody] ShareListRequest listRequest, int id)
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

            var sharedUser = DB.Users.FirstOrDefault(u => u.Name == listRequest.UserName);
            if (sharedUser is null || sharedUser.Equals(user))
            {
                return NotFound();
            }

            var UserList = new UsersLists
            {
                ListId = id,
                UserId = sharedUser.Id
            };
            DB.UsersLists.Add(UserList);
            DB.SaveChanges();
            return Ok();
        }

    }
}
