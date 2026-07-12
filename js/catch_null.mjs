export function catch_null(lambda) {
  let r = null;
  try {
    r = lambda();
  } catch (e) {}
  return r;
}
