import { Button, TextField} from "@mui/material"
import Paper from "@mui/material/Paper"

function TODO(props) {
  const { id, text } = props.todo

  const deleteTODO = (e) => {
    const oldList = [...props.list]
    const newList = oldList.filter(el => el.id != e.target.id)
    props.setList(newList)
  }
  return (
    <Paper
      sx={{ padding: "20px", display: "flex", alignItems: "center", marginBottom:"10px", fontFamily:'Test' }}
      elevation={12}
      id={id}
    >
      <TextField
        sx={{ margin: "20px" }}
        id="outlined-basic"
        label="Им'я справи"
        variant="outlined"
        value={text}
      />
      <Button id="id" onClick={deleteTODO} color="error" variant="contained">Видалити</Button>
    </Paper>
  )
}

export default TODO