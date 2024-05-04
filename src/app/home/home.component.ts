import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { AboutComponent } from "../about/about.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AppComponent, AboutComponent, TimelineComponent, HeaderComponent, RouterModule, FooterComponent]
})
export class HomeComponent {
   
}
