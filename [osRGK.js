import logo from './logo.svg';
import './App.css';

function App() {
  const [notes, setNotes] = useState(null);
  const [isUpdate, setisUpdate] = useState(false);

  useEfect(() => {
    axios.get(
      "https:/localhost:9090/api/notes",
      {
      withCredentials: false
      }
    ).then(response => {
      console.log(response.data);
      setNotes(response.data);
    });
  },  []);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
