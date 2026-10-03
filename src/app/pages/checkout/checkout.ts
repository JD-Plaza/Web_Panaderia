
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})

export class Checkout {

  checkoutForm: FormGroup;

  comprado = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.checkoutForm = this.fb.group({

      nombre: ['', Validators.required],

      correo: [
        '',
        [Validators.required, Validators.email]
      ],

      direccion: ['', Validators.required],

      ciudad: ['', Validators.required],

      telefono: ['', Validators.required]

    });

  }

  finalizarCompra(): void {

    if (this.checkoutForm.invalid) {

      this.checkoutForm.markAllAsTouched();

      return;

    }

    this.comprado = true;

    console.log(this.checkoutForm.value);

  }

}

