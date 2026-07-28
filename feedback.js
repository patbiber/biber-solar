// feedback.js
// Baut aus einer Feedback-Nachricht einen mailto:-Link.
// Reine Funktion (kein DOM-Zugriff), damit sie ohne Browser testbar ist.
function buildFeedbackMailto(message, options) {
  options = options || {};
  const to = options.to || 'patrick@biber.solar';
  const subject = options.subject || 'Feedback zu biber.solar';

  const trimmed = (message || '').trim();
  if (!trimmed) {
    return null;
  }

  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(trimmed)}`;
  return `mailto:${to}?${params}`;
}

// DOM-Wiring nur im Browser ausführen
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const textarea = document.getElementById('feedback-input');
    const status = document.getElementById('feedback-status');
    if (!form || !textarea) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const mailto = buildFeedbackMailto(textarea.value);
      if (!mailto) {
        if (status) status.textContent = 'Bitte gib zuerst dein Feedback ein.';
        return;
      }

      window.location.href = mailto;
      if (status) status.textContent = 'Danke! Dein E-Mail-Programm sollte sich gerade öffnen.';
      textarea.value = '';
    });
  });
}

// Export für Node/Tests, ignoriert im Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { buildFeedbackMailto };
}
