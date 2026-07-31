const test = require('node:test');
const assert = require('node:assert/strict');
const {
  addToCart,
  setQuantity,
  removeFromCart,
  cartItemCount,
  calculateCartTotal,
  cartToLineItems,
} = require('../shop.js');

const products = [
  { id: 'bkw-400', name: '400W Set', priceChf: 349.0 },
  { id: 'bkw-800', name: '800W Set', priceChf: 599.0 },
];

test('addToCart adds a new product with default quantity 1', () => {
  const cart = addToCart({}, 'bkw-400');
  assert.deepEqual(cart, { 'bkw-400': 1 });
});

test('addToCart increments an existing product', () => {
  const cart = addToCart({ 'bkw-400': 1 }, 'bkw-400', 2);
  assert.deepEqual(cart, { 'bkw-400': 3 });
});

test('addToCart does not mutate the original cart', () => {
  const original = { 'bkw-400': 1 };
  addToCart(original, 'bkw-400');
  assert.deepEqual(original, { 'bkw-400': 1 });
});

test('setQuantity sets an explicit quantity', () => {
  const cart = setQuantity({ 'bkw-400': 1 }, 'bkw-400', 5);
  assert.deepEqual(cart, { 'bkw-400': 5 });
});

test('setQuantity removes the product when quantity is 0 or negative', () => {
  assert.deepEqual(setQuantity({ 'bkw-400': 5 }, 'bkw-400', 0), {});
  assert.deepEqual(setQuantity({ 'bkw-400': 5 }, 'bkw-400', -1), {});
});

test('removeFromCart removes only the given product', () => {
  const cart = removeFromCart({ 'bkw-400': 1, 'bkw-800': 2 }, 'bkw-400');
  assert.deepEqual(cart, { 'bkw-800': 2 });
});

test('cartItemCount sums quantities across products', () => {
  assert.equal(cartItemCount({ 'bkw-400': 2, 'bkw-800': 3 }), 5);
  assert.equal(cartItemCount({}), 0);
});

test('calculateCartTotal multiplies price by quantity and sums', () => {
  const total = calculateCartTotal({ 'bkw-400': 2, 'bkw-800': 1 }, products);
  assert.equal(total, 349.0 * 2 + 599.0);
});

test('calculateCartTotal ignores unknown product ids', () => {
  const total = calculateCartTotal({ unknown: 3 }, products);
  assert.equal(total, 0);
});

test('cartToLineItems converts the cart map into an array of {id, quantity}', () => {
  const items = cartToLineItems({ 'bkw-400': 2, 'bkw-800': 1 });
  assert.deepEqual(items, [
    { id: 'bkw-400', quantity: 2 },
    { id: 'bkw-800', quantity: 1 },
  ]);
});
