import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { EbookDetailsComponent } from './app/ebook-details/ebook-details.component';

bootstrapApplication(EbookDetailsComponent, appConfig)
  .catch(err => console.error(err));
