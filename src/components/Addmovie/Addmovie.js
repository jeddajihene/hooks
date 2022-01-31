import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAutocomplete, useTabContext } from "@mui/material";
import { convertLength } from "@mui/material/styles/cssUtils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Addmovie = ({ handleAdd }) => {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({
    id: Math.random(),
    image: "",
    rating: 0,
    name: "",
    date: "",
    type: "",
    description: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleMovie = (e) => {
    e.preventDefault();
    handleAdd(movie);
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <form>
            <ul>
              <li>
                <label>enter movie Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>rating movie:</label>
                <input
                  type="number"
                  id="mail"
                  name="rating"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>date movie:</label>
                <input
                  type="date"
                  id="mail"
                  name="date"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>type movie:</label>
                <input
                  type="text"
                  id="mail"
                  name="type"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>description movie:</label>
                <input
                  type="text"
                  id="mail"
                  name="description"
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>image:</label>
                <input
                  type="File"
                  id="mail"
                  name="image"
                  onChange={handleChange}
                />
              </li>
            </ul>
            <button onClick={handleMovie}>add movie</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default Addmovie;
