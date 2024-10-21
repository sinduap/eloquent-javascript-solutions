// car and cat
verify(/ca(r|t)/, ['my car', 'bad cats'], ['camper', 'high art']);
// pop and prop

verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop']);

// ferret, ferry, and ferrari
verify(
  /ferr(et|y|ari)/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A']
);

// Any word ending in ious
verify(
  /\w+?ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness']
);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s(\.|,|:|;)/, ['bad punctuation .'], ['escape the period']);

// A word longer than six letters
verify(
  /\w{6,}/,
  ['Siebentausenddreihundertzweiundzwanzig'],
  ['no', 'three small words']
);

// A word without the letter e (or E)
verify(
  /\b[^Ee\W]+\b/,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'bedrøvet abe', 'BEET']
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == '...') return;
  for (const str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (const str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
