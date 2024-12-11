using ShoppingListMaker.Models.Response;

namespace ShoppingListMaker.Models.Request.Auth;

public class LoginResponse
{
    public UserResponse User { get; set; }
    public string Token { get; set; }
}