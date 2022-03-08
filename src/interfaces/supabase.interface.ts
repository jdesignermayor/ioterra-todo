export interface Role {
  id: number;
  name: string;
}

export interface Task {
  id?: number;
  title: string;
  summary: string;
  isCompleted: boolean;
}
