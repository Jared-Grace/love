import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http_post(url, body) {
  const options = {
    method: "POST",
    body: body,
  };
  let v = await http_generic(url, options);
  return v;
}
