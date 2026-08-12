import { server_url_host } from "./server_url_host.mjs";
export function server_url() {
  "The address this repo's own web server is reached at from the machine it runs on.";
  let url = server_url_host("localhost");
  return url;
}
