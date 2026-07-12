import { data_path } from "./data_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function server_url_data_ending() {
  let d_path = data_path();
  let v = text_combine("/", d_path);
  return v;
}
