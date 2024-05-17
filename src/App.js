import "./App.css"
import { Button, TextField } from "@mui/material"
import Paper from "@mui/material/Paper"
import TODO from "./components/todo/TODO"
import { useState, useRef } from "react"

function App() {
  let [list, setList] = useState([])
  const input = useRef(null)

  function newTodo() {
    const newList = [...list]
    const value = input.current.querySelector('input')?.value

    newList.unshift({
      id: list.length +1,
      text: value,
    })
    setList(newList)
    input.current.querySelector('input').value = ""
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Paper
        sx={{padding: "1rem",  display: "flex", alignItems: "center",marginBottom: "20px"}} elevation={8}>
        <TextField
          ref={input}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="Им'я справи"
          variant="outlined"
        />
        <Button onClick={newTodo} variant="contained">
          Нова справа
        </Button>
      </Paper>
      {list.map((el) => {
        return <TODO key={el.id} todo={el} list={list} setList = {setList} />
      })}
    </div>
  )
}

export default App