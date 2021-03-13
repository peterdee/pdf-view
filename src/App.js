import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//${window.location.host}/worker.js`;

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => setTotal(numPages);

  const handleNext = () => setPage((state) => state < total ? state + 1 : state);
  const handlePrevious = () => setPage((state) => state > 1 ? state - 1 : state);

  return (
    <div className="wrap">
      <div className="controls">
        <div>
          { `Page ${page} of ${total}` }
        </div>
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          type="button"
        >
          Previous
        </button>
        <button
          disabled={page === total}
          onClick={handleNext}
          type="button"
        >
          Next
        </button>
      </div>
      <Document
        file={`${window.location.origin}/file.pdf`}
        onLoadSuccess={handleDocumentLoadSuccess}
      >
        <Page pageNumber={page} />
      </Document>
    </div>
  );
}

export default App;
