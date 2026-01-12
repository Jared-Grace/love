import { server_url_data } from "../../../love/public/src/server_url_data.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
import { server_url_api_ordered } from "../../../love/public/src/server_url_api_ordered.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { server_port } from "../../../love/public/src/server_port.mjs";
import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { function_run_io_file_wrapper } from "../../../love/public/src/function_run_io_file_wrapper.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
export function server() {
  marker("1");
  const app = express();
  let v2 = express.json();
  app.use(v2);
  const port = server_port();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let previous = folder_previous();
  let result2 = path_join([__dirname, previous, previous, previous]);
  let v = express.static(result2);
  let u = server_url_api();
  async function api_generic(req, res) {
    let body = object_property_get(req, "body");
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
  let data_sequence = promise_resolved();
  let data = null;
  async function d_get(req, res) {
    data_sequence = data_sequence.then(data_get);
    await data_sequence;
    res.json(data);
    async function data_get() {
      if (null_is(data)) {
        data = {};
        await data_generate(data);
      }
    }
  }
  let du = server_url_data();
  app.get(du, d_get);
  async function lambda4(data_next) {
    update();
    data_sequence = data_sequence.then(update);
    function update() {
      object_replace(data, data_next);
    }
    await data_sequence;
    res.end();
  }
  app.post(du, lambda4);
  app.use(v);
  function lambda() {
    log_keep("Static server running at: " + server_url());
  }
  app.listen(port, lambda);
}
