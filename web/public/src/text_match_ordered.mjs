export function text_match_ordered(t, target) {
  const escaped = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  let regex_text = escaped.split("").join(".*");
  const regex = new RegExp(regex_text);
  let matches = regex.test(target);
  return matches;
}
