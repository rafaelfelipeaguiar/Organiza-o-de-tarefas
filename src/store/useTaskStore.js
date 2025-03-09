import { create } from 'zustand';
import { getLocalData, setLocalData } from '../services/storageService';

const useTaskStore = create((set) => ({
    people: getLocalData("people"),
    tasks: getLocalData("tasks"),

    addPerson: (name) => set((state) => {
        const updatedPeople = [...state.people, { id: Date.now(), name }];
        setLocalData("people", updatedPeople);
        return { people: updatedPeople };
    }),

    addTask: (task) => set((state) => {
        const updatedTasks = [...state.tasks, task];
        setLocalData("tasks", updatedTasks);
        return { tasks: updatedTasks };
    }),

    removePerson: (id) => set((state) => {
        const updatedPeople = state.people.filter(person => person.id !== id);
        setLocalData("people", updatedPeople);
        return { people: updatedPeople };
    }),

    removeTask: (id) => set((state) => {
        const updatedTasks = state.tasks.filter(task => task.id !== id);
        setLocalData("tasks", updatedTasks);
        return { tasks: updatedTasks };
    }),

    toggleTaskStatus: (id) => set((state) => {
        const updatedTasks = state.tasks.map(task => 
            task.id === id ? { ...task, status: task.status === "pendente" ? "concluída" : "pendente" } : task
        );
        setLocalData("tasks", updatedTasks);
        return { tasks: updatedTasks };
    })
}));

export default useTaskStore;
