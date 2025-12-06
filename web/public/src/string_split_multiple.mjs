export function string_split_multiple(str, delimiters) {
  function lambda(d) {
    let v = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return v;
  }
  const escaped = delimiters.map(lambda);
  let v3 = escaped.join("|");
  const regex = new RegExp(v3, "g");
  let v2 = str.split(regex);
  return v2;
}
