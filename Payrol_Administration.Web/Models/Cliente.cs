//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Payrol_Administration.Web.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cliente
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Cliente()
        {
            this.Cobros = new HashSet<Cobro>();
            this.Contratos = new HashSet<Contrato>();
            this.Facturas = new HashSet<Factura>();
            this.OrdenesTrabajoes = new HashSet<OrdenesTrabajo>();
        }
    
        public int ClienteID { get; set; }
        public string Codigo { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Identidad { get; set; }
        public Nullable<int> EstadoId { get; set; }
        public Nullable<int> PosteID { get; set; }
        public string Direccion { get; set; }
        public string ClaveUbicacion { get; set; }
        public string Telefono1 { get; set; }
        public Nullable<int> Telefono1ID { get; set; }
        public string Telefono2 { get; set; }
        public Nullable<int> Telefono2ID { get; set; }
        public string Telefono3 { get; set; }
        public Nullable<int> Telefono3ID { get; set; }
        public string Empresa { get; set; }
        public string DireccionTrabajo { get; set; }
        public string email { get; set; }
        public Nullable<bool> TerceraEdad { get; set; }
        public Nullable<int> CiudadTrabajoID { get; set; }
        public Nullable<int> NodoId { get; set; }
        public Nullable<int> BarrioColoniaID { get; set; }
        public string Latitud { get; set; }
        public string Longitud { get; set; }
    
        public virtual BarrioColonia BarrioColonia { get; set; }
        public virtual Estado Estado { get; set; }
        public virtual Municipio Municipio { get; set; }
        public virtual Nodo Nodo { get; set; }
        public virtual Poste Poste { get; set; }
        public virtual TelefonoTipo TelefonoTipo { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Cobro> Cobros { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Contrato> Contratos { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Factura> Facturas { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrdenesTrabajo> OrdenesTrabajoes { get; set; }
    }
}