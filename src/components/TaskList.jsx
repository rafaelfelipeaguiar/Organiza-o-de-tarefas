import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const removeTask = useTaskStore((state) => state.removeTask);

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.description} - {task.person} ({task.reward})
                        <button onClick={() => removeTask(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
