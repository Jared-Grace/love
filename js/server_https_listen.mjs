import https from "https";
import { arguments_assert } from "./arguments_assert.mjs";
import { server_https_certificate_ensure } from "./server_https_certificate_ensure.mjs";
import { server_port_https } from "./server_port_https.mjs";
import { machine_name_local } from "./machine_name_local.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_keep } from "./log_keep.mjs";
import { text_combine } from "./text_combine.mjs";
export async function server_https_listen(app) {
  "The same server answering a second time, over https on its own port, so a page that needs the camera can be tried from a phone. The plain port keeps answering exactly as before.";
  "A failure here is told and swallowed rather than thrown. The plain server is already up by the time this runs, and an https half that could not start - no openssl, a port taken - must not take every other page down with it.";
  arguments_assert(arguments, 1);
  async function listen() {
    let options = await server_https_certificate_ensure();
    let port = server_port_https();
    let host = machine_name_local();
    function said() {
      let message = text_combine_multiple([
        "Https server running at: https://",
        host,
        ":",
        port,
      ]);
      log_keep(server_https_listen.name, message);
    }
    https.createServer(options, app).listen(port, said);
  }
  try {
    await listen();
  } catch (e) {
    let message2 = text_combine("Https server not started: ", e.message);
    log_keep(server_https_listen.name, message2);
  }
}
