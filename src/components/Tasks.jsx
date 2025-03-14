import { ChevronRightIcon, DeleteIcon, Trash2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Tasks(props){
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }
    
    return(

        <ul className="space-y-4 p-4 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    
                    <button 
                    onClick={() => props.onTaskClick(task.id)}
                    className={`bg-slate-400 text-white p-2 rounded-md wid w-full ${task.isCompleted && "line-through"}`}>
                        {task.title}
                    </button>

                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon/>
                    </Button>

                    <Button onClick={() => props.onDeleteTaskClick(task.id)}>
                        <Trash2Icon/>
                    </Button>
                </li>
            ))}
        </ul>

    )
}

export default Tasks