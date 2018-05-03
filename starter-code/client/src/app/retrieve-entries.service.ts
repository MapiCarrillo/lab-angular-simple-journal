import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs";
import * as _ from "underscore";

import { Entry } from "./entry-interface";

@Injectable()
export class RetrieveEntriesService {
  BASE_URL: string = "http://localhost:3000";
  entries: Array<Entry> = [];

  constructor(private http: Http) {}
  getEntries() {
    return this.http
      .get(`${this.BASE_URL}/api/journal-entries`)
      .map(res => res.json());
  }
  getEntry(idEntry: string) {
    return this.http
      .get(`${this.BASE_URL}/api/journal-entries/${idEntry}`)
      .map(res => res.json());
  }
}
