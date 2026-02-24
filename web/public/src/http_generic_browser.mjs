import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export async function http_generic_browser(method, options, body, url) {
  async function lambda3() {
    const r = {
      method,
    };
    let exists = property_exists(options, "body");
    if (exists) {
      object_assign(r, {
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: json_to(body),
      });
    }
    const response = await fetch(url, r);
    if (not(response.ok)) {
      error("Failed to fetch file");
    }
    const buf = await response.arrayBuffer();
    return buf;
  }
  let v = await html_loading(lambda3);
  return v;
}
