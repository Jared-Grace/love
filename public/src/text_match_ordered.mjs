export function text_match_ordered(query, input) {
  const escaped = query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  let regex_text = escaped.split("").join(".*");
  const regex = new RegExp(regex_text);
  let matches = regex.test(input);
  return matches;
}
