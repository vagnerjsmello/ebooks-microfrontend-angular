import { BookLog } from "./ebook-log.model";
import { Ebook } from "./ebook.model";

export interface EbookDetails{
    ebook: Ebook;
    logs: BookLog[];
  }
  