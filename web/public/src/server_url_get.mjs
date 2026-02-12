import { ternary } from "../../../love/public/src/ternary.mjs";
import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export function server_url_get() {
  let url = null;
  url = ternary(browser_is(), server_url(), "");
  url += server_url_api();
  return url;
}
