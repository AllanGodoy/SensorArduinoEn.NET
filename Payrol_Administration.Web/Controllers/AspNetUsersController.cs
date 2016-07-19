using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Payrol_Administration.Web.Models;

namespace Payrol_Administration.Web.Controllers
{
    [Authorize(Roles = "Admin")]

    public class AspNetUsersController : Controller
    {
         
        private integratedDBEntities db = new integratedDBEntities();

        // GET: AspNetUsers

        public PartialViewResult EditPartial(string id)
                 
        {
           
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
           
           
            return PartialView(aspNetUser);
        }

        public ActionResult DetailsPartial(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
            if (aspNetUser == null)
            {
                return HttpNotFound();
            }
            //---------------------------------------------------------------
            List<AspNetUser> only = new List<AspNetUser>();

            only = db.AspNetUsers.ToList();
            var extrae = from m in only where m.Id == id select m;
            ViewBag.List = extrae.ToList();

            //----------------------------------------------------------
            return View(aspNetUser);
        }
        public ActionResult Index()
        {
            List<AspNetUser> only = new List<AspNetUser>();
            only = db.AspNetUsers.ToList();
            var extrae = from m in only select m;
            ViewBag.List = extrae.ToList();

            return View(db.AspNetUsers.ToList());
        }

        // GET: AspNetUsers/Details/5

        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
            if (aspNetUser == null)
            {
                return HttpNotFound();
            }
            //---------------------------------------------------------------
            List<AspNetUser> only = new List<AspNetUser>();

            only = db.AspNetUsers.ToList();
            var extrae = from m in only where m.Id == id select m;
            ViewBag.List = extrae.ToList();

            //----------------------------------------------------------
            return View(aspNetUser);
        }

        // GET: AspNetUsers/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AspNetUsers/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Email,EmailConfirmed,PasswordHash,SecurityStamp,PhoneNumber,PhoneNumberConfirmed,TwoFactorEnabled,LockoutEndDateUtc,LockoutEnabled,AccessFailedCount,UserName,Photo")] AspNetUser aspNetUser)
        {
            if (ModelState.IsValid)
            {
                db.AspNetUsers.Add(aspNetUser);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(aspNetUser);
        }

        // GET: AspNetUsers/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
            if (aspNetUser == null)
            {
                return HttpNotFound();
            }
            return View(aspNetUser);
        }

        // POST: AspNetUsers/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Email,EmailConfirmed,PasswordHash,SecurityStamp,PhoneNumber,PhoneNumberConfirmed,TwoFactorEnabled,LockoutEndDateUtc,LockoutEnabled,AccessFailedCount,UserName,Photo,File")] AspNetUser aspNetUser)
        {

            //-----------------------------------agrega foto-----------------------------
            if (aspNetUser.File == null) { return RedirectToAction("Index"); }

                if (aspNetUser.File.ContentLength > (2 * 1024 * 1024))
                {
                    ModelState.AddModelError("CustomError", "File size must be less than 2 MB");
                    return RedirectToAction("Index");
                }
                if (!(aspNetUser.File.ContentType == "image/jpeg" || aspNetUser.File.ContentType == "image/gif"))
                {
                    ModelState.AddModelError("CustomError", "File type allowed : jpeg and gif");
                    return RedirectToAction("Index");
                }
            
            //aspNetUser.FileName = aspNetUser.File.FileName;
            //aspNetUser.ImageSize = aspNetUser.File.ContentLength;

            byte[] data = new byte[aspNetUser.File.ContentLength];
            aspNetUser.File.InputStream.Read(data, 0, aspNetUser.File.ContentLength);

            aspNetUser.Photo = data;
            aspNetUser.UserName = aspNetUser.UserName;
            //using (ShieldEntities2 dc = new ShieldEntities2())
            //{
            //    dc.ImageGalleries.Add(IG);
            //    dc.SaveChanges();
            //}

            //--------------------------------------------------------------------------
            if (ModelState.IsValid)
            {
                db.Entry(aspNetUser).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(aspNetUser);
        }

        // GET: AspNetUsers/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
            if (aspNetUser == null)
            {
                return HttpNotFound();
            }
            return View(aspNetUser);
        }

        // POST: AspNetUsers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            AspNetUser aspNetUser = db.AspNetUsers.Find(id);
            db.AspNetUsers.Remove(aspNetUser);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
