import { Component } from '@angular/core';
import { Details } from './details';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    model = new Details();
    getData() {
        console.log(this.model)
    }
}
