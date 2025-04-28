// Scene1Sheet.js
import React, { useEffect, useState } from 'react';

const initialRows = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const edits = [
  { row: 0, col: 0, value: 'Welcome', color: '#e0f7fa' },
  { row: 0, col: 1, value: 'to', color: '#fffde7' },
  { row: 0, col: 2, value: 'Puzzles', color: '#fce4ec' },
  { row: 1, col: 0, value: 'Live', color: '#e0f7fa' },
  { row: 1, col: 1, value: 'Editing', color: '#fffde7' },
  { row: 2, col: 0, value: '✨', color: '#fce4ec' },
  { row: 3, col: 0, value: 'New Row!', color: '#e0f7fa' },
];

export default function Scene1Sheet() {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRows(prev => {
        let next = prev.map(r => [...r]);
        if (i < edits.length) {
          const { row, col, value, color } = edits[i];
          if (row >= next.length) next.push(['', '', '']);
          next[row][col] = { value, color };
        }
        return next;
      });
      i++;
      if (i > edits.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="340" height="160" viewBox="0 0 340 160" style={{ background: '#f8fafc', borderRadius: 12 }}>
      {rows.map((row, rIdx) =>
        row.map((cell, cIdx) => (
          <g key={rIdx + '-' + cIdx}>
            <rect
              x={20 + cIdx * 100}
              y={20 + rIdx * 40}
              width="90"
              height="36"
              rx="8"
              fill={cell && cell.color ? cell.color : '#fff'}
              stroke="#bdbdbd"
              strokeWidth="1"
            />
            <text
              x={65 + cIdx * 100}
              y={44 + rIdx * 40}
              textAnchor="middle"
              fontSize="16"
              fill="#222"
              fontFamily="Inter, Arial"
              style={{ fontWeight: 600 }}
            >
              {cell && cell.value ? cell.value : ''}
            </text>
          </g>
        ))
      )}
    </svg>
  );
}