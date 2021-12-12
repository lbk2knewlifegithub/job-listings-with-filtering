import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
  selector: 'lbk-job-card',
  templateUrl: './job-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  @Input('job') job!: Job;
  @Output('onRole') onRole = new EventEmitter<string>();
  @Output('onLevel') onLevel = new EventEmitter<string>();
  @Output('onLanguage') onLanguage = new EventEmitter<string>();
  @Output('onTool') onTool = new EventEmitter<string>();

  get border(): string {
    if (this.job.new && this.job.featured)
      return 'border-l-[5px] rounded border-primary';

    return '';
  }
}
