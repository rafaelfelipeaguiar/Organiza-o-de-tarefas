import { useState } from "react";
import useTaskStore from "../store/useTaskStore";

const PersonForm = () => {
    const [name, setName] = useState("");
    const addPerson = useTaskStore((state) => state.addPerson);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addPerson(name);
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome da Pessoa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default PersonForm;
