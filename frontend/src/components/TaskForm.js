import { useState } from 'react'
import useTaskContext from '../hooks/useTaskContext'

const TaskForm = () => {
    const { dispatch } = useTaskContext()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/tasks/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, content})
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            dispatch({type: "ADD_TASK", payload: json})
            setTitle('')
            setContent('')
            setError(null)
            setEmptyFields([])
        }
        
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
        <label>Create Task</label>
            <input 
            className={emptyFields.includes('title') && 'error-input'} 
            type='text' 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            />
            <input 
            className={emptyFields.includes('content') && 'error-input'} 
            type='text' value={content} 
            onChange={e => setContent(e.target.value)}
            />
            <button>Add a task</button>
            {error && <p className='error'>{error}</p>}
        </form>
    )
}


export default TaskForm