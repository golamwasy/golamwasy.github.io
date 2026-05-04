import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/lib/context';

interface Token {
  text: string;
  color: string;
}

export const TypingCode = () => {
  const { profile } = usePortfolio();

  const codeTokens: Token[] = [
    { text: "// Welcome to my workspace\n", color: "text-code-comment" },
    { text: "import ", color: "text-code-keyword" },
    { text: "{ ", color: "text-zinc-400" },
    { text: "Developer ", color: "text-code-attr" },
    { text: "} ", color: "text-zinc-400" },
    { text: "from ", color: "text-code-keyword" },
    { text: "'./universe'", color: "text-code-value" },
    { text: ";\n\n", color: "text-zinc-400" },
    { text: "const ", color: "text-code-keyword" },
    { text: "Portfolio ", color: "text-code-var" },
    { text: "= () => {\n", color: "text-zinc-400" },
    { text: "  return (\n", color: "text-zinc-400" },
    { text: "    <", color: "text-code-tag" },
    { text: "Developer", color: "text-code-attr" },
    { text: "\n      name=", color: "text-code-attr" },
    { text: `"${profile.name}"`, color: "text-code-value" },
    { text: "\n      role=", color: "text-code-attr" },
    { text: `"${profile.role}"`, color: "text-code-value" },
    { text: "\n      passion=", color: "text-code-attr" },
    { text: `"${profile.tagline}"`, color: "text-code-value" },
    { text: "\n    />\n", color: "text-code-tag" },
    { text: "  );\n", color: "text-zinc-400" },
    { text: "};", color: "text-zinc-400" },
  ];

  const [displayedTokens, setDisplayedTokens] = useState<{ text: string; color: string }[]>([]);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTokenIndex < codeTokens.length) {
      const currentToken = codeTokens[currentTokenIndex];

      if (currentCharIndex < currentToken.text.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 15 + Math.random() * 20); // Variable typing speed for realism
        return () => clearTimeout(timeout);
      } else {
        // Token finished, move to next
        setDisplayedTokens(prev => [
          ...prev,
          { text: currentToken.text, color: currentToken.color }
        ]);
        setCurrentTokenIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentTokenIndex, currentCharIndex]);

  return (
    <div className="flex gap-4">
      <div className="text-zinc-700 select-none text-right w-4 font-mono text-xs leading-relaxed pt-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 font-mono text-xs lg:text-sm leading-relaxed whitespace-pre overflow-hidden">
        {displayedTokens.map((token, i) => (
          <span key={i} className={token.color}>{token.text}</span>
        ))}
        {currentTokenIndex < codeTokens.length && (
          <span className={codeTokens[currentTokenIndex].color}>
            {codeTokens[currentTokenIndex].text.substring(0, currentCharIndex)}
          </span>
        )}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-4 bg-blue-500 ml-0.5 align-middle"
        />
      </div>
    </div>
  );
};
