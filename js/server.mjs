import express from "express";
import { server_port } from "./server_port.mjs";
import { module_repos_resolve } from "./module_repos_resolve.mjs";
import { server_cache_headers } from "./server_cache_headers.mjs";
import { module_public_resolve } from "./module_public_resolve.mjs";
import { module_web_dev_resolve } from "./module_web_dev_resolve.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { module_web_latest_resolve } from "./module_web_latest_resolve.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { server_api_generic } from "./server_api_generic.mjs";
import { promise_resolved } from "./promise_resolved.mjs";
import { server_url_api_ordered } from "./server_url_api_ordered.mjs";
import { server_data_endpoints } from "./server_data_endpoints.mjs";
import { server_url } from "./server_url.mjs";
import { log_keep } from "./log_keep.mjs";
export async function server() {
  let app = express();
  let v3 = express.json({
    limit: "50mb",
  });
  app.use(v3);
  let port = server_port();
  let result = await module_repos_resolve(import.meta);
  function cache_headers(res, file_path) {
    let r = server_cache_headers(res, file_path);
    return r;
  }
  let static_options = {
    setHeaders: cache_headers,
  };
  let v = express.static(result, static_options);
  ("serve the public folder at the root too, so absolute asset urls like /bible/uplifting/engbsb.json resolve in dev exactly as they do in prod, where firebase hosting serves public as the site root");
  let folder_public_resolved = await module_public_resolve(import.meta);
  let v_public = express.static(folder_public_resolved, static_options);
  ("serve the dev folder at its own name as well, so a working build keeps the address a phone already has the folder ever stops sitting inside the published one. it did, on 2026-09-03, and this mount is the whole reason the address survived the day. before that it was reachable only because it happened to be in there, which was an accident of layout rather than a decision; this was the decision, written while both were still true and costing nothing at all until it became the only thing holding the address up");
  let folder_dev_resolved = await module_web_dev_resolve(import.meta);
  let v_dev = express.static(folder_dev_resolved, static_options);
  let left = text_slash_forward();
  let right2 = app_shared_name_dev_text();
  let dev_url = text_combine(left, right2);
  ("and the checked stage the same way, for the same reason and it left the published folder on the same day. it is the one stage a person opens by typing its address rather than by following a link from anywhere, so there is no page that would go red if it stopped answering - it would simply stop, and the phone would say the address was not found");
  let folder_latest_resolved = await module_web_latest_resolve(import.meta);
  let v_latest = express.static(folder_latest_resolved, static_options);
  let right3 = app_shared_name_latest_text();
  let latest_url = text_combine(left, right3);
  let u = server_url_api();
  async function api(req, res) {
    await server_api_generic(req, res);
  }
  app.post(u, api);
  let ordering = promise_resolved();
  let uo = server_url_api_ordered();
  app.post(uo, api_ordered);
  async function api_ordered(req, res) {
    async function lambda2() {
      await server_api_generic(req, res);
    }
    ordering = ordering.then(lambda2);
    await ordering;
  }
  server_data_endpoints(app);
  app.use(v);
  app.use(dev_url, v_dev);
  app.use(latest_url, v_latest);
  app.use(v_public);
  function lambda() {
    let right = server_url();
    let message = text_combine("Static server running at: ", right);
    log_keep(server.name, message);
  }
  app.listen(port, lambda);
}
