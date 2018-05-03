import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../retrieve-entries.service';
import 'rxjs';
import { Entry } from '../entry-interface';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
  entry:Entry;
  idEntry: string;
  constructor(private RetrieveEntriesService: RetrieveEntriesService, private route: Router, private ActivateRoute:ActivatedRoute) { }

  ngOnInit() {

    this.ActivateRoute.params.subscribe((params) => this.idEntry = String(params['id']));

    this.RetrieveEntriesService.getEntry(this.idEntry).subscribe(e=>{
      this.entry = e
    })

  }




}
