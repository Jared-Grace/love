export function list_subsets_size(list, size) {
  "Every way of choosing that many items out of a list, each choice keeping the order the items were already in.";
  "Choosing is not ordering: the two ways of naming the same pair are one answer here, not two. That is what makes this the right thing to ask when a question is about a group rather than about a sequence - which languages someone reads together, say, where reading them in a different order is not a different reader.";
  "It works by asking about the first item once and then never again. Either a choice takes it, and the rest of that choice is a smaller choice from what follows; or it does not, and the whole choice comes from what follows. Nothing else is possible, so the two answers together are all of them, and neither can contain anything the other does.";
  "How many there are grows fast and then faster - out of forty things there are 780 pairs, 9880 triples and 91390 quadruples - so a caller asking for a size should know that it is asking for all of them and mean it.";
  arguments_assert(arguments, 2);
  let none = equal(size, 0);
  if (none) {
    let empty = [[]];
    return empty;
  }
  let exhausted = list_empty_is(list);
  if (exhausted) {
    let nothing = [];
    return nothing;
  }
  let first = list_first(list);
  let rest = list_skip_1(list);
  let without_first = list_subsets_size(rest, size);
  let smaller = list_subsets_size(rest, subtract_1(size));
  function lambda(subset) {
    let grown = lists_combine([[first], subset]);
    return grown;
  }
  let with_first = list_map(smaller, lambda);
  let subsets = lists_combine([with_first, without_first]);
  return subsets;
}
