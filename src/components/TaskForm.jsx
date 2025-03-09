import { useState } from "react";
import useTaskStore from "../store/useTaskStore";

const TaskForm = () => {
    const [description, setDescription] = useState("");
    const [person, setPerson] = useState("");
    const [reward, setReward] = useState("");
    const addTask = useTaskStore((state) => state.addTask);
    const people = useTaskStore((state) => state.people);

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Descrição da Tarefa"
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
    );
};

export default TaskForm;
