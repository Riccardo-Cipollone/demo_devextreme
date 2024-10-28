import { WorkloadRepository } from '../repositories/workload.repositories';
import { WorkloadSaveDraft } from './workload/save-draft.usecase';

const saveDraftFactory = (repo: WorkloadRepository) =>
  new WorkloadSaveDraft(repo);

export const saveDraftProvider = {
  provide: WorkloadSaveDraft,
  useFactory: saveDraftFactory,
  deps: [WorkloadRepository],
};
