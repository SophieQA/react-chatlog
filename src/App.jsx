import './App.css';
import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [entries, setEntries] = useState(messages);

  const toggleLiked = (id) => {
    setEntries((prev) => prev.map((m) => (m.id === id ? { ...m, liked: !m.liked } : m)));
  };

  const likeCount = entries.filter((m) => m.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div className="likes-count">{likeCount} ❤️s</div>
      </header>
      <main>
        <ChatLog entries={entries} onToggleLiked={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
