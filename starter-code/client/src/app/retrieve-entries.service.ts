import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

interface Entry {
    title: string;
    contect: string;
}
@Injectable()
export class RetrieveEntriesService {
   //entries: Array<Entry>
constructor(private http: Http) { }
  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries').map((res) => res.json());
}
 
}
