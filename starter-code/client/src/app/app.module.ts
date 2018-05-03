import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RetrieveEntriesService } from './retrieve-entries.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';

import { routes } from './routes'


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RetrieveEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
