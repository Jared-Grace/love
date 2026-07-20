import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
// The reviewer's in-app "Suggest an edit" box posts here (via app_shared_api →
// local dev API, the same path g_verify_approval_set uses). One pending suggestion
// per chapter: { key, text } where key is the verse/passage and text is the edited
// lines (one per line). The sermon loop reads it, judges + re-derives indices, then
// clears it — mirrors the approval round-trip so no new transport is introduced.
export async function g_verify_suggest_set(chapter_code, key, text) {
  let path = local_function_path_json(chapter_code, g_verify_suggest_set);
  await file_overwrite_uncached(path, json_format_to({ key, text }));
  return path;
}
