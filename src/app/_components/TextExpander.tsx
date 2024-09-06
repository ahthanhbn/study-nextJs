"use client"
import { chdir } from 'process';
import {useState} from 'react';

type TextExpanderProps = {
  children : string
} 
function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <>
    <span className='text-left'>
        {displayText}
      <button className='underline text-primary-500'  onClick={() => setIsExpanded(!isExpanded)}>
        {
          !isExpanded? "Show More" : "Show Less"
        }
      </button>

    </span>
    </>
  );
}

export default TextExpander;
