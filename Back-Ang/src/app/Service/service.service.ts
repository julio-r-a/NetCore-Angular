import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='https://localhost:5001/api/producto';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
  getProductoId(codigo:number){
    return this.http.get<Producto>(this.Url+"/"+codigo);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.codigo,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.codigo);
  }
  
}
