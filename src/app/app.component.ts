import { Component, OnInit } from '@angular/core';
import { Env } from 'src/app/utils/config';
import { Api } from 'src/app/utils/appwrite';
import { Query } from 'appwrite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.view_records();
  }
  recordsF: any = [];
  recordsB: any = [];
  Menu: boolean = false;

  async view_records() {
    const sdk = Api.appwrite();
    this.recordsF = await sdk.database.listDocuments(
      Env.databaseID,
      Env.projectsID,
      [Query.equal('Featured', true)]
    );
    this.recordsB = await sdk.database.listDocuments(
      Env.databaseID,
      Env.projectsID,
      [Query.equal('Featured', false)]
    );
  }

  showMenu() {
    this.Menu = true;
  }

  hideMenu() {
    this.Menu = false;
  }
}
