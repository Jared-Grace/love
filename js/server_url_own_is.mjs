import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { server_url } from "./server_url.mjs";
import { server_url_local } from "./server_url_local.mjs";
export function server_url_own_is(url) {
  "$plain url";
  "Whether an address points at this repo's own web server rather than out to somewhere on the internet.";
  "Both spellings count, because the same server answers to localhost from the machine it runs on and to the machine's name from anywhere else on the network.";
  let url2 = server_url();
  let r2 = server_url_local();
  let prefixes = [url2, r2];
  let r = list_any_starts_with(url, prefixes);
  return r;
}
