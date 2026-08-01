export function json_format_to_spaces(object, spaces) {
  "json text for an object, indented by the number of spaces the file it is going back into already uses";
  "rewriting a hand-kept file at a different width turns a one-line addition into a whole-file diff, which is what a peer reads when they look at what changed";
  let json = json_format_to_spaces_replaced(object, spaces, null);
  return json;
}
