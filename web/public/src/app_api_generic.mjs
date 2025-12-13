import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_generic(f_name, args, fn) {
  marker("1");
  let api_body = {
    f_name: f_name,
    args: args,
  };
  const url = "/api";
  let o = await fn(url, api_body);
  let result = object_property_get(o, "result");
  return result;
}
