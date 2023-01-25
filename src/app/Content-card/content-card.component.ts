import { Component, OnInit } from '@angular/core';
import { ContentList } from './content-list.ts';
import { Content } from './content.interface';

@Component({
  selector: 'app-content-card',
  template: `
    <div *ngFor="let item of contentList.content; index as i">
      <div [innerHTML]="contentList.generateHTML(i)"></div>
    </div>
  `
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add({
        id: 1,
        title: 'Sanjay Dutt',
        description: 'Sanjay Balraj Dutt is an Indian actor who primarily works in Hindi cinema. In a career spanning over four decades, Dutt has won several accolades and acted in over 100 films',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Sanjay_Dutt_at_Mumbai_Airport%2C_2018_%28cropped%29.jpg',
        type: 'Action',
        tags: ['Tall', 'Fight']
    });
    this.contentList.add({
        id: 2,
        title: 'Dwayne Johnson',
        description: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor and former professional wrestler. ',
        imgURL: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg',
        type: 'Action',
        tags: ['Rock', 'Body']
    });
    this.contentList.add({
        id: 3,
        title: 'Tom Cruise',
        description: 'Thomas Cruise Mapother IV is an American actor and producer. One of the worlds highest-paid actors, he has received various accolades, including an Honorary Palme dOr and three Golden Globe Awards, in addition to nominations for four Academy Awards.',
        imgURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQynIAJReBEhr6FGTQHQkIo0jmfWLY07G0J7qMOUQow9hBHf-Ad',
        type: 'Action',
        tags: ['Smart','Soft']
    });
  }

  ngOnInit() {}
}