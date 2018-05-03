import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../retrieve-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<any>;
  constructor(
    private router: Router,
    private RetrieveEntriesService: RetrieveEntriesService
  ) { }

  ngOnInit() {
    this.entries = this.RetrieveEntriesService.getEntries();
  }

}
