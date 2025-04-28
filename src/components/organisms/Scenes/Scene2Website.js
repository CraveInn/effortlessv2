// Scene2Website.js
import React, { useEffect, useState } from 'react';

const edits = [
  { row: 0, col: 0, value: 'Welcome', color: '#e0f7fa' },
  { row: 0, col: 1, value: 'to', color: '#fffde7' },
  { row: 0, col: 2, value: 'Puzzles', color: '#fce4ec' },
  { row: 1, col: 0, value: 'Live', color: '#e0f7fa' },
  { row: 1, col: 1, value: 'Editing', color: '#fffde7' },
  { row: 2, col: 0, value: '✨', color: '#fce4ec' },
  { row: 3, col: 0, value: 'New Row!', color: '#e0f7fa' },
];

export default function Scene2Website() {
  const [rows, setRows] = useState([[], [], []]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRows(prev => {
        let next = prev.map(r => [...r]);
        if (i < edits.length) {
          const { row, col, value, color } = edits[i];
          if (row >= next.length) next.push([]);
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
    <svg width="340" height="160" viewBox="0 0 340 160" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px #0001' }}>
      <rect x="0" y="0" width="340" height="40" fill="#7BAAF7" rx="12" />
      <text x="170" y="28" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="Inter, Arial" fontWeight="bold">
        Live Website
      </text>
      {rows.map((row, rIdx) =>
        row.map((cell, cIdx) => (
          <g key={rIdx + '-' + cIdx}>
            <rect
              x={20 + cIdx * 100}
              y={60 + rIdx * 30}
              width="90"
              height="26"
              rx="6"
              fill={cell && cell.color ? cell.color : '#f8fafc'}
              stroke="#e0e0e0"
              strokeWidth="1"
            />
            <text
              x={65 + cIdx * 100}
              y={78 + rIdx * 30}
              textAnchor="middle"
              fontSize="14"
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