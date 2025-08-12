export function catch_ignore(lambda) {
  try {
    lambda();
  } catch (e) {}
}
