module('core');

test(
  'configuration',
  function() {
    ok(1 == '1', 'Passed!');
  });


test(
  'version',
  function() {
    ok(typeof version !== 'undefined', 'Library is versioned at ' + version);
  });
