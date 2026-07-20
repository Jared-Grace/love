import { server_data_endpoints } from "../../love/js/server_data_endpoints.mjs";
import { promise_resolved } from "../../love/js/promise_resolved.mjs";
import { server_url_api_ordered } from "../../love/js/server_url_api_ordered.mjs";
import { server_url } from "../../love/js/server_url.mjs";
import { server_port } from "../../love/js/server_port.mjs";
import { server_url_api } from "../../love/js/server_url_api.mjs";
import { function_run_io_file_wrapper } from "../../love/js/function_run_io_file_wrapper.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { log_keep } from "../../love/js/log_keep.mjs";
import express from "express";
import { module_repos_resolve } from "./module_repos_resolve.mjs";
import { module_public_resolve } from "./module_public_resolve.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export async function server() {
  let app = express();
  let v3 = express.json({
    limit: "50mb",
  });
  app.use(v3);
  let port = server_port();
  let result = await module_repos_resolve(import.meta);
  function cache_headers(res, file_path) {
    "stale-while-revalidate caching for the game's static art (img/game/**): a dev RELOAD serves the cached sprite INSTANTLY (never blocks on the HTTP/1.1 6-connection cap → no 'did not load' flood) AND revalidates in the background, so an EDITED sprite is picked up on the next normal reload — no hard-reload needed. html/js keep default freshness (the dev bundle is already ?v= busted)";
    let asset = file_path.includes("/img/game/");
    if (asset) {
      res.setHeader("Cache-Control", "public, max-age=0, stale-while-revalidate=31536000");
    }
  }
  let static_options = { setHeaders: cache_headers };
  let v = express.static(result, static_options);
  "serve the public folder at the root too, so absolute asset urls like /bible/uplifting/engbsb.json resolve in dev exactly as they do in prod, where firebase hosting serves public as the site root";
  let folder_public_resolved = await module_public_resolve(import.meta);
  let v_public = express.static(folder_public_resolved, static_options);
  let u = server_url_api();
  async function api_generic(req, res) {
    let body = property_get(req, "body");
    let r = await function_run_io_file_wrapper(body);
    res.json(r);
  }
  async function api(req, res) {
    await api_generic(req, res);
  }
  app.post(u, api);
  let ordering = promise_resolved();
  let uo = server_url_api_ordered();
  app.post(uo, api_ordered);
  async function api_ordered(req, res) {
    async function lambda2() {
      await api_generic(req, res);
    }
    ordering = ordering.then(lambda2);
    await ordering;
  }
  server_data_endpoints(app);
  app.use(v);
  app.use(v_public);
  function lambda() {
    log_keep(
      server.name,
      text_combine("Static server running at: ", server_url()),
    );
  }
  app.listen(port, lambda);
}
