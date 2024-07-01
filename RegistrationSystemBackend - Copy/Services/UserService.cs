// Services/UserService.cs
using BCrypt.Net;
using RegistrationSystemBackend.Data;
using RegistrationSystemBackend.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RegistrationSystemBackend.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> RegisterUserAsync(RegisterRequest registerRequest)
        {
            var user = new User
            {
                Username = registerRequest.Username,
                Email = registerRequest.Email, // Add email
                Password = BCrypt.Net.BCrypt.HashPassword(registerRequest.Password),
                IsApproved = false
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<User?> AuthenticateUserAsync(LoginRequest loginRequest)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == loginRequest.Username);
            if (user != null && BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.Password) && user.IsApproved)
            {
                return user;
            }
            return null;
        }
    }
}
