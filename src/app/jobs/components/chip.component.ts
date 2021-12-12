import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="inline-flex bg-primary/10 items-center gap-3 rounded overflow-hidden"
    >
      <!--  name-->
      <p class="text-primary pl-3 font-bold">{{ name }}</p>
      <!--  end name-->

      <!--  close-->
      <span
        (click)="remove.emit()"
        class="cursor-pointer bg-primary p-2 inline-block hover:bg-dark"
      >
        <img src="/assets/images/icon-remove.svg" alt="Remove" />
      </span>
      <!--  end close-->
    </div>
  `,
})
export class ChipComponent {
  @Input() name!: string;
  @Output() remove = new EventEmitter<void>();
}
