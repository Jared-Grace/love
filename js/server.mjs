import { server_api_generic } from "./server_api_generic.mjs";
import { server_cache_headers } from "./server_cache_headers.mjs";
import { server_data_endpoints } from "./server_data_endpoints.mjs";
import { promise_resolved } from "./promise_resolved.mjs";
import { server_url_api_ordered } from "./server_url_api_ordered.mjs";
import { server_url } from "./server_url.mjs";
import { server_port } from "./server_port.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { log_keep } from "./log_keep.mjs";
import express from "express";
import { module_repos_resolve } from "./module_repos_resolve.mjs";
import { module_public_resolve } from "./module_public_resolve.mjs";
import { text_combine } from "./text_combine.mjs";
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
  app.use(v_public);
  function lambda() {
    let right = server_url();
    let message = text_combine("Static server running at: ", right);
    log_keep(server.name, message);
  }
  app.listen(port, lambda);
}
