import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function server_url_host_port(host, port) {
  "$plain host";
  "$plain port";
  "the address a web server on this machine is reached at, from a host name and the port it is listening on";
  "The port is asked for rather than looked up, because this repo's own server is no longer the only one there is: a run of the gates puts a second one over a frozen copy of the repo on whatever port the machine had spare, so that a walk of an app is a walk of the commit being judged rather than of whatever is in the folder at that moment.";
  arguments_assert(arguments, 2);
  let r = text_combine_multiple(["http://", host, ":", port]);
  return r;
}
