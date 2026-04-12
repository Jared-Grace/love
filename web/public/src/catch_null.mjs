export function catch_null(lambda) {
  try {
    let r = null;
    r = lambda();
  } catch (e) {}
}
