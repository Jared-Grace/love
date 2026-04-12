export function catch_null_async(lambda) {
  let r = null;
  try {
    r = lambda();
  } catch (e) {}
  return r;
}
