import { test, expect } from 'vitest';
import { testFunction } from '../ts/main';

test('Function `testFunction` should return product.', () => {
	expect(testFunction(5, 1, 2)).toBe(10);
});
