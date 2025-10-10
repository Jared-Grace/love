export function reply_on_match(wrapped_fn, on_match) {
  let fn = async function reply_on_match_inner(a) {
    let matches = wrapped_fn(a);
    if (matches) {
      await on_match(a);
    }
  };
  return fn;
}
