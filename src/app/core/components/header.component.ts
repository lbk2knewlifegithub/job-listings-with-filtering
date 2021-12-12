import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container-large px-0 bg-header">
      <div>
        <!--    mobile-->
        <img
          class="w-full lg:hidden"
          src="/assets/images/bg-header-mobile.svg"
          alt="Background header"
        />
        <!--    end mobile-->

        <!--    desktop-->
        <img
          class="w-full hidden lg:block"
          src="/assets/images/bg-header-desktop.svg"
          alt="Background header"
        />
        <!--    end desktop-->
      </div>
    </header>
  `,
})
export class HeaderComponent {}
