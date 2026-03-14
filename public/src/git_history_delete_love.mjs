import { git_history_delete } from "../../../love/public/src/git_history_delete.mjs";
export async function git_history_delete_love(f_path) {
  let v = await git_history_delete("Jared-Grace", "love", f_path, ".");
  return v;
}
