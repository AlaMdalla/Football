import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { TimelineComponent } from "../timeline/timeline.component";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterModule, HomeComponent, AboutComponent, TimelineComponent]
})
export class HeaderComponent {


  constructor() { }

 
 

}
