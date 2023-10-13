import './App.css';
import Card from './components/Card';
import emojipedia from './data/emojiBank';


function bibekgede(data) {
  return (
    <Card
      name={data.name}
      emoji={data.emoji}
      meaning={data.meaning}
      id={data.id}
      anil={data.achyutgede}
    />
  )
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(bibekgede)}

      </dl>
    </div>
  );
}

export default App;
