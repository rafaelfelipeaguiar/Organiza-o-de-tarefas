import { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import styles from "./Tasks.module.css";

const Tasks = () => {
    const [description, setDescription] = useState("");
    const [person, setPerson] = useState("");
    const [reward, setReward] = useState("");
    const { people, tasks, addTask, removeTask, toggleTaskStatus } = useTaskStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() && person) {
            addTask({ id: Date.now(), description, person, reward, status: "pendente" });
            setDescription("");
            setPerson("");
            setReward("");
        }
    };

    return (
        <div className={styles.container}>
            <h1>Gerenciamento de Tarefas</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Descrição" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <select value={person} onChange={(e) => setPerson(e.target.value)}>
                    <option value="">Selecione uma Pessoa</option>
                    {people.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder="Recompensa" 
                    value={reward} 
                    onChange={(e) => setReward(e.target.value)} 
                />
                <button type="submit">Adicionar Tarefa</button>
            </form>

            <h2>Lista de Tarefas</h2>
            <ul className={styles.taskList}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <li 
                            key={task.id} 
                            className={`${styles.taskItem} ${task.status === "concluída" ? styles.completed : ""}`}
                        >
                            {task.description} - {task.person} ({task.reward}) [{task.status}]
                            <button onClick={() => toggleTaskStatus(task.id)}>✅</button>
                            <button onClick={() => removeTask(task.id)}>❌</button>
                        </li>
                    ))
                ) : (
                    <p>Nenhuma tarefa cadastrada.</p>
                )}
            </ul>
        </div>
    );
};

export default Tasks;
