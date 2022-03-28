import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ISave} from "../models";
import {AuthService} from "./service/auth.service";
import {DatabaseService} from "./service/database.service";
import {loadSave} from './store/digimon.actions';

@Component({
  selector: 'digimon-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    private store: Store,
    private authService: AuthService,
    private databaseService: DatabaseService
  ) {
    this.loadSave();
  }

  /**
   * Load the User-Save
   * a) If the User is logged in, load the data from the database
   * b) If the User is not logged in, load the data from the local storage
   * @private
   */
  private loadSave(): void {
    //if(this.authService.isLoggedIn) {
    //  const item = this.databaseService.loadSave(this.authService.userData);
    //  if (!item) return;
    //  const save: ISave = JSON.parse(item)
    //  this.store.dispatch(loadSave({save}));
    //  return;
    //}

    const item = localStorage.getItem('Digimon-Card-Collector');
    if (!item) return;
    const save: ISave = JSON.parse(item)
    this.store.dispatch(loadSave({save}));
  }
}
