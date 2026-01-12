import { http_json } from "../../../love/public/src/http_json.mjs";
import { server_url_data_ending } from "../../../love/public/src/server_url_data_ending.mjs";
import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_generate_get_server() {
  marker("1");
  let url = server_url_get() + server_url_data_ending() + "";
  let parsed = await http_json(url2);
  let data = null;
  let data_get = async function lambda2() {
    if (null_is(data)) {
      data = {};
      await data_generate(data);
    }
    return data;
  };
  return data_get;
}
