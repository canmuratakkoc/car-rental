namespace rentacar.Models.Dtos
{
    public class AddCarModelDto
    {
        public Guid CarBrandId { get; set; }
        public required string Name { get; set; }
        public required int Year { get; set; }
        public required string Type { get; set; }
        public required int SeatCount { get; set; }
        public required int DoorCount { get; set; }
        public required string GearType { get; set; }
        public required string FuelType { get; set; }
        public required bool AirConditioner { get; set; }
    }
}
