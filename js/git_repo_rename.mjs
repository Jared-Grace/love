import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_repo_rename(owner, from, to) {
  let stdout = await command_line(
    text_combine_multiple([
      "gh repo rename ",
      to,
      " --repo ",
      owner,
      "/",
      from,
    ]),
  );
  return stdout;
}
