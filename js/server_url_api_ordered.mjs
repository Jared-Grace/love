import { server_url_api } from "./server_url_api.mjs";
import { text_combine } from "./text_combine.mjs";
export function server_url_api_ordered() {
  let u = server_url_api();
  let uo = text_combine(u, "/ordered");
  return uo;
}
