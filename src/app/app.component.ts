import { Component } from '@angular/core';
import { IFormGroup } from '@rxweb/types';

export class User{

  firstName:string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10type';
  selectorForm: IFormGroup<User>;
}
