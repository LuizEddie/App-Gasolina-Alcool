import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public precoAlcool:number = 0;
  public precoGasolina:number = 0;
  public resultado:String = "Resultado";

  constructor() {}

  public calcular(){
    if(this.precoAlcool > 0 && this.precoGasolina > 0){

      if((this.precoAlcool/this.precoGasolina) >= 0.7){
        this.resultado = "Utilize Gasolina";
      }else{
        this.resultado = "Utilize Alcool";
      }

    }else{
      this.resultado = "Não foi preenchido";
    }
  }

}
