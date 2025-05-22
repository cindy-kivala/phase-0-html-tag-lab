// tests/index.test.js

describe('Basic HTML tests', () => {
  it('should contain a DOCTYPE declaration', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<!DOCTYPE html>/);
  });

  it('should contain a <html> tag with lang="en"', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<html lang="en">/);
  });

  it('should contain a <head> tag', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<head>/);
  });

  it('should contain a <body> tag', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<body>/);
  });

  it('should contain a <title> tag', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<title>.+<\/title>/);
  });

  it('should link to a stylesheet', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<link rel="stylesheet" type="text\/css" href="style.css" \/>/);
  });

  it('should contain comments', () => {
    const fs = require('fs');
    const path = './index.html';
    const htmlContent = fs.readFileSync(path, 'utf-8');
    expect(htmlContent).toMatch(/<!--.*-->/);
  });
});


