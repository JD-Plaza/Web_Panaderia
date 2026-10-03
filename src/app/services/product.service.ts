import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {



  getProducts(): Product[] {

    return [

      {
        id: 1,
        nombre: 'Tarta de Chocolate',
        descripcion: 'Chocolate intenso con frutos rojos.',
        precio: 4,
        imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbj7H6p2nfOn8MLQkuW2GR37y9FfIyXB4hpZYClBdb-4PB5xpQ_sjJmxxtLmmI_rQciwhepjxzgoC_Y1sVTmxSQ8aVNpOE_bRBpuckIduZvhv6EAJCJ1d-b74isJdMtLwYrtU5FZEcC-lS9ZwaIDGMxEuAwZDYFVK-BicLCRGt7CpRzvxyYZCgsJgOLKTlUbU7dljO2SeY-fp9U7AFRobaznIt2l7zMo3uVw1chYYlWm65FjH128qMMnPEaJdqHAjF3xAQKA3mUH7H',
        categoria: 'Pasteles'
      },

      {
        id: 2,
        nombre: 'Croissant de Mantequilla',
        descripcion: 'Masa hojaldrada artesanal.',
        precio: 4,
        imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsGLcEPAJLI1V5NZ_NgzPfKiN0A8lbkARndKkI2NyFqbjSs3u2VljEnoNB-fjuKgASEp-5SqUBmMChjJUFkKwX9RtErDWl2d5ZJ94QnVDWkGr1RmJFqRUVSUlMCYJoSVwwpv-HsuKhotAcKUxeeS1VkhqQJWbm6odN-6tjScNhjNfgBtiyUDpv6hB4WhFD2v3oO99saLanu5Wq3ln1b4h90fXczTZ1xY3zaY4hzYzu8FPrzo-9qnFi-OrTuTUIzCrfpn-RxOaKEc0K',
        categoria: 'Panes'
      },

      {
        id: 3,
        nombre: 'Pack de Donas',
        descripcion: 'Caja de donas artesanales.',
        precio: 4,
        imagen: 'https://images.squarespace-cdn.com/content/v1/5e39a6c465c3b97a6f68aeec/1680207374312-7PFKHR6SKQ8II00FPW7Z/Classic+4-Pack.png?format=1500w',
        categoria: 'Postres'
      },

      {
        id: 4,
        nombre: 'Cheesecake New York',
        descripcion: 'Cheesecake clásico.',
        precio: 8,
        imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnnFqt68xIfQihhG1EGgprQWNlGUtyDAH0ML28_EZwHnkhLEXBMXYPU3uMXlSWvWAGxL_or__y-jzv8TYRe76psIlHphxyEZqiJwPfAnq-mt6yq8kZORPHpUttc2Hw96mRFyuBNJnq229MU3eMDiZSYw6yQO3X1xDzSz0zSlWNmiG0Irb9NKLbgqB_zYpvloAgXnscB5kAraRug6SJuWycH_WpUiQyyF6Mv8jLHW_qJLN-ZUfSNNfO3qny3YVIT1WBoyfsFu2l53J_',
        categoria: 'Pasteles'
      },

      {
        id: 5,
        nombre: 'Torta de Cumpleaños',
        descripcion: 'Torta especial para celebraciones.',
        precio: 40,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVKn9vKTw-XFis3QC6Nu_Id_lpb2eEpYYKS5zZym6KaspkUA26PHRd9rh&s=10',
        categoria: 'Tortas'
      }

    ];

  }


  getProductById(id: number): Product | undefined {

    return this.getProducts().find(
      product => product.id === id
    );

  }

}
