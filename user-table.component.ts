import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioServices: UsuarioService) {
  }
  ngOnInit(): void {
    this.getUsuarios()

  }

  getUsuarios() {
    this.usuarioServices.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data.slice(0, 5);
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  getUserId(id: number) {
    this.usuarioServices.getUsuarioId(id).subscribe({
      next: (data: any) => {
        console.log('Usuario con ID', id, ':', data);
      },
      error: (error: any) => {
        console.error('Error al obtener usuario con ID', id, ':', error);
      }
    });
  }

}
