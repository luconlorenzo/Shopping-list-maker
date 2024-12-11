using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Requests.Users
{
    public class ShareListRequest
    {
        [Required][MaxLength(100)] public string UserName { get; set; }
    }
}
