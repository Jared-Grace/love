import { app_shared_api } from "./app_shared_api.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
export async function api_read(f_name, args) {
  async function read() {
    let r = await app_shared_api({
      f_name,
      args,
    });
    return r;
  }
  let r2 = await html_loading_suppressed(read);
  return r2;
}
