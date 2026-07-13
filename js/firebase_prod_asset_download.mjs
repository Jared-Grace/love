import { firebase_prod_asset_url } from "./firebase_prod_asset_url.mjs";
import { http } from "./http.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
export async function firebase_prod_asset_download(file_name) {
  let url = firebase_prod_asset_url(file_name);
  let buffer = await http(url);
  let text = buffer_text_to(buffer);
  return text;
}
