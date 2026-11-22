import net from "net";
import https from "https";
import http from "http";
import { arguments_assert } from "./arguments_assert.mjs";
import { http } from "./http.mjs";
import { server_https_certificate_ensure } from "./server_https_certificate_ensure.mjs";
import { log_keep } from "./log_keep.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function server_listen_both(app, port, listening) {
  arguments_assert(arguments, 3);
  ("app answers on port over plain http AND https, so an address written either way opens the same page (human, 2026-11-22: \"can http:// :8080 redirect?\", after a phone's copied link came back as https://…:8080 and said the site can't be reached).");
  ("★ A REDIRECT COULD NOT HAVE FIXED IT. An https request opens with a TLS handshake, which a plain server cannot read, so it never gets as far as sending a redirect; the connection just fails. So the port reads the first byte instead: a TLS handshake record always starts with 22, and no plain request does - every one starts with a method word in letters.");
  ("The bytes read to decide are put back before the chosen server sees the connection, so neither server can tell anyone looked.");
  ("No certificate - openssl missing, a file unreadable - leaves the port answering plain http exactly as before, told rather than thrown, so the pages never go down over the https half.");
  let server_plain = http.createServer(app);
  let server_secure = null;
  try {
    let options = await server_https_certificate_ensure();
    server_secure = https.createServer(options, app);
  } catch (e) {
    let message2 = text_combine("Plain http only: ", e.message);
    log_keep(server_listen_both.name, message2);
  }
  function connection(socket) {
    function first(buffer) {
      socket.pause();
      socket.unshift(buffer);
      let handshake = equal(buffer[0], 22) && not(equal(server_secure, null));
      let target = handshake ? server_secure : server_plain;
      target.emit("connection", socket);
      function resume() {
        socket.resume();
      }
      process.nextTick(resume);
    }
    socket.once("data", first);
    function ignore() {}
    socket.on("error", ignore);
  }
  net.createServer(connection).listen(port, listening);
}
