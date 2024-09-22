/************************************************************************
Dominant Writing Direction
https://eloquentjavascript.net/05_higher_order.html#i-4ccl4J1nOw

Write a function that computes the dominant writing direction in a string
of text. Remember that each script object has a direction property that
can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to
bottom).

The dominant direction is the direction of a majority of the characters
that have a script associated with them. The characterScript and countBy
functions defined earlier in the chapter are probably useful here.
************************************************************************/
export default function (text) {
  const textScripts = Array.from(text).map(characterToScript).filter(exist);
  if (textScripts.length === 0) return null;

  const directionCounts = countBy(
    textScripts,
    script => script.direction,
    true
  );
  const { name } = directionCounts.at(0);
  return name;
}

import SCRIPTS from '../data/scripts';

// helpers
function characterToScript(char) {
  const code = char.codePointAt(0);
  for (const script of SCRIPTS) {
    const { ranges } = script;
    if (ranges.some(([from, to]) => from <= code && to > code)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName, sorted, descending = sorted) {
  const counts = [];
  for (const item of items) {
    const name = groupName(item);
    const known = counts.find(c => c.name === name);
    if (known) {
      known.count++;
    } else {
      counts.push({ name, count: 1 });
    }
  }

  if (!sorted) return counts;

  const sorter = (first, second) => {
    if (!descending) [first, second] = [second, first];
    return second.count - first.count;
  };

  return counts.sort(sorter);
}

const exist = val => Boolean(val);
