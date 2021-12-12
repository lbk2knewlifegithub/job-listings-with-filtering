import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Job } from '../models/job.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(jobs: Job[], ...args: unknown[]): Job[] {
    const filter = args[0] as Filter;
    let filtered = [...jobs];
    // filter by role
    if (filter.role) {
      filtered = filtered.filter((job) => job.role === filter.role);
    }

    // filter by level
    if (filter.level) {
      filtered = filtered.filter((job) => job.level === filter.level);
    }

    // filter by languages
    if (filter.languages.length > 0) {
      filtered = filtered.filter((job) => {
        for (const language of job.languages) {
          if (filter.languages.includes(language)) return true;
        }
        return false;
      });
    }

    // filter by tools
    if (filter.tools.length > 0) {
      filtered = filtered.filter((job) => {
        for (const tool of job.tools) {
          if (filter.tools.includes(tool)) return true;
        }
        return false;
      });
    }

    return filtered;
  }
}
