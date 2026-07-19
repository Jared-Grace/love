import { firebase_prod_asset_url } from "./firebase_prod_asset_url.mjs";
import { http } from "./http.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
export async function firebase_prod_asset_download(file_name) {
  let url = firebase_prod_asset_url(file_name);
  ("retry so a transient timeout re-resolves DNS and recovers instead of crashing the whole deploy");
  async function download() {
    let v = await http(url);
    return v;
  }
  let buffer = await retry_standard(download);
  let text = buffer_text_to(buffer);
  return text;
}
