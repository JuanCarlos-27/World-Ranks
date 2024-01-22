import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './search-bar.component.html',
  styles: ``,
})
export class SearchBarComponent {}
