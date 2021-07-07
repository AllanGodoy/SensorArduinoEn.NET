using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.IO.Ports; //PERMITE EL USO DE LOS PUERTOS.
using Payrol_Administration.Web.Models;

namespace Payrol_Administration.Web.Controllers
{
    public class ArduinoMonitorController : Controller
    {
        WaterSensorEntities db = new WaterSensorEntities();
        // GET: ArduinoMonitor
        public ActionResult Index()
        {
            ViewBag.obtinemedicion = db.sp_ObtieneUltimoValor().ToList();

            return View();
        }
        public PartialViewResult Medidor()
        {
            int datos;
            ViewBag.value = "";
            SerialPort port = new SerialPort("COM5", 9600, Parity.None, 8, StopBits.One);
            try
            {
                port.Open();
                ViewBag.value = port.ReadExisting();
                port.Close();

                datos = Convert.ToInt32(ViewBag.value);
                db.guardaDatos(datos);
            }
            catch {
                ViewBag.value = 0;
                 datos = 0;
                db.guardaDatos(datos);
            }
                      
            return PartialView();
        }

        public ActionResult Conexion()
        {
            return View();
        }

        //----------------------------widgets-------
        public PartialViewResult flujo()
        {
            ViewBag.obtinemedicion = db.sp_ObtieneUltimoValor().ToList();
            return PartialView();
        }
        public PartialViewResult totalDia()
        {
            ViewBag.totaldia = db.sp_totaldia().ToList();
            return PartialView();
        }

        //-----------------------------------end widgets
    }
}