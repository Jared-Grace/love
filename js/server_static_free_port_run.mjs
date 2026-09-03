import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { property_get } from "./property_get.mjs";
import { module_repos_resolve } from "./module_repos_resolve.mjs";
import { module_public_resolve } from "./module_public_resolve.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { module_web_dev_resolve } from "./module_web_dev_resolve.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { module_web_latest_resolve } from "./module_web_latest_resolve.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
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
  "THE THREE STAGES ARE EACH MOUNTED, and that is not tidiness. Two of them used to be rooms inside the published folder, so serving the published folder at the root served all three by accident; on 2026-09-03 they came out and stood beside it, and the accident stopped. What broke was silent and total: every walk of a working page asked for an address that answered with nothing found, which reads exactly like a page that renders badly rather than a folder that moved.";
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
  ("the public folder is served at the root as well as under its own name, because that is what this repo's own server does and it is the shape every published page is written against - a page asking for /bible/uplifting/engbsb.json is asking for a file that sits directly in the published folder");
  app.use(v_public);
  ("the working stage and the checked stage under their own names, the same two mounts the real server makes and for the same reason - a page asking for /dev/code.js is asking for web/dev/code.js");
  let slash = text_slash_forward();
  let folder_dev_here = await module_web_dev_resolve(import.meta);
  let v_dev = express.static(folder_dev_here);
  let dev_name = app_shared_name_dev_text();
  let dev_url = text_combine(slash, dev_name);
  app.use(dev_url, v_dev);
  let folder_latest_here = await module_web_latest_resolve(import.meta);
  let v_latest = express.static(folder_latest_here);
  let latest_name = app_shared_name_latest_text();
  let latest_url = text_combine(slash, latest_name);
  app.use(latest_url, v_latest);
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
