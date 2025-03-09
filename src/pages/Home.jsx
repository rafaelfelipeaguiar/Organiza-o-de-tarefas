import useTaskStore from "../store/useTaskStore";
import styles from "./Home.module.css";

const Home = () => {
    const { people, tasks } = useTaskStore();

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "concluída").length;
    const pendingTasks = tasks.filter(task => task.status === "pendente").length;

    // Criar o ranking de pessoas que concluíram mais tarefas
    const ranking = people.map(person => {
        const completed = tasks.filter(task => task.person === person.name && task.status === "concluída").length;
        return { name: person.name, completed };
    });

    // Ordenar o ranking do maior para o menor
    ranking.sort((a, b) => b.completed - a.completed);

    return (
        <div className={styles.container}>
            <h1>Bem-vindo ao Gerenciador de Tarefas</h1>
            <p>Gerencie suas tarefas e defina recompensas!</p>
            <div className={styles.cards}>
                <div className={styles.summary}>
                    <p>👥 Pessoas Cadastradas: {people.length}</p>
                </div>
                <div className={styles.summary}>
                    <p>📋 Total de Tarefas: {totalTasks}</p>
                </div>
                <div className={styles.summary}>
                    <p>✅ Tarefas Concluídas: {completedTasks}</p>
                </div>
                <div className={styles.summary}>
                    <p>⏳ Tarefas Pendentes: {pendingTasks}</p>
                </div>
            </div>

            <h2>🏆 Ranking de Pessoas Mais Produtivas</h2>
            <ul className={styles.rankingList}>
                {ranking.length > 0 ? (
                    ranking.map((person, index) => (
                        <li key={person.name} className={styles.rankItem}>
                            <span className={styles.rankPosition}>#{index + 1}</span>
                            <span className={styles.rankName}>{person.name}</span>
                            <span className={styles.rankScore}>{person.completed} tarefas concluídas</span>
                        </li>
                    ))
                ) : (
                    <p>Ninguém concluiu tarefas ainda.</p>
                )}
            </ul>
        </div>
    );
};

export default Home;
