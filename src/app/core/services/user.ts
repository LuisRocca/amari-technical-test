import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene una lista de usuarios aleatorios
   * @param results Número de usuarios a obtener (máximo 5000)
   * @param page Número de página para paginación
   * @param seed Seed para obtener los mismos usuarios
   * @returns Observable con la respuesta del API
   */
  getUsers(results: number = 10, page: number = 1, seed?: string): Observable<ApiResponse> {
    let params = new HttpParams().set('results', results.toString()).set('page', page.toString());

    if (seed) {
      params = params.set('seed', seed);
    }

    return this.http.get<ApiResponse>(this.API_URL, { params });
  }

  /**
   * Obtiene usuarios de un género específico
   * @param gender 'male' o 'female'
   * @param results Número de usuarios a obtener
   * @returns Observable con la respuesta del API
   */
  getUsersByGender(gender: 'male' | 'female', results: number = 10): Observable<ApiResponse> {
    const params = new HttpParams().set('gender', gender).set('results', results.toString());

    return this.http.get<ApiResponse>(this.API_URL, { params });
  }

  /**
   * Obtiene usuarios de nacionalidades específicas
   * @param nationalities Lista de códigos de nacionalidad (ej: 'us,gb,fr')
   * @param results Número de usuarios a obtener
   * @returns Observable con la respuesta del API
   */
  getUsersByNationality(nationalities: string[], results: number = 10): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('nat', nationalities.join(','))
      .set('results', results.toString());

    return this.http.get<ApiResponse>(this.API_URL, { params });
  }

  /**
   * Obtiene un usuario único
   * @param seed Seed para reproducibilidad
   * @returns Observable con un usuario
   */
  getUser(seed: string): Observable<User> {
    const params = new HttpParams().set('seed', seed);

    return new Observable((observer) => {
      this.http.get<ApiResponse>(this.API_URL, { params }).subscribe({
        next: (response) => {
          if (response.results && response.results.length > 0) {
            observer.next(response.results[0]);
            observer.complete();
          } else {
            observer.error(new Error('No user found'));
          }
        },
        error: (error) => observer.error(error),
      });
    });
  }
}
