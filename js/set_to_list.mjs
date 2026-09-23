export function set_to_list(set) {
  "The members of a set as a list, in the order they were first added.";
  let list = [...set];
  return list;
}
