namespace rentacar.Models.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public required string Firstname { get; set; }
        public required string Lastname { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required string IdentityNumber { get; set; }

        public virtual ICollection<Rental> Rentals { get; set; }
    }
}
