import { Observable } from 'rxjs';
import { UseCase } from '../../../core/use-case';

import { WorkloadRepository } from '../../repositories/workload.repositories';
import { Project } from '../../models/project.model';

export class WorkloadSaveDraft implements UseCase<Project, string> {
  constructor(private workloadRepository: WorkloadRepository) {}

  execute(param: Project): Observable<string> {
    return this.workloadRepository.saveDraft(param);
  }
}
