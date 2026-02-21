export function json_format_to(object) {
  let r = JSON.stringify(object, null, 1);
  return r;
}
