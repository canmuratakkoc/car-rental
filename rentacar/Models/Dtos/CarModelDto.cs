namespace rentacar.Models.Dtos
{
    public class CarModelDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Type { get; set; }
        public int SeatCount { get; set; }
        public int DoorCount { get; set; }
        public string GearType { get; set; }
        public string FuelType { get; set; }
        public bool AirConditioner { get; set; }
        public Guid CarBrandId { get; set; }
        public object CarBrand { get; set; }
    }
}
