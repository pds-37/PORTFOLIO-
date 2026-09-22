import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../data/portfolioData';
import SectionKicker from '../components/SectionKicker';
import { getAssetUrl } from '../utils/assets';

function formatInlineText(text) {
  if (!text) return text;
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(<code key={match.index}>{token.slice(1, -1)}</code>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function renderContent(content) {
  if (!content) return null;
  const lines = content.split('\n');
  const blocks = [];
  let inCode = false;
  let codeLines = [];
  let inTable = false;
  let tableLines = [];
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join('\n').trim();
      if (text) blocks.push({ type: 'p', text });
      currentParagraph = [];
    }
  };

  const flushTable = () => {
    if (tableLines.length > 0) {
      blocks.push({ type: 'table', rows: tableLines });
      tableLines = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Code fence
    if (trimmed.startsWith('```')) {
      if (inCode) {
        blocks.push({ type: 'code', text: codeLines.join('\n') });
        codeLines = [];
        inCode = false;
      } else {
        flushParagraph();
        flushTable();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    // Table rows
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushParagraph();
      inTable = true;
      tableLines.push(trimmed);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Blank line
    if (!trimmed) {
      flushParagraph();
      continue;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      blocks.push({ type: 'h3', text: trimmed.replace(/^###\s+/, '') });
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      blocks.push({ type: 'h2', text: trimmed.replace(/^##\s+/, '') });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushParagraph();
      blocks.push({ type: 'quote', text: trimmed.replace(/^>\s+/, '') });
      continue;
    }

    // Lists (bullet or numbered)
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      if (blocks.length > 0 && blocks[blocks.length - 1].type === 'list') {
        blocks[blocks.length - 1].items.push(trimmed);
      } else {
        blocks.push({ type: 'list', items: [trimmed] });
      }
      continue;
    }

    currentParagraph.push(rawLine);
  }

  flushParagraph();
  flushTable();
  if (inCode) {
    blocks.push({ type: 'code', text: codeLines.join('\n') });
  }

  return blocks.map((b, idx) => {
    switch (b.type) {
      case 'h2':
        return <h2 key={idx}>{formatInlineText(b.text)}</h2>;
      case 'h3':
        return <h3 key={idx}>{formatInlineText(b.text)}</h3>;
      case 'code':
        return (
          <pre key={idx}>
            <code>{b.text}</code>
          </pre>
        );
      case 'quote':
        return (
          <blockquote key={idx}>
            {formatInlineText(b.text)}
          </blockquote>
        );
      case 'table': {
        const headerRow = b.rows[0];
        const dataRows = b.rows.filter((_, rIdx) => rIdx !== 0 && !b.rows[rIdx].includes('---'));
        const parseCells = (row) =>
          row
            .split('|')
            .map((c) => c.trim())
            .filter((c, cIdx, arr) => cIdx !== 0 && cIdx !== arr.length - 1);
        const headers = parseCells(headerRow);

        return (
          <div className="id-table-wrap" key={idx}>
            <table>
              <thead>
                <tr>
                  {headers.map((h, hIdx) => (
                    <th key={hIdx}>{formatInlineText(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((r, rIdx) => {
                  const cells = parseCells(r);
                  return (
                    <tr key={rIdx}>
                      {cells.map((c, cIdx) => (
                        <td key={cIdx}>{formatInlineText(c)}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      case 'list': {
        const isNumbered = /^\d+\.\s/.test(b.items[0]);
        if (isNumbered) {
          return (
            <ol key={idx}>
              {b.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {formatInlineText(item.replace(/^\d+\.\s+/, ''))}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <ul key={idx}>
            {b.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                {formatInlineText(item.replace(/^[•\-]\s+/, ''))}
              </li>
            ))}
          </ul>
        );
      }
      case 'p':
      default:
        return <p key={idx}>{formatInlineText(b.text)}</p>;
    }
  });
}

export default function InsightDetail() {
  const { id } = useParams();
  const post = insights.find((p) => p.id === id) || insights[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="insight-detail-page section-dark">
      <div className="id-container">
        <Link to="/#insights" className="id-back">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        <article className="id-article">
          <div className="id-header">
            <SectionKicker num="06">ENGINEERING NOTES</SectionKicker>
            <h1>{post.title}</h1>
            <div className="id-meta">
              <span>{post.category}</span>
              <span className="dot">•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="id-hero">
            <img src={getAssetUrl(post.image)} alt={post.title} />
          </div>

          <div className="id-content">
            {renderContent(post.content)}
          </div>
        </article>
      </div>
    </div>
  );
}
