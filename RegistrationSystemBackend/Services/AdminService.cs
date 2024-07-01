// Services/AdminService.cs
using RegistrationSystemBackend.Data;
using RegistrationSystemBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RegistrationSystemBackend.Services
{
    public class AdminService : IAdminService
    {
        private readonly ApplicationDbContext _context;

        public AdminService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Admin?> AuthenticateAdminAsync(LoginRequest loginRequest)
        {
            var admin = await _context.Admins.SingleOrDefaultAsync(a => a.Username == loginRequest.Username);
            if (admin != null && BCrypt.Net.BCrypt.Verify(loginRequest.Password, admin.PasswordHash))
            {
                return admin;
            }
            return null;
        }

        public async Task<List<User>> GetUnapprovedUsersAsync()
        {
            return await _context.Users.Where(u => !u.IsApproved).ToListAsync();
        }

        public async Task<bool> ApproveUserAsync(int userId, bool approve)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user != null)
            {
                user.IsApproved = approve;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
