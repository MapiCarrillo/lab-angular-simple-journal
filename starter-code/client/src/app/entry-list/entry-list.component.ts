import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../retrieve-entries.service';
import 'rxjs';
import { Entry } from '../entry-interface';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries:Array<Entry>=[];
  idEntry: string;
  constructor(
    private router: Router,
    private RetrieveEntriesService: RetrieveEntriesService
  ) { }

  ngOnInit() {
    this.RetrieveEntriesService.getEntries().subscribe((entries) => {
      this.entries = entries;
    })
  }

}
