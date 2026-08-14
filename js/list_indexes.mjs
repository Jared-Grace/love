export function list_indexes(list) {
  "Where each item of a list sits, counted from zero.";
  "It is the list itself turned into the places in it, which is what anything choosing a few items out of many by position needs. The places are what get passed around rather than the items, because the same choice then means the same thing when made against a second list of the same length.";
  arguments_assert(arguments, 1);
  function lambda(item, at) {
    return at;
  }
  let indexes = list_map_index(list, lambda);
  return indexes;
}
