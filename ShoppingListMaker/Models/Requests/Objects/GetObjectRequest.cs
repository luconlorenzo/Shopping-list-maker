using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Requests.Objects
{
    public class GetObjectRequest
    {
        [Range(1, int.MaxValue)] public int ListId { get; set; }
    }
}
