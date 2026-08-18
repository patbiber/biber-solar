const test = require('node:test');
const assert = require('node:assert/strict');
const { escapeHtml, sanitizeNewsLink, formatNewsDate, renderNewsItem } = require('../pv-news.js');

test('escapeHtml escapes all HTML-relevant characters', () => {
  assert.equal(
    escapeHtml(`<script>alert("x")</script> & 'quote'`),
    '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;quote&#39;'
  );
});

test('sanitizeNewsLink accepts http and https URLs', () => {
  assert.equal(sanitizeNewsLink('https://www.pv-magazine.de/2026/01/01/foo/'), 'https://www.pv-magazine.de/2026/01/01/foo/');
  assert.equal(sanitizeNewsLink('http://example.com/'), 'http://example.com/');
});

test('sanitizeNewsLink rejects non-http(s) schemes', () => {
  assert.equal(sanitizeNewsLink('javascript:alert(1)'), '#');
  assert.equal(sanitizeNewsLink('data:text/html,<script>alert(1)</script>'), '#');
});

test('sanitizeNewsLink rejects invalid or missing URLs', () => {
  assert.equal(sanitizeNewsLink('not a url'), '#');
  assert.equal(sanitizeNewsLink(undefined), '#');
  assert.equal(sanitizeNewsLink(''), '#');
});

test('formatNewsDate formats an ISO date as de-CH', () => {
  assert.equal(formatNewsDate('2026-03-05T10:00:00Z'), '05.03.2026');
});

test('formatNewsDate returns empty string for missing or invalid input', () => {
  assert.equal(formatNewsDate(''), '');
  assert.equal(formatNewsDate(undefined), '');
  assert.equal(formatNewsDate('not a date'), '');
});

test('renderNewsItem escapes the title and includes a formatted date', () => {
  const html = renderNewsItem({
    title: 'Neue <b>PV-Anlage</b> in Zürich',
    link: 'https://www.pv-magazine.de/story/',
    pubDate: '2026-03-05T10:00:00Z',
  });
  assert.equal(
    html,
    '<li><a href="https://www.pv-magazine.de/story/" target="_blank" rel="nofollow noopener">Neue &lt;b&gt;PV-Anlage&lt;/b&gt; in Zürich</a><span class="pv-news-date">05.03.2026</span></li>'
  );
});

test('renderNewsItem falls back to a safe link and omits the date span when missing', () => {
  const html = renderNewsItem({ title: 'Titel ohne Datum', link: 'javascript:alert(1)' });
  assert.equal(
    html,
    '<li><a href="#" target="_blank" rel="nofollow noopener">Titel ohne Datum</a></li>'
  );
});

test('renderNewsItem falls back to a placeholder title when missing', () => {
  const html = renderNewsItem({ link: 'https://www.pv-magazine.de/' });
  assert.match(html, />Ohne Titel</);
});
