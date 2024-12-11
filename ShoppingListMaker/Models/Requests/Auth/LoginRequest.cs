using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Request.Auth
{
    public class LoginRequest
    {
        [Required] public string Name { get; set; }
        [Required] public string Password { get; set; }
    }
}