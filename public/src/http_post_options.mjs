import { marker } from "../../../love/public/src/marker.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function http_post_options(body, options_extra, url) {
  marker("1");
  const options = {
    method: "POST",
    body: body,
  };
  object_merge(options, options_extra);
  let v = await http_generic(url, options);
  return v;
}
