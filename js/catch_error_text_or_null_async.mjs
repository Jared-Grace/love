export async function catch_error_text_or_null_async(lambda) {
  "run something that is allowed to fail and hand back WHAT went wrong as a line of text, or null when nothing did.";
  "the sibling that returns null on failure throws the reason away, which is right when the caller only needs to know whether it worked. this one is for a caller whose whole job is to report the failure to somebody - a sweep that has to say which page would not open and why, where 'it did not work' is not an answer anybody can act on.";
  "null means it succeeded. that is the way round it is because a caller of this is looking for trouble, so the empty answer should be the quiet one.";
  let text = null;
  try {
    await lambda();
  } catch (e) {
    text = String(e);
  }
  return text;
}
