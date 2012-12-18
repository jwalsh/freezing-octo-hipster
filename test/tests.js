module('core');

test('hello test', function() {
  ok(1 == '1', 'Passed!');
});


test(
  'version',
  function() {
    ok(typeof version !== 'undefined', 'Library is versioned');
  });
