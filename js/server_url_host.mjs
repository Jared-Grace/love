import { server_port } from "./server_port.mjs";
import { server_url_host_port } from "./server_url_host_port.mjs";
export function server_url_host(host) {
  "The address this repo's own web server is reached at from a given host name.";
  "The two names the same server answers to differ only in that word - the one this machine calls itself, and the one everything else on the network calls it - so the rest of the address is written once here and neither can drift from the other.";
  let port = server_port();
  let r = server_url_host_port(host, port);
  return r;
}
