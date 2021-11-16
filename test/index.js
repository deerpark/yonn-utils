import test from 'tape';
import fn from '../src';

test('yonn-utils', t => {
	t.is(typeof fn, 'function', 'exports a function');
	t.is(typeof fn(), 'string', '~> returns string output');
	t.end();
});