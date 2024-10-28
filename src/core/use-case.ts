import { Observable } from 'rxjs';

export interface UseCase<P, R> {
  execute(param: P): Observable<R>;
}
