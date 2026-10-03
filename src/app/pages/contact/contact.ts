import { Component } from '@angular/core';
import {
  ReactiveFormsModule, FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {

  contactForm: FormGroup;

  enviado = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.contactForm = this.fb.group({

      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      correo: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      telefono: [
        '',
        [
          Validators.required
        ]
      ],

      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  onSubmit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    console.log(this.contactForm.value);

    this.enviado = true;

    this.contactForm.reset();

  }

}

