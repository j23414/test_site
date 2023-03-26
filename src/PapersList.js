import { useState, useEffect } from 'react';
import { BibtexParser} from 'bib2json';
import React from 'react';

function PapersList() {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    async function fetchPapers() {
      const bibText = await fetch('/Users/jenchang/Desktop/LOOK/test_site/mypapers.bib').then((response) => response.text());
      var bibJson = BibtexParser(bibText);
      setPapers(bibJson.entries);
    }
    fetchPapers();
  }, []);

  return (
    <div>
      <h1>List of Papers</h1>
      <ul>
        {papers.map((paper) => (
          <li key={paper.ID}>
            <a href={paper.url}>{paper.title}</a>, {paper.author}, {paper.year}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PapersList;

