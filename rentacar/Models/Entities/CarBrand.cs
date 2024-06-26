namespace rentacar.Models.Entities
{
    public class CarBrand
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public virtual ICollection<CarModel> CarModels { get; set; }
    }
}
