import { Component } from '@angular/core';
import * as fromData from 'src/app/jobs/data';
import { Filter } from '../models/filter.model';
import { Job } from '../models/job.model';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'lbk-jobs-page',
  template: `
    <main class="container relative flow-root pb-40">
      <!--filter-->
      <lbk-job-search
        (remove)="onRemove($event)"
        (clear)="onClear()"
        *ngIf="isDisplayFilter"
        [queries]="queries"
        class="block -translate-y-1/3"
      ></lbk-job-search>
      <!--end filter-->

      <div class="mt-16 flex flex-col gap-14">
        <ng-container *ngFor="let job of filtered">
          <lbk-job-card
            (onRole)="onRole($event)"
            (onLevel)="onLevel($event)"
            (onTool)="onTool($event)"
            (onLanguage)="onLanguage($event)"
            class="block"
            [job]="job"
          ></lbk-job-card>
        </ng-container>
      </div>
    </main>
  `,
  providers: [FilterPipe],
})
export class JobsPageComponent {
  jobs: Job[] = fromData.jobs as Job[];

  filter: Filter = {
    languages: [],
    tools: [],
  };

  filtered: Job[] = [...this.jobs];

  constructor(private _filterPipe: FilterPipe) {

  }
  onClear() {
    // reset filtered
    this.filtered = [...this.jobs];
    // return filter
    this.filter = {
      languages: [],
      tools: [],
    };
  }

  onRemove(query: string): void {
    if (this.filter.role == query) {
      delete this.filter.role;
    }

    if (this.filter.level == query) {
      delete this.filter.level;
    }

    if (this.filter.languages.includes(query)) {
      this.filter = {
        ...this.filter,
        languages: this.filter.languages.filter(
          (language) => language !== query
        ),
      };
    }

    if (this.filter.tools.includes(query)) {
      this.filter = {
        ...this.filter,
        tools: this.filter.tools.filter((tool) => tool !== query),
      };
    }

    this.filtering({});
  }

  filtering(filter: Partial<Filter>): void {
    // update filter
    this.filter = { ...this.filter, ...filter };
    this.filtered = this._filterPipe.transform(this.jobs, this.filter);
  }

  onRole(role: string): void {
    this.filtering({ role });
  }

  onLevel(level: string): void {
    this.filtering({ level });
  }

  onTool(tool: string): void {
    if (this.filter.tools.includes(tool)) return;
    this.filtering({ tools: [...this.filter.tools, tool] });
  }

  onLanguage(language: string): void {
    if (this.filter.languages.includes(language)) return;

    this.filtering({ languages: [...this.filter.languages, language] });
  }

  get queries(): string[] {
    const result: string[] = [];
    // add root first
    if (this.filter.role) {
      result.push(this.filter.role);
    }

    // add level second
    if (this.filter.level) {
      result.push(this.filter.level);
    }

    // add languages tree
    if (this.filter.languages.length > 0) {
      result.push(...this.filter.languages);
    }

    // add tools four
    if (this.filter.tools.length > 0) {
      result.push(...this.filter.tools);
    }

    return result;
  }

  get isDisplayFilter(): boolean {
    return (
      !!this.filter.role ||
      !!this.filter.level ||
      this.filter.languages.length > 0 ||
      this.filter.tools.length > 0
    );
  }
}
