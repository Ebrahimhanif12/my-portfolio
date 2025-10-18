"use client"
import { useEffect, useRef } from 'react';

const codeSnippets = [
  {
    lang: 'cpp',
    code: `int binarySearch(vector<int>& arr, int target) {
  int low = 0, high = arr.size() - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
  },
  {
    lang: 'js',
    code: `function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
  },
  {
    lang: 'cpp',
    code: `int fib(int n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}`,
  },
];

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 14;
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    const codeObjects = [];

    const keywordColors = {
      js: {
        keywords: ['function', 'return', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'catch'],
        color: '#00ffff',
      },
      cpp: {
        keywords: ['int', 'return', 'if', 'else', 'while', 'for', 'vector', 'void', 'bool', 'include'],
        color: '#00aaff',
      },
    };

    const spawnSnippet = () => {
      const selected = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const lines = selected.code.split('\n');
      const x = Math.random() * (width - 300);
      const y = Math.random() * (height - lines.length * 20);
      codeObjects.push({
        ...selected,
        lines,
        x,
        y,
        lineIndex: 0,
        charIndex: 0,
        opacity: 0,
        fadingIn: true,
        fadingOut: false,
        delay: Math.random() * 1000,
      });
    };

    const colorToken = (token, lang) => {
      if (token.startsWith('//')) return { text: token, color: '#888' };
      if (/".*?"|'.*?'/.test(token)) return { text: token, color: '#00ff00' };

      const keywords = keywordColors[lang]?.keywords || [];
      if (keywords.includes(token)) return { text: token, color: keywordColors[lang].color };

      return { text: token, color: 'rgba(0,255,0,0.5)' };
    };

    const drawLineWithHighlight = (line, x, y, charLimit, lang) => {
      const tokens = line.match(/[\w#<>]+|".*?"|'.*?'|[^\s\w]/g) || [];
      let currentX = x;
      let charsDrawn = 0;

      for (const token of tokens) {
        if (charsDrawn >= charLimit) break;

        const part = colorToken(token, lang);
        const text = part.text.slice(0, charLimit - charsDrawn);
        ctx.fillStyle = part.color;
        ctx.fillText(text, currentX, y);
        currentX += ctx.measureText(text).width;
        charsDrawn += text.length;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      codeObjects.forEach((obj, i) => {
        if (obj.delay > 0) {
          obj.delay -= 33;
          return;
        }

        ctx.globalAlpha = obj.opacity;
        let offsetY = 0;

        for (let l = 0; l <= obj.lineIndex && l < obj.lines.length; l++) {
          const line = obj.lines[l] || '';
          const charsToShow = (l === obj.lineIndex) ? obj.charIndex : line.length;
          drawLineWithHighlight(line, obj.x, obj.y + offsetY, charsToShow, obj.lang);
          offsetY += 20;
        }

        ctx.globalAlpha = 1.0;

        if (obj.fadingIn) {
          obj.opacity += 0.02;
          if (obj.opacity >= 1) obj.fadingIn = false;
        } else if (!obj.fadingOut) {
          obj.charIndex++;
          const currentLine = obj.lines[obj.lineIndex] || '';
          if (obj.charIndex > currentLine.length) {
            obj.charIndex = 0;
            obj.lineIndex++;
            if (obj.lineIndex >= obj.lines.length) {
              obj.fadingOut = true;
            }
          }
        } else {
          obj.opacity -= 0.01;
          if (obj.opacity <= 0) {
            codeObjects.splice(i, 1);
            spawnSnippet();
          }
        }
      });

      if (Math.random() < 0.03 && codeObjects.length < 6) {
        spawnSnippet();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex:4,
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    />
  );
}
