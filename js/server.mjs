import { server_data_endpoints } from "./server_data_endpoints.mjs";
import { promise_resolved } from "./promise_resolved.mjs";
import { server_url_api_ordered } from "./server_url_api_ordered.mjs";
import { server_url } from "./server_url.mjs";
import { server_port } from "./server_port.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { function_run_io_file_wrapper } from "./function_run_io_file_wrapper.mjs";
import { property_get } from "./property_get.mjs";
import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
import { log_keep } from "./log_keep.mjs";
import express from "express";
import { path_dirname } from "./path_dirname.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { path_join } from "./path_join.mjs";
import { fileURLToPath } from "url";
import { text_combine } from "./text_combine.mjs";
export async function server() {
  let app = express();
  let v3 = express.json({
    limit: "50mb",
  });
  app.use(v3);
  let port = server_port();
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = await path_dirname(__filename);
  let repo_root = folder_repo_root_find(__dirname);
  let result = await path_resolve(path_join([repo_root, ".."]));
  let v = express.static(result);
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
  function lambda() {
    log_keep(
      server.name,
      text_combine("Static server running at: ", server_url()),
    );
  }
  app.listen(port, lambda);
}
