const test = require('node:test');
const assert = require('node:assert/strict');
const { buildFeedbackMailto } = require('../feedback.js');

test('builds a mailto link with default recipient and subject', () => {
  const link = buildFeedbackMailto('Tolle Seite!');
  assert.equal(link, 'mailto:patrick@biber.solar?subject=Feedback%20zu%20biber.solar&body=Tolle%20Seite!');
});

test('trims surrounding whitespace from the message', () => {
  const link = buildFeedbackMailto('   Hallo   ');
  assert.equal(link, 'mailto:patrick@biber.solar?subject=Feedback%20zu%20biber.solar&body=Hallo');
});

test('returns null for an empty message', () => {
  assert.equal(buildFeedbackMailto(''), null);
});

test('returns null for a whitespace-only message', () => {
  assert.equal(buildFeedbackMailto('   \n\t  '), null);
});

test('returns null when no message is provided', () => {
  assert.equal(buildFeedbackMailto(), null);
  assert.equal(buildFeedbackMailto(null), null);
  assert.equal(buildFeedbackMailto(undefined), null);
});

test('URL-encodes special characters in the message', () => {
  const link = buildFeedbackMailto('Frage & Antwort = 100%?');
  assert.match(link, /^mailto:patrick@biber\.solar\?subject=/);
  const body = new URLSearchParams(link.split('?')[1]).get('body');
  assert.equal(body, 'Frage & Antwort = 100%?');
});

test('honors a custom recipient and subject', () => {
  const link = buildFeedbackMailto('Hi', { to: 'other@example.com', subject: 'Custom' });
  assert.equal(link, 'mailto:other@example.com?subject=Custom&body=Hi');
});
