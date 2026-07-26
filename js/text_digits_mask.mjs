export function text_digits_mask(text) {
  "replace every run of digits with a single # so two crawls of the same screen compare equal despite the random numbers baked into each quiz question. The labels, prose, and structure - what the make-sense judge cares about - stay; the volatile operands do not, so a plain text diff stops flagging every screen every run";
  let masked = text.replace(/[0-9]+/g, "#");
  return masked;
}
