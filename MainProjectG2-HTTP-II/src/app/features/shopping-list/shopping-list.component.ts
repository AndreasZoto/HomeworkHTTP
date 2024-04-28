import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../shared/services/logging.service";
import {AccountsService} from "../../shared/services/accounts.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(
    private logging: LoggingService,
    private accountService: AccountsService,
  ) {
    console.log('shoppingListComponent constructor');
    // this.logging.setStatus('shoppingListComponent')
    this.accountService.setLogStatus('something')
    console.log(this.logging.getStatus())
  }




  filterInput: string = '';
  onlyOdd = false;
  numbers = [0,1,2,3,4,5,6]
  oddNumbers = [1,3,5]
  evenNumbers = [0,2,4,6]

  today = new Date();

  varJson = {
    name: 'angular',
    year: 2024
  }

  servers = [
    {
      name: 'angular',
      status: 'offline'
    },
    {
      name: 'react',
      status: 'online'
    },
    {
      name: 'view',
      status: 'offline'
    },
    {
      name: 'angularJS',
      status: 'online'
    }
  ]


  ngOnInit(): void {

    const newStatus = 'online';
    // const server = new LoggingService();
    // server.logStatusChange(newStatus);
    // server.logStatusChange('offline');

    this.logging.logStatusChange(newStatus);
  }




}
