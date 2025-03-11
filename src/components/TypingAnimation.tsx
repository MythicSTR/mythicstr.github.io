
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypingAnimation = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
  className = "",
}: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: number;
    
    if (isPaused) {
      timeout = window.setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delayBetweenTexts, deletingSpeed, displayText, isPaused, isTyping, texts, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingAnimation;
