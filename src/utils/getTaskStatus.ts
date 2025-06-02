import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, actuveTask: TaskModel | null) {
  if (task.completeDate) return 'Completa';
  if (task.interruptDate) return 'Interrompida';
  if (task.id === actuveTask?.id) return 'Em Progresso';
  return 'Abandonada';
}
