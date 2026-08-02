import { g_content_backup_generations_path } from "./g_content_backup_generations_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function g_content_backup_generations_write(generations) {
  "Puts the record back once a pass has finished, so the next one knows what it can skip.";
  "Written at the end rather than as each file lands, because a pass that dies halfway through should be repeated rather than half believed - and repeating it costs only what the first one cost.";
  let path = g_content_backup_generations_path();
  let json = json_format_to(generations);
  await file_overwrite(path, json);
}
