import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { property_get } from "./property_get.mjs";
import { module_repos_resolve } from "./module_repos_resolve.mjs";
import { module_public_resolve } from "./module_public_resolve.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { server_url_host_port } from "./server_url_host_port.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { error } from "./error.mjs";
export async function server_static_free_port_run(lambda) {
  "put a web server of THIS copy of the repo up on a port nobody else is using, hand its address to what was given, and take it down again afterwards";
  "It exists so that a walk of an app can be a walk of a COMMIT. This repo's own server stands on one fixed port and serves the working folder, which is where ten of us are saving files all day - so a check that walked it would reach a verdict about whatever happened to be on the disk at that second, and file it under a commit that never held it. A server started inside the frozen copy serves the frozen copy, because the folders below are found from this file's own place on disk and this file is in there too.";
  "The port is whatever the machine had spare, asked for by asking for nothing. Naming a second fixed port would work until two of these ran at once, and two of these running at once is the ordinary case here rather than the strange one.";
  "It is taken down whether what was given finished or threw, and the throw is kept and thrown again afterwards. A check that fails is the whole reason this is here, so leaving the server standing on the failing path would leak a port on exactly the runs that matter.";
  "The web server package is fetched at the moment one is wanted rather than at the top of the file, which is the same thing the file writer does and for the same reason: nearly everything that loads this repo never starts a server, and a plain import is followed before the file it sits in runs a line.";
  arguments_assert(arguments, 1);
  let package_name = text_frozen("express");
  let module_express = await import(package_name);
  let express = property_get(module_express, "default");
  let app = express();
  let repos = await module_repos_resolve(import.meta);
  let folder_public_here = await module_public_resolve(import.meta);
  let v_repos = express.static(repos);
  let v_public = express.static(folder_public_here);
  app.use(v_repos);
  ("the public folder is served at the root as well as under its own name, because that is what this repo's own server does and it is the shape every dev page is written against - a page asking for /dev/code.js is asking for public/dev/code.js");
  app.use(v_public);
  let listening = null;
  function opening(resolve) {
    function ready() {
      resolve();
    }
    listening = app.listen(0, ready);
  }
  await promise_wrap(opening);
  let address = listening.address();
  let port = property_get(address, "port");
  let url = server_url_host_port("localhost", port);
  async function run() {
    await lambda(url);
  }
  let failed = await catch_error_text_or_null_async(run);
  listening.close();
  let broken = null_not_is(failed);
  if (broken) {
    error(failed);
  }
}
