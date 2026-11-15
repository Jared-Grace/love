import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { web_assets_english_words_path } from "./web_assets_english_words_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function english_words_asset_write() {
  "Copies this machine's English word list into the assets as one JSON list of its lines, and sends it up, so a page can tell English from other languages the same way the machine does.";
  "Written without spaces or line breaks, because it is about a hundred thousand short lines and every byte is downloaded by a page - only by one that met a message no rule could read.";
  let lines = await file_read_lines("/usr/share/dict/american-english");
  function lambda(line) {
    let neq = not_equal(line, "");
    return neq;
  }
  let kept = lines.filter(lambda);
  let path = web_assets_english_words_path();
  let file_path = web_assets_folder_join(path);
  let contents = json_to(kept);
  await file_overwrite(file_path, contents);
  await web_assets_upload(path);
  let written = {
    path,
    lines: kept.length,
  };
  return written;
}
