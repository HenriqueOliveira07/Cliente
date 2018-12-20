import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../mock-clientes';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes = CLIENTES;
  selectedClient: Cliente;
  onSelect(Cliente: Cliente): void{
    this.selectedClient = Cliente;
  };
  constructor() { }

  ngOnInit() {
  }

}
