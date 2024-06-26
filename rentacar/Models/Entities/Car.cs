namespace rentacar.Models.Entities
{
    public class Car
    {
        public Guid Id { get; set; }
        public required float Price { get; set; }
        public required string Color { get; set; }
        public required string Image { get; set; }
        public required bool Status { get; set; }

        // Foreign key
        public Guid CarModelId { get; set; }
        public virtual CarModel CarModel { get; set; }
    }
}
