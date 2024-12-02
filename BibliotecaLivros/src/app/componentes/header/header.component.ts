import { Component } from '@angular/core';
import { PipecontrolService } from '../../services/pipecontrol.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private pipeControlService: PipecontrolService) {}

  togglePipe() {
    if (this.pipeControlService.isPipeEnabled) {
      this.pipeControlService.disablePipe();
    } else {
      this.pipeControlService.enablePipe();
    }
  }
}
