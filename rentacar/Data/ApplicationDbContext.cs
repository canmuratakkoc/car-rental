using Microsoft.EntityFrameworkCore;
using rentacar.Models.Entities;

namespace rentacar.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Dealer> Dealers { get; set; }
        public DbSet<CarBrand> CarBrands { get; set; }
        public DbSet<CarModel> CarModels { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Rental> Rentals { get; set; }
    }
}
