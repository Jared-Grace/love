import { log } from "../../../love/public/src/log.mjs";
import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export function server_url_get() {
  let url = null;
  if (browser_is()) {
    url = "";
  } else {
    url = server_url();
  }
  url += server_url_api();
  log({
    url,
  });
  return url;
}
