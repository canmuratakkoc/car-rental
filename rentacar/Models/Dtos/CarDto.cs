namespace rentacar.Models.Dtos
{
    public class CarDto
    {
        public Guid Id { get; set; }
        public float Price { get; set; }
        public string Color { get; set; }
        public string Image { get; set; }
        public bool Status { get; set; }
        public Guid CarModelId { get; set; }
        public CarModelDto CarModel { get; set; }
    }
}
