export function list_add_multiple(list, items) {
  "Every one of these items put on the end of this list, in the order they arrive in.";
  "THEY GO ON ONE AT A TIME ON PURPOSE, AND THE SHORT WAY OF WRITING IT WAS A SIZE LIMIT. Handing the whole lot over in one call reads better and quietly stops working as the list grows: spread out like that, every item becomes a separate argument to that one call, and a machine will only carry so many arguments at once - somewhere around a hundred thousand. So it worked on every list anybody tried it on, for years, and then refused on the first big one.";
  "THE COMPLAINT IT MADE NAMED THE WRONG THING, which is what made it expensive. Too many arguments is reported as the call stack being exhausted, and that sentence says nothing about lists or sizes - it reads as runaway recursion, so a reader goes looking for a walk that does not stop, in a function that stops perfectly well. The repo's own text search was dead of exactly this: the walk gathering every path under a folder passed its findings up one level at a time, and this repo's top level was more paths than a single call can carry. Every search anybody ran came back as a stack overflow pointing at a line that was only adding things to a list.";
  "Nothing else about it changes - the same items, in the same order, on the same list, which is handed back by having been added to rather than by being returned.";
  for (let item of items) {
    list.push(item);
  }
}
