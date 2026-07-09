import { data_path } from "../../../love/public/src/data_path.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function server_url_data_ending() {
  let d_path = data_path();
  let v = text_combine("/", d_path);
  return v;
}
