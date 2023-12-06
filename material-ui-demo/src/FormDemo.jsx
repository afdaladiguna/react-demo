import { TextField, Slider, Box } from '@mui/material';
import { useState } from 'react';
export default function FormDemo() {
  const [name, setName] = useState('');
  const [volume, setVolume] = useState(10);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateVolume = (e, newVal) => {
    setVolume(newVal);
  };
  return (
    <Box sx={{ border: '1px solid black', p: 2 }}>
      <h1>Forms for {name}</h1>
      <TextField
        id="standard-basic"
        label="outline"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h2>Volume : {volume}</h2>
      <Slider
        defaultValue={50}
        value={volume}
        onChange={updateVolume}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
