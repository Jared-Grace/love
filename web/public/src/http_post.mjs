import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http_post(url, body) {
  const options = {
    method: "POST",
    body: body,
  };
  let to2 = object_merge(to, from);
  let v = await http_generic(url, options);
  return v;
}
