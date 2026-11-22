import { arguments_assert } from "./arguments_assert.mjs";
import { machine_name_local } from "./machine_name_local.mjs";
import { server_port } from "./server_port.mjs";
import { https_prefix } from "./https_prefix.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function server_url_local_https_port_plain() {
  arguments_assert(arguments, 0);
  ("The address this repo's own web server is reached at over https on its plain port, from another device on the network - the port answers both, so a link a browser rewrote to https still opens.");
  let host = machine_name_local();
  let port = server_port();
  let p = https_prefix();
  let r = text_combine_multiple([p, host, ":", port]);
  return r;
}
