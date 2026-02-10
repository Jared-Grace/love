import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { server_url_data } from "../../../love/public/src/server_url_data.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
export function server_data_endpoints(app) {
  let data_sequence = promise_resolved();
  let data = null;
  async function d_get(req, res) {
    let p = performance_start("data_sequence = data_sequence.then(data_get)");
    data_sequence = data_sequence.then(data_get);
    performance_next(p, "await data_sequence");
    await data_sequence;
    performance_next(p, "res.json(data)");
    res.json(data);
    let r = performance_end(p, "res.json(data)");
    async function data_get() {
      if (null_is(data)) {
        data = {};
        await data_generate(data);
      }
    }
  }
  let du = server_url_data();
  app.get(du, d_get);
  async function lambda4(req, res) {
    let data_next = property_get(req, "body");
    update();
    data_sequence = data_sequence.then(update);
    function update() {
      object_replace(data, data_next);
    }
    await data_sequence;
    res.end();
  }
  app.post(du, lambda4);
}
