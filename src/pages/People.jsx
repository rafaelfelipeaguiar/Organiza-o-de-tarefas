import { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import styles from "./People.module.css";

const People = () => {
    const [name, setName] = useState("");
    const { people, addPerson, removePerson } = useTaskStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addPerson(name);
            setName("");
        }
    };

    return (
        <div className={styles.container}>
            <h1>Cadastro de Pessoas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome da Pessoa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            <h2>Pessoas Cadastradas</h2>
            <ul>
                {people.map((p) => (
                    <li key={p.id}>
                        {p.name}
                        <button onClick={() => removePerson(p.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default People;
