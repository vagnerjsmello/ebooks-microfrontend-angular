import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ebook } from './ebook.model';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private apiUrl = 'http://localhost:3000/ebooks';

  constructor(private http: HttpClient) {}

  getEbooks(): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(this.apiUrl);
  }
}
