import { Component } from '@angular/core';
import {FeierabendBier} from './FeierabendBier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer-with-fabian';

  constructor() {
    new FeierabendBier().sendResponse(FeierabendBier.beerType[0],'Carsten');
  }
}

