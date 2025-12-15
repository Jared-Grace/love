import { log } from "../../../love/public/src/log.mjs";
import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_generic(f_name, args, fn) {
  marker("1");
  var { url, body } = app_api_generic_url_body(f_name, args);
  let o = await fn(url, body);
  log({
    o,
  });
  return o;
}
