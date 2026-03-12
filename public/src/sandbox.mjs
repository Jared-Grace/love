import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
export async function sandbox() {
  let stdout2 = await command_line_generic("dir", {});
  return stdout2;
  let stdout = await command_line("cd data && dir");
  return stdout;
  let repo_name = "portfolio_qa";
  let joined = folder_previous_join(repo_name);
  let path = await folder_exists_ensure(joined);
  return joined;
}
