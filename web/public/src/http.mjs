import { marker } from "../../../love/public/src/marker.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http(url) {
  marker("1");
  let v = await http_generic(url, {
    method: "GET",
  });
  return v;
}
