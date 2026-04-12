export function catch_null(lambda) {
  try {
    lambda();
  } catch (e) {}
}
