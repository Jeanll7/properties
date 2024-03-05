import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { GoHeartFill } from 'react-icons/go';

export function HeartButton() {
  const [filledHeart, setFilledHeart] = useState(false);

  const toggleHeart = () => {
    setFilledHeart(!filledHeart);
  };

  return (
    <button className="px-2" onClick={toggleHeart}>
      {filledHeart ? <GoHeartFill size={25} /> : <FiHeart size={25} />}
    </button>
  );
}

