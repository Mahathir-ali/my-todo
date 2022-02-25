import { ITask } from "./Interface";
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <DeleteIcon className="red"/>
      </button>
    </div>
  );
};

export default TodoTask;