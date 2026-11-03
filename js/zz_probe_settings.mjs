import { file_overwrite } from "./file_overwrite.mjs";
export async function zz_probe_settings() {
  await file_overwrite(".claude/settings.json", "");
}
