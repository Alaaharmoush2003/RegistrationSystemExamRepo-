// Controllers/AuthController.cs
using Microsoft.AspNetCore.Mvc;
using RegistrationSystemBackend.Models;
using RegistrationSystemBackend.Services;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IAdminService _adminService;

    public AuthController(IUserService userService, IAdminService adminService)
    {
        _userService = userService;
        _adminService = adminService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        var result = await _userService.RegisterUserAsync(registerRequest);
        if (result)
        {
            return Ok("User registered successfully.");
        }
        return BadRequest("User registration failed.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        var user = await _userService.AuthenticateUserAsync(loginRequest);
        if (user != null)
        {
            return Ok("Login successful.");
        }
        return Unauthorized("Invalid username or password.");
    }

    [HttpPost("admin-login")]
    public async Task<IActionResult> AdminLogin([FromBody] LoginRequest loginRequest)
    {
        var admin = await _adminService.AuthenticateAdminAsync(loginRequest);
        if (admin != null)
        {
            return Ok("Admin login successful.");
        }
        return Unauthorized("Invalid username or password.");
    }
}
