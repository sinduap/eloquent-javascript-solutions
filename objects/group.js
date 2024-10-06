/***********************************************************************
Groups
https://eloquentjavascript.net/06_object.html#i-rpYp9Ou4LG

The standard JavaScript environment provides another data structure
called Set. Like an instance of Map, a set holds a collection of values.
Unlike Map, it does not associate other values with those—it just tracks
which values are part of the set. A value can be part of a set only once
—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it
has add, delete, and has methods. Its constructor creates an empty group,
add adds a value to the group (but only if it isn’t already a member),
delete removes its argument from the group (if it was a member), and has
returns a Boolean value indicating whether its argument is a member of
the group.

Use the === operator, or something equivalent such as indexOf, to
determine whether two values are the same.

Give the class a static from method that takes an iterable object as its
argument and creates a group that contains all the values produced by
iterating over it.
***********************************************************************/
export default class Group {
  /*
   * ideally _data field should be #data (private), move iterator method
   * into this class and change _data field and all its references to
   * #data
   */
  _data = [];

  constructor(iterable) {
    if (!iterable) return;
    Array.from(iterable).forEach(val => this.add(val));
  }

  has(value) {
    return this._data.some(val => val === value);
  }

  add(value) {
    if (!this.has(value)) {
      this._data.push(value);
    }
    return this;
  }

  delete(value) {
    if (this.has(value)) {
      this._data = this._data.filter(val => val !== value);
    }
    return this;
  }

  get size() {
    return this._data.length;
  }

  toString() {
    return `[object ${this.constructor.name}]`;
  }

  static from(iterable) {
    return new this(iterable);
  }
}
