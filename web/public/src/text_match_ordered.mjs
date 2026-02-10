export function text_match_ordered(t, search) {
  const escaped = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  let regex_text = escaped.split("").join(".*");
  const regex = new RegExp(regex_text);
  let matches = regex.test(search);
  return matches;
}
