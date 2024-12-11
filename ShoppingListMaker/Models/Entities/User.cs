using ShoppingListMaker.Models.Response;
using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Entities
{
    public class User : BaseEntity
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [MaxLength(64)]
        [Required]
        public string Password { get; set; }

        public UserResponse MapToUserResponse()
        {
            return new UserResponse
            {
                Name = Name,
            };
        }
    }
}
