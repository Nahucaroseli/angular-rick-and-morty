import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  public characters:any;
  constructor(private service:ApiService){

  }


  ngOnInit(){
    this.service.getCharacters(1).subscribe(res=>{
      this.characters = res;
      console.log(this.characters);
    })
  }

  

}
