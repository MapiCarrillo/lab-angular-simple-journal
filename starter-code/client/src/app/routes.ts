import { EntryListComponent } from "./entry-list/entry-list.component";
import { SingleEntryComponent } from "./single-entry/single-entry.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: EntryListComponent },
    { path: 'entry/:id', component: SingleEntryComponent }
  ];