import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styles: `header { background-image: url("/assets/hero-image-wr.jpg");}`,
})
export class LayoutComponent {}
