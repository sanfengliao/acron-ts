import { expect, it } from 'vitest';
import { add } from '../src/sum';

it('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
