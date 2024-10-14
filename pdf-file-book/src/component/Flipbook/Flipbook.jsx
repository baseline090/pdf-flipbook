import React, { useState, useEffect } from 'react';
import FlipPage from 'react-pageflip';
import * as pdfjsLib from 'pdfjs-dist/webpack';

const Flipbook = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file);
    }
  };

  useEffect(() => {
    if (pdfFile) {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const typedarray = new Uint8Array(this.result);

        pdfjsLib.getDocument(typedarray).promise.then((pdf) => {
          let pagesArray = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then((page) => {
              const viewport = page.getViewport({ scale: 1.0 });
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };
              page.render(renderContext).promise.then(() => {
                pagesArray.push(canvas.toDataURL());
                if (pagesArray.length === pdf.numPages) {
                  setPdfPages(pagesArray);
                }
              });
            });
          }
        });
      };
      fileReader.readAsArrayBuffer(pdfFile);
    }
  }, [pdfFile]);

  return (
    <div className="flipbook-container">
      <h1 className="title">Flipbook PDF Viewer</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="upload-btn" />

      {pdfPages.length > 1 && ( 
        <div className="flipbook">
          <FlipPage
            width={300} 
            height={430} 
            className="book"
            animationDuration={400} 
            showSwipeHint
            showTouchHint
          >
            {pdfPages.map((page, index) => (
              <article key={index} className="page">
                <div className="page-content">
                  <img 
                    src={page} 
                    alt={`Page ${index + 1}`} 
                    style={{ width: '100%', height: '100%' }} 
                  />
                </div>
              </article>
            ))}
          </FlipPage>
        </div>
      )}
    </div>
  );
};

export default Flipbook;
