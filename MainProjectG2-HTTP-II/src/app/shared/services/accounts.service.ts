import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable()
export class AccountsService {

  constructor(
    private loggingService: LoggingService,
  ) { }

  setLogStatus(status: string) {
    this.loggingService.status = 'status set'
    this.loggingService.setStatus(status);
    console.log(this.loggingService.getStatus())
  }
}
