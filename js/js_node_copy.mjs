export function js_node_copy(node) {
  ("A syntax tree node copied whole, so a pass that changes what it is given can be handed one nothing else is holding.");
  ("The shape readers blank out the private names in place, which is fine when each parse is read once and thrown away. It is not fine when the same parse is read again from a different starting line - the second reading sees the first one's blanks and answers with a shape that was never written anywhere. Copying is what lets one parse answer many questions.");
  let copied = structuredClone(node);
  return copied;
}
