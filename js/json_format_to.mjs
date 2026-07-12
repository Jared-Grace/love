export function json_format_to(object) {
  let json = JSON.stringify(object, null, 1);
  return json;
}
