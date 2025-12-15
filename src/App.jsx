import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const first = messages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          id={first.id}
          sender={first.sender}
          body={first.body}
          timestamp={first.timeStamp}
        />
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
