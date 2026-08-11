import { catch_message_async } from "./catch_message_async.mjs";
import { file_name_app_chunk } from "./file_name_app_chunk.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_prod_chunks_unreachable(app_name) {
  "$plain app_name";
  "Every extra script one app sends for that whoever is being served right now cannot get, each answered beside what came back instead";
  "Everything else that asks this question reads the folder the app is about to be sent out of. That folder is what will be served, not what is being served, so it can be entirely in order in the same moment that what people actually have in front of them is broken. Both readings are needed and they answer different questions: one catches the fault before it goes out, this one says whether it went out already";
  "What the app sends for is read out of the live script rather than the one on disk, because a build that never travelled would have this asking about numbers nobody outside can see";
  "An app with no live script of its own is answered as missing nothing, which is the same answer as an app that is whole. That is the right way round: this asks whether what is being served is broken, and nothing served cannot be";
  "Each attempt is allowed to fail on its own and is written down with the reason it gave. A refusal from the far end and a name that never resolved look identical once either is reduced to a missing name, and the two want opposite things done about them";
  let source_name = file_name_js(app_name);
  async function source_lambda() {
    let text = await firebase_prod_asset_download(source_name);
    return text;
  }
  let got = await catch_message_async(source_lambda);
  let live = property_get(got, "ok");
  if (not(live)) {
    let none = [];
    return none;
  }
  let text = property_get(got, "value");
  let ids = js_bundle_chunk_ids(text);
  let unreachable = [];
  for (let chunk_id of ids) {
    let file_name = file_name_app_chunk(chunk_id, app_name);
    async function chunk_lambda() {
      let piece = await firebase_prod_asset_download(file_name);
      return piece;
    }
    let reached = await catch_message_async(chunk_lambda);
    let there = property_get(reached, "ok");
    if (not(there)) {
      let why = property_get(reached, "message");
      list_add(unreachable, {
        file_name,
        why,
      });
    }
  }
  return unreachable;
}
