using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Requests.List
{
    public class GetListRequest
    {
       public string? ListName { get; set; }
    }
}
