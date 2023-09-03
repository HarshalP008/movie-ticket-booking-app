import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  ticketQty : any =0;
  moviesArr: any[] = [];
  slides: any[] = [
    { image: "../assets/movie-theter.avif", text: 'Image' },
    { image: "../assets/Gadar-2-Movie .jpg", text: 'Image' },
    { image: "../assets/banner1.jpg", text: 'Image' },
    { image: "../assets/3591475.jpg", text: 'Image' },
  ];
  moviesList: any[] = [
    {
      "Title": "The Lion King",
      "Year": "2019",
      "Runtime": "118 min",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Mowgli",
      "Year": "2018",
      "Runtime": "104 min",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
    },
    {
      "Title": "Gadar-2",
      "Year": "2023",
      "Runtime": "180 min",
      "Poster": "../assets/Gadar-2-Movie .jpg"
    },
    {
      "Title": "Doctor Strange",
      "Year": "2016",
      "Runtime": "115 min",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
    },
    {
      "Title": "John Wick",
      "Year": "2014",
      "Runtime": "101 min",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
    },
    {
      "Title": "Gadar-2",
      "Year": "2023",
      "Runtime": "180 min",
      "Poster": "../assets/Gadar-2-Movie .jpg"
    },
  ]
  ngOnInit() {
    this.moviesArr = this.getObject();
  }
  getObject() {
    return this.moviesList;
  }
  incQty(item: any) {
    this.ticketQty++;
  }
  decQty(item: any) {
    if (this.ticketQty > 0) {
      this.ticketQty--;
    }
  }
}