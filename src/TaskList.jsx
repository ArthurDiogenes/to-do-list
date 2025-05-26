export default function TaskList({ tasks, onToggleTask }) {
    if (tasks.length === 0) {
        return (
        <p className='empty-list'> Nenhuma tarefa encontrada.</p>
        )
    }

    return (
        <ul className='task-list'>
            {tasks.map((task) =>
                <li
                key={task.id}
                className={`task-item ${task.completed ? "completed" : ""}`}
                onClick={() => onToggleTask(task.id)}
                >

                <input
                type='checkbox'
                checked={task.completed}
                onChange={() => {}}
                className='task-checkbox'
                />
                <span className='task-text'></span>
                </li>

            )}
        </ul>
    )
}