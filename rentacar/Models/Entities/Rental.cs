namespace rentacar.Models.Entities
{
    public class Rental
    {
        public Guid Id { get; set; }
        public required DateOnly StartDate { get; set; }
        public required DateOnly EndDate { get; set; }
        public required float Price { get; set; }
        public required bool Handed { get; set; }

        // Foreign key
        public Guid UserId { get; set; }
        public virtual User User { get; set; }
        public Guid AdvertId { get; set; }
    }
}
