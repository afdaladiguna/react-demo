import { v4 as uuid } from 'uuid';
import { useState } from 'react';

function randomEmoji() {
  const emojis = [':D', ':(', ':)', ':V', ':P'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
      return oldEmojis.filter((e) => e.id !== id);
    });
  };
  const allHearts = () => {
    setEmojis((oldEmojis) => {
      return oldEmojis.map((e) => {
        return { ...e, emoji: '<3' };
      });
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: '4rem' }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={allHearts}>Make all Hearts</button>
    </div>
  );
}
