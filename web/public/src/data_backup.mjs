import { date_now_file } from "./date_now_file.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { data_path } from "./data_path.mjs";
import { marker } from "./marker.mjs";
export function data_backup() {
  marker("1");
  let f_path_from = data_path();
  let inner = date_now_file();
  let f_path_to = data_path_generic("." + inner);
  cp;
}
