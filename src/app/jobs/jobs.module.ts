import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ChipComponent,
  JobCardComponent,
  JobSearchComponent
} from './components';
import { JobsPageComponent } from './containers';
import { JobsRoutingModule } from './jobs-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

const COMPONENTS = [ChipComponent, JobSearchComponent, JobCardComponent];
const PIPES = [FilterPipe];
const CONTAINERS = [JobsPageComponent];

@NgModule({
  imports: [CommonModule, JobsRoutingModule],
  declarations: [COMPONENTS, PIPES, CONTAINERS],
})
export class JobsModule {}
