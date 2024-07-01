// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using RegistrationSystemBackend.Models;

namespace RegistrationSystemBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }
}
