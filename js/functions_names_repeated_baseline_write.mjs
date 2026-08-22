import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_names_repeated } from "./functions_names_repeated.mjs";
import { functions_names_repeated_baseline_path } from "./functions_names_repeated_baseline_path.mjs";
export async function functions_names_repeated_baseline_write() {
  "Rewrite the record of the names saying a run of words twice running, from what the repo carries right now. For shrinking it after one has been renamed - never for blessing a new one, which is the single thing the gate exists to refuse.";
  ("A NAME IS RENAMED RATHER THAN RECORDED. Nothing here is load-bearing and nothing has left the repo: a name is a name, ",
    fn_name("function_rename"),
    " moves the definition and every caller together, and the whole repair is one command. So there is no case of the kind the app-boundary records have, where an offence is structural and must be written down instead of cleared.");
  let known = await functions_names_repeated();
  let path = functions_names_repeated_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    text_combine_multiple([
      "a name says a run of words twice running now and did not before - rename it with ",
      fn_name("function_rename"),
      " rather than recording it as known, because the doubling is what a command writes and never what a person would have chosen",
    ]),
  );
  let r = await baseline_known_write(known, path);
  return r;
}
