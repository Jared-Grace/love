import { command_line } from "../../../love/public/src/command_line.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
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
