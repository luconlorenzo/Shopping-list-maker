using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Requests.List
{
    public class CreateListRequest
    {
        [Required][MaxLength(50)] public string ListName { get; set; }

    }
}
