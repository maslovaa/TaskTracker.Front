import { Pipe, PipeTransform } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project-model';

@Pipe({
  name: 'getNameProject',
  standalone: true
})
export class GetNameProjectPipe implements PipeTransform  {
  constructor(private projectService: ProjectService) {}

  transform(projectId: string): Observable<ProjectModel> {
    return this.projectService.getProjectsId(projectId);
  }
}
