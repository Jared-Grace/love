export function json_format_to(object) {
  let j = JSON.stringify(object, null, 1);
  return j;
}
