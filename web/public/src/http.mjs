import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http(url) {
  let v = await http_generic(url, {
    method: "GET",
  });
  return v;
}
