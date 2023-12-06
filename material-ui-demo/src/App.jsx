import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';

function App() {
  return (
    <>
      <div>
        {/* <Button variant="contained" onClick={() => console.log('hi')}>
          Contained
        </Button>
        <Button variant="text">Contained</Button>
        <Button variant="contained" color="success" size="small">
          Contained
        </Button>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <RatingDemo /> */}
        <FormDemo />
      </div>
    </>
  );
}

export default App;
