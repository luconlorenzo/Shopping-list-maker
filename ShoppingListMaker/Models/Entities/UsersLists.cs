using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ShoppingListMaker.Models.Entities
{
    public class UsersLists : BaseEntity
    {
        public int UserId { get; set; }
        public int ListId { get; set; }
        public User User { get; set; }
        public List List { get; set; }
    }
}
