import { HttpClient } from '@angular/common/http';
import { WorkloadRepository } from '../../../domain/repositories/workload.repositories';
import { Project } from '../../../domain/models/project.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class WorkloadRepositoryImpl extends WorkloadRepository {
  constructor(private http: HttpClient) {
    super();
  }

  saveDraft(project: ProjectEntity): Observable<string> {
    return this.http.post<string>('', {});
  }
  publish(projectId: String): boolean {
    throw new Error('Method not implemented.');
  }
}
