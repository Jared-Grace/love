export function html_parse_attr(d, item, name) {
  let v = d(item).attr(name);
  return v;
}
