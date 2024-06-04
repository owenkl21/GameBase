import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Button from './button';

const Like = () => {
  const [liked, setLiked] = useState(false);

  const onClick = () => {
    console.log('Like button clicked');
    setLiked(!liked);

    console.log(liked);
  };
  return (
    <div onClick={onClick}>
      {liked ? (
        <BsHeartFill color="#ff4e5c" size={20} />
      ) : (
        <BsHeart size={20} />
      )}
    </div>
  );
};

export default Like;
