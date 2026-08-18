// pv-news.js
// Rendert den pv-magazine.de Newsfeed (via /api/pv-news) in #pv-news-list.
// Titel/Link kommen von einer externen Quelle und werden vor dem Einfügen
// als HTML escaped bzw. auf http(s) validiert.

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeNewsLink(url) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.href;
    }
  } catch (err) {
    // ungültige oder fehlende URL
  }
  return '#';
}

function formatNewsDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function renderNewsItem(item) {
  const title = escapeHtml(item.title || 'Ohne Titel');
  const link = sanitizeNewsLink(item.link);
  const date = formatNewsDate(item.pubDate);
  return `<li><a href="${link}" target="_blank" rel="nofollow noopener">${title}</a>${date ? `<span class="pv-news-date">${date}</span>` : ''}</li>`;
}

// DOM-Wiring nur im Browser ausführen
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('pv-news-list');
    if (!list) return;

    fetch('/api/pv-news')
      .then((response) => {
        if (!response.ok) throw new Error('pv-news fetch failed');
        return response.json();
      })
      .then((data) => {
        const items = Array.isArray(data.items) ? data.items : [];
        if (items.length === 0) {
          list.innerHTML = '<li>Aktuell keine News verfügbar.</li>';
          return;
        }
        list.innerHTML = items.map(renderNewsItem).join('');
      })
      .catch(() => {
        list.innerHTML = '<li>News konnten gerade nicht geladen werden.</li>';
      });
  });
}

// Export für Node/Tests, ignoriert im Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { escapeHtml, sanitizeNewsLink, formatNewsDate, renderNewsItem };
}
