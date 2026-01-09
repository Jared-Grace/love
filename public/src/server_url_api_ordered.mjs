import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
export function server_url_api_ordered() {
  let u = server_url_api();
  let v3 = u + "/ordered";
  return v3;
}
