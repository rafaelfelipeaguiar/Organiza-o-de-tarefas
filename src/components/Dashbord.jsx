import useTaskStore from "../store/useTaskStore";

const Dashboard = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "concluída").length;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total de Tarefas: {totalTasks}</p>
            <p>Tarefas Concluídas: {completedTasks}</p>
        </div>
    );
};

export default Dashboard;
