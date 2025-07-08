import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserCreate } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  constructor() { }

  /// Obtiene la lista de usuarios
  /// @returns Observable<any[]> - Lista de usuarios
  /// @description Esta función realiza una solicitud GET a la API para obtener todos los usuarios.
  /// La URL de la API se define en el archivo de entorno.
  /// Se espera que la respuesta sea un array de objetos de usuario.
  getUsuarios() {
    return this.http.get<any[]>(`${this.apiUrl}users`);
  }

  /// Obtiene un usuario por su ID
  /// @param id - ID del usuario a obtener
  /// @returns Observable<any> - Detalles del usuario
  getUsuarioId(id: number) {
    return this.http.get<any>(`${this.apiUrl}users/${id}`);
  }

  /// Crea un nuevo usuario
  /// @param objeto - Objeto que contiene los datos del usuario a crear
  /// @returns Observable<any> - Respuesta del servidor
  createUsuario(objeto: UserCreate) {
    return this.http.post<any>(`${this.apiUrl}posts`, objeto);
  }
}
