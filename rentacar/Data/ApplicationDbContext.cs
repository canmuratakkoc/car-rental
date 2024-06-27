using Microsoft.EntityFrameworkCore;
using rentacar.Models.Entities;

namespace rentacar.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<CarBrand> CarBrands { get; set; }
        public DbSet<CarModel> CarModels { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Rental> Rentals { get; set; }
    }
}
