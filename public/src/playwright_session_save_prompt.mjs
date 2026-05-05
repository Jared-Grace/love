import { folder_secret_join_json } from "../../../love/public/src/folder_secret_join_json.mjs";
import { command_line_read } from "../../../love/public/src/command_line_read.mjs";
export async function playwright_session_save_prompt(
  session_name,
  context,
  browser,
) {
  let answer = await command_line_read(
    "Press enter to save sesssion and close the browser",
  );
  let path = folder_secret_join_json(session_name);
  await context.storageState({
    path,
  });
  await browser.close();
}
