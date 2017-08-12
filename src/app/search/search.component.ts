import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  allResults: Array<any> = [
    {
      "id": 1,
      "title": "1Yo go it works",
      "description": "Your mama works just fine also"
    },
    {
      "id": 2,
      "title": "2Yo go it 30 works",
      "description": "Your mama works5 just fine also"
    },
    {
      "id": 3,
      "title": "3Yo go it works",
      "description": "Your mama works just fine also"
    },
    {
      "id": 4,
      "title": "4Yo go it works",
      "description": "Your 55 mama works just fine also"
    },
    {
      "id": 5,
      "title": "Yo go ita works",
      "description": "Your 5 mama works just fine also"
    },
    {
      "id": 5,
      "title": "Yo go aait works",
      "description": "Your 5 mama works just fine also"
    },
  ];
  results = [];
  searchingFor = '';

  onSearch(query: string) {
    this.searchingFor = query;
    if (query === '') {
      this.results = [];
      return;
    }
    this.allResults.forEach((res) => {
      if (res.title.toLocaleLowerCase().includes(query.toLowerCase())) {
        res.titleWithStyle = this.paintFoundChars(res, query);
        if (this.results.indexOf(res) > -1) return;
        this.results.push(res);
      } else {
        const index = this.results.indexOf(res);
        if (index > -1) {
          this.results.splice(index, 1)
        }
      }
    })
  }

  private paintFoundChars(res, query) {
    const title = res.title;
    const r = RegExp(`(${query})`, 'i');
    return title.replace(r, '<span class="super-class">$1</span>');
  }

}
