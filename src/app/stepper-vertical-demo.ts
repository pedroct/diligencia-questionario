import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { MessageService } from 'primeng/api';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'stepper-vertical-demo',
  templateUrl: './stepper-vertical-demo.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [MessageService],
})
export class StepperVerticalDemo {
  text: string | undefined;
  stateOptions: any[] = [
    { label: 'Sim', value: 'sim' },
    { label: 'Não', value: 'nao' },
  ];
  value: string = 'off';

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Imagem(s) armazenada(s) com sucesso!',
      detail: '',
    });
  }
}
