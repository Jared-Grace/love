export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(a) {
    let matches = fn(a);
    if (matches) {
      on_match(a);
    }
  };
  return matcher;
}
