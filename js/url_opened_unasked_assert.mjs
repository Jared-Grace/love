import { url_host } from "./url_host.mjs";
import { curl_read_hosts } from "./curl_read_hosts.mjs";
export function url_opened_unasked_assert(url) {
  "Throws unless this address is one a command may open with nobody asked: this machine, a machine on this network, or a site on the approved list.";
  "A grant cannot see an argument, so a standing approval on a command that opens whatever address it is handed also approves sending anything to anywhere, because an address can carry text out in itself. The bash guard cannot close that either: it reads the command as typed, and a variable hides the value from it. Here the value is real.";
  "The address is read the way the browser reads it, so a spelling that looks like one site and reaches another is judged by where it really goes, and something that is not a web address at all - a file on this machine, say - has no host and is refused.";
  "The approved list is the one the human adds to by name, so a new site still takes their approval here as it does for a plain read.";
  let host = url_host(url);
  let here = ["localhost", "127.0.0.1", "[::1]"].includes(host);
  let network = host.endsWith(".local");
  let approved = curl_read_hosts().includes(host);
  if (here || network || approved) {
    return;
  }
  throw new Error(
    "not opened: " +
      url +
      " is not this machine, this network, or a site on the approved list",
  );
}
