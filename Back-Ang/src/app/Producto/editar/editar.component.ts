import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  //public form: FormGroup  
  producto :Producto=new Producto();
  constructor(
   // private formBuilder: FormBuilder   ,
    private router:Router,private service:ServiceService) { 

    /*this.form = this.formBuilder.group({
      codigo: 0,
      Nombre: '',//['', Validators.required],
      Descripcion: '',// ['', Validators.required],
      Marca: ''// ['', Validators.required]
    })*/
  }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    debugger;
    let codigo=localStorage.getItem("Codigo");
    this.service.getProductoId(+codigo)
    .subscribe(data=>{
      this.producto.codigo  =data[0].codigo;
      this.producto.Nombre  =data[0].nombre;
      this.producto.Descripcion = data[0].descripcion;
      this.producto.Marca = data[0].marca;
      //this.form.patchValue(data)
    })

  }
  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
