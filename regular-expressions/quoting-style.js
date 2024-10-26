function doubleQuoting(string) {
  return string.replace(/'([^]+?[,.])'/g, '"$1"');
}

console.assert(
  doubleQuoting("'I'm the cook,' he said, 'it's my job.'") ==
    '"I\'m the cook," he said, "it\'s my job."'
);
