using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Payrol_Administration.Web.Models
{
   
    public partial class AspNetUser
    {
        public HttpPostedFileBase File { get; set; }
    }

}