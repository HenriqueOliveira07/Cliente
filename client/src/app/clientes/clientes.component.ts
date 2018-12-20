import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  selectedClient: Cliente;

  clientes: Cliente[];


  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void{
    this.selectedClient = cliente;
  }
  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }
}
