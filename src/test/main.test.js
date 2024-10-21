import { test, expect } from 'vitest';
import { testFunction } from '../js/main';

test('Function `testFunction` should return sum.', () => {
	expect(testFunction(4.2, 9.1, 1.5)).toBe(14.8);
});
