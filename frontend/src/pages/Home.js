import { useEffect, useState } from "react"
import { readTodos } from "../api/readTodos"

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
        }
        fetchTodos()
    }, [])

    return (
        <div>
            <h1>I'm Home</h1>
            {todos ?
                <>
                    {todos.map((item) => {
                        return <h3>{item.text}</h3>
                    })}
                </>
                :
                <p>loading...</p>
            }
        </div>
    )
}
export default Home