import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
export function server_url_api_ordered() {
  let u = server_url_api();
  let uo = u + "/ordered";
  return uo;
}
