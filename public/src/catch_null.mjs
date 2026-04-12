export function catch_null(lambda) {
  try {
    let r = lambda();
  } catch (e) {}
}
