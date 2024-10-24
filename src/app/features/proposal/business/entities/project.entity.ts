export interface Action {
  name: string;
  color: string;
}

export class Project {
  constructor(
    public figure: string,
    public actions: Action[],
    public area: string[] | null,
    public hours: {
      tot: number;
      scheduled: number;
    },
    weeklyHours: { [date: string]: number }
  ) {
    for (let hours in weeklyHours) {
      this[hours] = weeklyHours[hours];
    }
  }
  [date: string]:
    | number
    | string
    | string[]
    | Action[]
    | { tot: number; scheduled: number }
    | null;
}
