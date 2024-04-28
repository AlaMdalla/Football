import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AppComponent]
})
export class HomeComponent {
   
}
