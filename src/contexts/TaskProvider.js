import { createContext, useContext } from "react";
import { v4 } from "uuid"; // 높은 확률로 겹치지 않는 값을 생성해줍니다.
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("task", []);

  const addTask = (content) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id, status) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
