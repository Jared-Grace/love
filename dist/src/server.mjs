import { server_data_endpoints } from "../../../love/public/src/server_data_endpoints.mjs";
import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
import { server_url_api_ordered } from "../../../love/public/src/server_url_api_ordered.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { server_port } from "../../../love/public/src/server_port.mjs";
import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { function_run_io_file_wrapper } from "../../../love/public/src/function_run_io_file_wrapper.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
export function server() {
  const app = express();
  let v3 = express.json({
    limit: "50mb",
  });
  app.use(v3);
  const port = server_port();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let previous = folder_previous();
  let result2 = path_join([__dirname, previous, previous, previous]);
  let v = express.static(result2);
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
    log_keep("Static server running at: " + server_url());
  }
  app.listen(port, lambda);
}
