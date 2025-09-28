import { data_path_generic } from "./data_path_generic.mjs";
import { marker } from "./marker.mjs";
export function data_prompts_path() {
  marker("1");
  let f_path = data_path_generic("", "prompts");
  return f_path;
}
