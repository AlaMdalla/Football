import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TimelineComponent } from "./timeline/timeline.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, TimelineComponent]
})
export class AppComponent {
  title = 'Fottball';
}
