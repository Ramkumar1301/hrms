import { Component } from '@angular/core';

@Component({
  selector: 'app-timepass',
  templateUrl: './timepass.component.html',
  styleUrls: ['./timepass.component.css']
})
export class TimepassComponent {
  public bluecolor="title";
  public hasError="true";
  public isSpecial={
    "title":this.hasError,

  }

}
