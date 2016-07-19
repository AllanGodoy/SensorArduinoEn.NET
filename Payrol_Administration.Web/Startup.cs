using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using Microsoft.AspNet;

[assembly: OwinStartupAttribute(typeof(IT_Help_Desk.Web.Startup))]
namespace IT_Help_Desk.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
