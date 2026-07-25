export function text_code_spans_without(text) {
  "The same prose with everything written between backticks taken out. What is quoted as code is being shown rather than said, so a reader looking for what the prose means should not find it there.";
  "A space is left behind rather than nothing, so two words either side of a quotation do not run together into a third word that was never written.";
  let pattern = /`[^`]*`/g;
  let space = " ";
  let without = text.replace(pattern, space);
  return without;
}
