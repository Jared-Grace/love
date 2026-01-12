import { server_url_get } from "../../../love/public/src/server_url_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export function data_generate_get_server() {
  marker("1");
  let url = server_url_get();
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
