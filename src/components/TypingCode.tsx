import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/lib/context';

interface Token {
  text: string;
  color: string;
}

export const TypingCode = () => {
  const { profile } = usePortfolio();

  const codeTokens: Token[] = React.useMemo(() => [
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
  ], [profile.name, profile.role, profile.tagline]);

  const [displayedTokens, setDisplayedTokens] = useState<{ text: string; color: string }[]>([]);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTokenIndex >= codeTokens.length) return;
    const currentToken = codeTokens[currentTokenIndex];

    const timeout = setTimeout(() => {
      if (currentCharIndex < currentToken.text.length) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setDisplayedTokens(prev => [
          ...prev,
          { text: currentToken.text, color: currentToken.color }
        ]);
        setCurrentTokenIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }, currentCharIndex < currentToken.text.length ? 15 + Math.random() * 20 : 0);

    return () => clearTimeout(timeout);
  }, [currentTokenIndex, currentCharIndex, codeTokens]);

  return (
    <div className="flex gap-3 sm:gap-4 min-h-[210px] sm:min-h-[240px]">
      <div className="text-zinc-600 select-none text-right w-4 shrink-0 font-mono text-[11px] sm:text-xs leading-relaxed">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 min-w-0 font-mono text-[11px] sm:text-xs lg:text-sm leading-relaxed whitespace-pre-wrap break-words">
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
