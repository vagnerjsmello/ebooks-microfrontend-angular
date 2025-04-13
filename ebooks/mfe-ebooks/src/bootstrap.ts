// bootstrap.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { EbookComponent } from './app/pages/ebook/ebook.component';

bootstrapApplication(EbookComponent, appConfig);
