import { localhost_is } from "./localhost_is.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function host_local_network_is() {
  "Whether the page being read was served from a machine on this same network rather than from the deployed site on the internet.";
  "It answers yes for the machine the browser itself runs on, and yes for any machine reached by the name its own network gives it - a name ending in '.local', which is what a machine on a home network is found by when nothing outside that network knows it exists.";
  "It is deliberately not written as the name of one machine. A typed machine name goes quietly wrong the day that machine is renamed or a second one joins it, and nothing says so; the ending is the structural fact, true of every machine served this way and of no machine served from the internet.";
  let served_here = localhost_is();
  let served_on_network = text_ends_with(location.hostname, ".local");
  let r = served_here || served_on_network;
  return r;
}
