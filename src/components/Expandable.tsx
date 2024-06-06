import { ReactNode, useState } from 'react';

const Expandable = () => {
  const [expanded, setExpanded] = useState(false);

  const maxChars = 20;

  const Text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const handleExpand = () => {
    console.log('Expanded');
    setExpanded(!expanded);
    console.log(expanded);
  };

  const shortText = Text.slice(0, maxChars) + '...';

  return (
    <>
      <div>{expanded ? Text : shortText}</div>
      <button onClick={handleExpand}>
        {expanded === true ? 'Less' : 'More'}
      </button>
    </>
  );
};

export default Expandable;
