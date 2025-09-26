export function reply_on_match(wrapped_fn, on_match) {
  let fn = function reply_on_match_inner(a) {
    wrapped_fn(a);
  };
  return fn;
}
