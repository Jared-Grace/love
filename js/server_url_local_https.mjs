import { arguments_assert } from "./arguments_assert.mjs";
import { machine_name_local } from "./machine_name_local.mjs";
import { server_port_https } from "./server_port_https.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { https_prefix } from "./https_prefix.mjs";
export function server_url_local_https() {
  "The address this repo's own web server is reached at over https from another device on the same network - the one a phone has to use for a page that records, because a browser gives the camera only to an https page.";
  arguments_assert(arguments, 0);
  let host = machine_name_local();
  let port = server_port_https();
  let p = https_prefix();
  let r = text_combine_multiple([p, host, ":", port]);
  return r;
}
