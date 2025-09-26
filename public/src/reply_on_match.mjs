export function reply_on_match(wrapped_fn, on_match) {
  let fn = function reply_on_match_inner(a) {
    let matches = wrapped_fn(a);
  };
  return fn;
}
