import { string_take } from "../../../love/public/src/string_take.mjs";
export function html_rgba_to_rgb(selected) {
  let taken = string_take(selected, 7);
  return taken;
}
