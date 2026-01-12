import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http_post(url, body) {
  let v = await http_generic(url, {
    method: "POST",
    body: body,
  });
  return v;
}
