using ShoppingListMaker.Models.Responses;
using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Entities
{
    public class List : BaseEntity
    {
        [MaxLength(50)]
        public string Name { get; set; }
        public List<Object> Objects { get; set; }

        public ListResponse MapToListResponse()
        {
            return new ListResponse
            {
                ListName = Name,
            };
        }
    }
}
