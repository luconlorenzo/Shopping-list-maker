using ShoppingListMaker.Models.Responses;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingListMaker.Models.Entities
{
    public class Object : BaseEntity
    {
        [Required]
        [MaxLength(25)]
        public string Name { get; set; }
        [ForeignKey("List")]
        public int ListId { get; set; }
        public virtual List List { get; set; }
        public ObjectResponse MapToObjectResponse()
        {
            return new ObjectResponse
            {
                Name = Name,
            };
        }
    }
}
