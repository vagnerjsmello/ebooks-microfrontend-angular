import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbookService } from './ebook.service';
import { Ebook } from './ebook.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ebook',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.scss']
})
export class EbookComponent {
  ebooks: Ebook[] = [];
  loading = true;
  error = '';

  constructor(private ebookService: EbookService) {
    this.ebookService.getEbooks().subscribe({
      next: data => {
        this.ebooks = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Erro ao carregar ebooks.';
        this.loading = false;
      }
    });
  }
}
