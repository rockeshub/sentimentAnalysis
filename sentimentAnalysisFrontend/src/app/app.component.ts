import { Component } from '@angular/core';
import { HttpService } from './http.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent {
  title = 'app';
  constructor(
    private http: HttpService) {
  }
   resultEmoji: any = {
    'score': -5,
    'emoji': 'sentiment_very_dissatisfied',
   };
  emoji = [{
    'score': -5,
    'emoji': 'sentiment_very_dissatisfied',
  },
  {
    'score': -4,
    'emoji': 'sentiment_very_dissatisfied',
  },
  {
    'score': -3,
    'emoji': 'sentiment_very_dissatisfied',
  },
  {
    'score': -2,
    'emoji': 'sentiment_dissatisfied',
  },
  {
    'score': -1,
    'emoji': 'sentiment_dissatisfied',
  },
  {
    'score': 5,
    'emoji': 'sentiment_very_satisfied',
  },
  {
    'score': 4,
    'emoji': 'sentiment_very_satisfied',
  },
  {
    'score': 3,
    'emoji': 'sentiment_satisfied_alt',
  },
  {
    'score': 2,
    'emoji': 'sentiment_satisfied_alt',
  },
  {
    'score': 1,
    'emoji': 'sentiment_satisfied',
  },
  {
    'score': 0,
    'emoji': 'sentiment_satisfied',
  }];
    tiles = {text: 'One', cols: 1, rows: 2, color: 'white'};
    mtiles = {text: 'One', cols: 2, rows: 2, color: 'white'};
    result: Observable<any>;

  analyse(text) {
    const payload = {
      'text': text
    };
    console.log('text', text);
    this.http.addHero(payload).subscribe(
      res => {
        console.log('res', res);
        this.result = res;
        this.resultEmoji = _.find(this.emoji, { 'score': _.round(res.score) });
      },
      error => {
        console.log('error', error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
