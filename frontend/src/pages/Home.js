import TaskForm from '../components/TaskForm'
import TaskDetails from '../components/TaskDetails'
import { useEffect } from 'react'
import useTaskContext from '../hooks/useTaskContext'

const Home = () => {
    const { tasks, dispatch } = useTaskContext()

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_TASKS', payload: json })
            }
        }

        fetchTasks()
    }, [dispatch])


    return (
        <div className='home-page'>
        <div className='task-details'>
            {tasks && tasks.map(
                task => (
                <TaskDetails key={task._id} task={task}/>
            ))}
        </div>
            <TaskForm />
        </div>
    )
}


export default Home