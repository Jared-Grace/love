import { machine_name_local } from "./machine_name_local.mjs";
import { server_url_host } from "./server_url_host.mjs";
export function server_url_local() {
  "The address this repo's own web server is reached at from another device on the same network - a phone, most of the time.";
  "Its twin without the last word is the same server reached from the machine it runs on, and a phone cannot use that one, because a phone asking for localhost asks itself.";
  let host = machine_name_local();
  let r = server_url_host(host);
  return r;
}
