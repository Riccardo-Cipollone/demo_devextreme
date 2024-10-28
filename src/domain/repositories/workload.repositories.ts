import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

export abstract class WorkloadRepository {
  abstract saveDraft(project: Project): Observable<string>;
  abstract publish(projectId: String): boolean;
}
