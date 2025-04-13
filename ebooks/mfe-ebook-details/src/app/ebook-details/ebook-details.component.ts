import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbookDetailsService } from './ebook-details.service';
import { Ebook } from './models/ebook.model';
import { BookLog } from './models/ebook-log.model';


@Component({
  selector: 'app-ebook-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ebook-details.component.html',
  styleUrls: ['./ebook-details.component.scss'],
})
export class EbookDetailsComponent {
  ebook!: Ebook;
  logs: BookLog[] = [];
  loading = true;
  error = '';

  constructor(private ebookDetailsService: EbookDetailsService) {
    // Por enquanto estamos simulando o ID 1
    const ebookId = 1;

    this.ebookDetailsService.getEbookById(ebookId).subscribe({
      next: (data) => (this.ebook = data),
      error: (err) => (this.error = 'Erro ao carregar ebook'),
    });

    this.ebookDetailsService.getLogsByEbookId(ebookId).subscribe({
      next: (data) => (this.logs = data),
      error: (err) => (this.error = 'Erro ao carregar logs'),
      complete: () => (this.loading = false),
    });
  }
}
