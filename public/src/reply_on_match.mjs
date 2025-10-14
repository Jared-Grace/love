export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(possbilities) {
    let matches = fn(possbilities);
    if (matches) {
      on_match(possbilities);
    }
    return matches;
  };
  return matcher;
}
