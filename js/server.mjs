import { server_data_endpoints } from "../../love/js/server_data_endpoints.mjs";
import { promise_resolved } from "../../love/js/promise_resolved.mjs";
import { server_url_api_ordered } from "../../love/js/server_url_api_ordered.mjs";
import { server_url } from "../../love/js/server_url.mjs";
import { server_port } from "../../love/js/server_port.mjs";
import { server_url_api } from "../../love/js/server_url_api.mjs";
import { function_run_io_file_wrapper } from "../../love/js/function_run_io_file_wrapper.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { folder_repos_resolve } from "../../love/js/folder_repos_resolve.mjs";
import { log_keep } from "../../love/js/log_keep.mjs";
import express from "express";
import { module_dirname } from "./module_dirname.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export async function server() {
  let app = express();
  let v3 = express.json({
    limit: "50mb",
  });
  app.use(v3);
  let port = server_port();
  let __dirname = await module_dirname(import.meta.url);
  let result = await folder_repos_resolve(__dirname);
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
