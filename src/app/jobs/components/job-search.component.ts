import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-job-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center justify-between gap-2 bg-white rounded p-6">
      <!--  chips-->
      <div class="flex flex-wrap gap-x-3 gap-y-4 flex-grow">
        <ng-container *ngFor="let query of queries">
          <lbk-chip
            (remove)="remove.emit(query)"
            class="block"
            [name]="query"
          ></lbk-chip>
        </ng-container>
      </div>
      <!--  chips-->

      <!--  clear-->
      <p (click)="clear.emit()" class="font-bold cursor-pointer text-fill py-1 hover:text-primary hover:underline">
        Clear
      </p>
      <!--  end clear-->
    </div>
  `,
})
export class JobSearchComponent {
  @Input('queries') queries!: string[];
  @Output() clear = new EventEmitter<void>();
  @Output() remove = new EventEmitter<string>();
}
