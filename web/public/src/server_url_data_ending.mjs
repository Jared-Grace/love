import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function server_url_data_ending() {
  let d_path = data_path();
  let v = "/" + d_path;
  return v;
}
