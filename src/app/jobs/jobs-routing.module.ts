import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './containers';

const routes: Routes = [{ path: '', component: JobsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
