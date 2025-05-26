import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (taskText.trim() === '') {
            onAddTask(taskText);
            setTaskText('');
        }
    }

    return (
        <form className="task-form"
        onSubmit={handleSubmit}>
            <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder='Adicionar nova tarefa...'
            className='task-input'
            />

            <button type="submit"
            className='add-button'>
                Adicionar
            </button>
        </form>
    )
}