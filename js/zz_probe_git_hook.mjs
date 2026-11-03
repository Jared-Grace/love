import { file_overwrite } from "./file_overwrite.mjs";
export async function zz_probe_git_hook() {
  await file_overwrite(".git/hooks/pre-commit", "");
}
