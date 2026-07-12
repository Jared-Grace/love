import { text_combine } from "./text_combine.mjs";
export function g_folder_img(path_prefix) {
  let v = text_combine(path_prefix, "img/game/");
  return v;
}
