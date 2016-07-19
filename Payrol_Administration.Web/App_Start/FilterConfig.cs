using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace IT_Help_Desk.Web
{

    //public class HandleAntiforgeryTokenErrorAttribute : HandleErrorAttribute
    //{
    //    public override void OnException(ExceptionContext filterContext)
    //    {
    //        filterContext.ExceptionHandled = true;
    //        filterContext.Result = new RedirectToRouteResult(
    //            new RouteValueDictionary(new { action = "Login", controller = "Account" }));
    //    }
    //}

    //public class FilterConfig
    //{
    //    public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    //    {
    //        filters.Add(new HandleErrorAttribute());
    //        filters.Add(new HandleAntiforgeryTokenErrorAttribute() { ExceptionType = typeof(HttpAntiForgeryException) });
    //    }
    //}


    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
