export function memory_symbol_call_tokens(text) {
  ("Extract every snake_case function-call-style token in text - a lowercase");
  ("name with at least one underscore immediately followed by an open paren,");
  ("e.g. foo_bar( - returned de-duplicated. The paren is the high-confidence");
  ("signal that a real function is meant, versus a bare backtick term. Empty");
  ("list when nothing matches.");
  let matches = text.match(/[a-z][a-z0-9]*(?:_[a-z0-9]+)+(?=\()/g);
  if (matches === null) {
    return [];
  }
  let unique = [...new Set(matches)];
  return unique;
}
