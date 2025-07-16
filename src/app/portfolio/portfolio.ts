import { Component } from '@angular/core';
import { Star } from "../star/star";

interface Image{
  img:string;
  title:string;
}

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {


  imagesList:Image[] = [
    {
      img:'./images/port1.png',
      title:'Portfolio Image 1'
    }
    ,{
      img:'./images/port2.png',
      title:'Portfolio Image 2'
    }
    ,{
      img:'./images/port3.png',
      title:'Portfolio Image 3'
    }
    ,{
      img:'./images/port1.png',
      title:'Portfolio Image 4'
    }
    ,{
      img:'./images/port2.png',
      title:'Portfolio Image 5'
    }
    ,{
      img:'./images/port3.png',
      title:'Portfolio Image 6'
    }
  ]

  modalImg: string = '';
  modalView: boolean = true;

  showModal(e: MouseEvent, img:HTMLImageElement) {
    if(e.target != img) {
      this.modalView = true;
    }
  }


}
