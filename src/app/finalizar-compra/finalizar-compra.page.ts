import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.page.html',
  styleUrls: ['./finalizar-compra.page.scss'],
})
export class FinalizarCompraPage implements OnInit {

  idPizza;
  nomePizza;
  cep:string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.idPizza = this.activatedRoute.snapshot.params.id
    let pizzaString = localStorage.getItem(this.idPizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    this.nomePizza = pizzaObjeto.nomePizza
  }

  async buscarEndereco(){
    console.log(this.cep)
    fetch("https://viacep.com.br/ws/"+this.cep+"/json").then(function(dados){
      dados.json().then(function(endereco){
        console.log(endereco)
      })
    })
  }

}
