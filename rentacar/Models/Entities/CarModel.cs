using System.Numerics;

namespace rentacar.Models.Entities
{
    public class CarModel
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required int Year { get; set; }
        public required string Type { get; set; }
        public required int SeatCount { get; set; }
        public required int DoorCount { get; set; }
        public required string GearType { get; set; }
        public required string FuelType { get; set; }
        public required bool AirConditioner { get; set; }

        // Foreign key
        public Guid CarBrandId { get; set; }
        public virtual CarBrand CarBrand { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
    }
}
