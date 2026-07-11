import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export async function http_post_options(url, body, options_extra) {
  let options = {
    method: "POST",
    body: body,
  };
  object_merge_set(options, options_extra);
  let v = await http_generic(url, options);
  return v;
}
