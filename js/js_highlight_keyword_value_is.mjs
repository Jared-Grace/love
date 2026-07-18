// Contextual keywords that the tokenizer reports as plain names (label "name"),
// distinguished only by their text — real keywords carry their own token label.
export function js_highlight_keyword_value_is(value) {
  let keywords = [
    "let",
    "from",
    "of",
    "as",
    "async",
    "await",
    "yield",
    "in",
    "new",
    "typeof",
    "instanceof",
    "void",
    "delete",
  ];
  let r = keywords.includes(value);
  return r;
}
