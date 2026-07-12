import { ternary } from "./ternary.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { server_url } from "./server_url.mjs";
import { browser_is } from "./browser_is.mjs";
export function server_url_get() {
  let url = null;
  url = ternary(browser_is(), "", server_url());
  url += server_url_api();
  return url;
}
