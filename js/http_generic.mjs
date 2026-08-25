import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { http_browser_bytes } from "./http_browser_bytes.mjs";
import { html_loading } from "./html_loading.mjs";
import { browser_is } from "./browser_is.mjs";
export async function http_generic(url, options) {
  "Fetches an address and answers the raw bytes that came back, from a browser or from node alike.";
  "Bytes are the answer rather than text or a parsed reading of them, because the callers want different things - a picture, a font, a page of JSON - and every one of those can be had from the bytes while none of them can be had from another's reading.";
  "Which half runs is decided by where this is running, not by what the caller asked for. A browser has fetch and no way to open a socket; node has sockets and, for a long time, no fetch worth relying on. So the two halves do the same job by different means and the caller is spared knowing which.";
  "The browser half runs inside the shared loading mark, gives up after eight seconds, and tries three times. A stalled connection is the reason for the ceiling: a fetch with no ceiling never settles at all, so the loading mark never comes down and the page looks broken for good, where a fresh attempt on a new connection nearly always succeeds.";
  "★ THE NODE HALF IS ASKED FOR BY NAME AND NOT IMPORTED, and that is about weight rather than about tidiness. The question above decides which half RUNS and settles nothing about which half SHIPS - a bundler follows a plain import whether the branch is walked or not, so while both halves were written here every page that fetched anything at all was downloading a socket client it has no socket to use. A name joined into a path at the moment it is wanted is something a bundler cannot see through, and that is the whole of what keeps it out.";
  let method = options.method || "GET";
  let body = options.body || null;
  let b = browser_is();
  if (b) {
    async function lambda3() {
      let r = await http_browser_bytes(method, options, body, url);
      return r;
    }
    let v = await html_loading(lambda3);
    return v;
  }
  let f_name = fn_name("http_generic_node");
  let fn = await function_import_relative(f_name);
  let buffer = await fn(url, options);
  return buffer;
}
