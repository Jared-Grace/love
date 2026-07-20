// Only a long, identifier-like literal is worth reporting as a duplicated
// constant. Short or punctuated values ("id", "name", ", ") collide across
// completely unrelated uses, and a report full of those hides the real
// findings — the filter is what makes the finder actionable rather than a
// list of 150 coincidences.
export function literal_distinctive_is(literal) {
  if (literal.length < 5) {
    return false;
  }
  let identifier_like = /^[A-Za-z0-9_.-]+$/.test(literal);
  return identifier_like;
}
