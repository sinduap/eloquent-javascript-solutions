/***********************************************************************
Iterable Groups
https://eloquentjavascript.net/06_object.html#i-djD3XDJ27V

Make the Group class from the previous exercise iterable. Refer to the
section about the iterator interface earlier in the chapter if you
aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return
the iterator created by calling the Symbol.iterator method on the array.
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified
during iteration.
***********************************************************************/
import Group from './group';

Group.prototype[Symbol.iterator] = function () {
  const currData = this._data;

  function next() {
    const [value] = currData.splice(0, 1);
    const done = !value;
    return { value, done };
  }

  return { next };
};
