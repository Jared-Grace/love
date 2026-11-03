import { file_overwrite_unfenced } from "./file_overwrite_unfenced.mjs";
export async function zz_probe_third_caller() {
  await file_overwrite_unfenced(".claude/settings.json", "{}");
}
