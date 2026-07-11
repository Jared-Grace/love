export function text_match_ordered(query, value) {
  let escaped = query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  let regex_text = escaped.split("").join(".*");
  let regex = new RegExp(regex_text);
  let matches = regex.test(value);
  return matches;
}
