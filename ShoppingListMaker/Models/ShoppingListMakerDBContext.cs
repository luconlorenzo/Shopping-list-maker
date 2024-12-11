using Microsoft.EntityFrameworkCore;
using ShoppingListMaker.Models.Entities;

namespace ShoppingListMaker.Models
{
    public class ShoppingListMakerDBContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Entities.Object> Objects { get; set; }
        public DbSet<List> Lists { get; set; }

        public DbSet<UsersLists> UsersLists { get; set; }
        public ShoppingListMakerDBContext(DbContextOptions<ShoppingListMakerDBContext> options) : base(options)
        {
        }

    }
}
