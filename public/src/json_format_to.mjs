export function json_format_to(object) {
  let v = JSON.stringify(object, null, 1);
  return v;
}
