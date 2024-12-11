using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Requests.Objects
{
    public class CreateObjectRequest
    {
        [Required][MaxLength(25)] public string ObjectName { get; set; }
        [Required][Range(1, int.MaxValue)] public int ListId { get; set; }
    }
}
