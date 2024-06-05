import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface Props {
  clicked: () => void;
}

const Like = ({ clicked }: Props) => {
  const [liked, setLiked] = useState(false);

  const onClick = () => {
    setLiked(!liked);
    clicked();
  };
  return (
    <div onClick={onClick}>
      {liked ? (
        <BsHeartFill color="#ff6b81" size={20} />
      ) : (
        <BsHeart size={20} />
      )}
    </div>
  );
};

export default Like;
