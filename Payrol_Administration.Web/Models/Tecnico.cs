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
    
    public partial class Tecnico
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Tecnico()
        {
            this.Contratos = new HashSet<Contrato>();
            this.OrdenesTrabajoes = new HashSet<OrdenesTrabajo>();
        }
    
        public int TecnicoID { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Usuario { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Contrato> Contratos { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrdenesTrabajo> OrdenesTrabajoes { get; set; }
    }
}
