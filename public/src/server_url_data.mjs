import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export function server_url_data() {
  let d_path = data_path();
  let u = server_url_api();
  let v3 = u + "/" + d_path;
  return v3;
}
