// Controllers/AdminController.cs
using Microsoft.AspNetCore.Mvc;
using RegistrationSystemBackend.Services;
using RegistrationSystemBackend.Models; // Add this using directive
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly IAdminService _adminService;

    public AdminController(IAdminService adminService)
    {
        _adminService = adminService;
    }

    [HttpGet("unapproved-users")]
    public async Task<IActionResult> GetUnapprovedUsers()
    {
        var users = await _adminService.GetUnapprovedUsersAsync();
        return Ok(users);
    }

    [HttpPost("approve-user/{userId}")]
    public async Task<IActionResult> ApproveUser(int userId, [FromBody] ApproveRequest request)
    {
        var result = await _adminService.ApproveUserAsync(userId, request.Approve);
        if (result)
        {
            return Ok("User approval status updated successfully.");
        }
        return BadRequest("Failed to update user approval status.");
    }
}
