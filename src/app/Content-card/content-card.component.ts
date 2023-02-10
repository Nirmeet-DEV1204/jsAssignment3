import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html'
})
export class ContentCardComponent {
  @Input() content;
  @Input() border = '1px solid gray';

  showContentIdAndTitle() {
    console.log(`Content id: ${this.content.id}, title: ${this.content.title}`);
  }
}
