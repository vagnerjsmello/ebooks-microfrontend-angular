import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Ebook } from './models/ebook.model';
import { BookLog } from './models/ebook-log.model';
import { EbookDetails } from './models/ebook-details.model';

@Injectable({
  providedIn: 'root'
})
export class EbookDetailsService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getEbookById(id: number): Observable<Ebook> {
    return this.http.get<Ebook>(`${this.apiUrl}/ebooks/${id}`);
  }

  getLogsByEbookId(ebookId: number): Observable<BookLog[]> {
    return this.http.get<BookLog[]>(`${this.apiUrl}/logs?ebookId=${ebookId}`);
  }

  getEbookWithLogs(id: number): Observable<EbookDetails> {
    return forkJoin({
      ebook: this.getEbookById(id),
      logs: this.getLogsByEbookId(id)
    });
  }
}
