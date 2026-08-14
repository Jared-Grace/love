export function html_parse_node(d, item) {
  "One piece of a parsed page handed back as something that can be asked further questions.";
  "A piece taken out of a page comes back bare - it is the thing itself, and it answers nothing. Handing it back to the reader it came from is what makes it answerable again, so that looking inside a piece is the same act as looking inside the page, and a caller holding a piece is never in a worse position than a caller holding the whole.";
  let node = d(item);
  return node;
}
