import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { UserCreate } from '../../models/users.model';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  form = inject(FormBuilder);
  alert: boolean = false;

  constructor(private usuarioServices: UsuarioService) {}

  userForm = this.form.group({
    nombre: ['', Validators.required],
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    direccion: ['', [Validators.required, Validators.minLength(5)]],
    ciudad: ['', [Validators.required, Validators.minLength(5)]],
    compania: ['', [Validators.required, Validators.minLength(5)]]
  });

  onSubmit() {

    const userCreate: UserCreate = {
      id: 101,
      name: this.userForm.value.nombre || '',
      username: this.userForm.value.usuario || '',
      email: this.userForm.value.correo || '',
      phone: this.userForm.value.telefono || '',
      address: {
        street: this.userForm.value.direccion || '',
        city: this.userForm.value.ciudad || ''
      },
      company: {
        name: this.userForm.value.compania || ''
      }
    };

    this.usuarioServices.createUsuario(userCreate).subscribe({
      next: (response: any) => {
        console.log('Usuario creado:', response);
        this.alert = true;
      },
      error: (error: any) => {
        console.error('Error al crear usuario:', error);
      }
    });
  }

  resetForm(){
    this.alert = false;
    this.userForm.reset();
  }
}
