import { import_install } from "../../../love/public/src/import_install.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
export async function app_g_game_save(g) {
  let p = app_g_game_save_path();
  if (browser_is()) {
    let json = json_format_to(g);
    await file_overwrite(p, json);
    return;
  }
  await file_parent_exists_ensure(p);
  "Using " +
    json_to.name +
    " did not work on sufficiently large object, whereas this did:";
  let fs = await import("fs");
  const v = await import("stream/promises");
  let pipeline = property_get(v, "pipeline");
  let streamJsonStringify = await (
    await import_install("stream-json-stringify")
  ).default;
  const out = fs.createWriteStream(p);
  let json = streamJsonStringify(g);
  await pipeline(json, out);
}
