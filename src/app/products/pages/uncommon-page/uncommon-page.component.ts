import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select

  public name: string = 'Joaquin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18n Plural
  public clientes : string[] = ['Maria', 'Pedro', 'Fernando', 'Catalina', 'Joaquin', 'Felipe', 'Diego', 'Paulo', 'Nicolas', 'Jesus'];
  public clientsMap={
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clientes.shift();
  }

  // KeyValue Pipe
  public person = {
    name:  'Joaquin',
    age: '23',
    address: 'Chillan, Chile'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolver, reject)=>{
    setTimeout(()=>{
      resolver('Tenemos data en la promesa.');
    }, 3500)
  })


}
