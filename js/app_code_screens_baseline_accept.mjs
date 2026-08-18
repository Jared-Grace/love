import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_screens_manifest_path_assert } from "./app_code_screens_manifest_path_assert.mjs";
import { app_code_screens_accepted_path } from "./app_code_screens_accepted_path.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
export async function app_code_screens_baseline_accept(current_path) {
  "take the manifest a crawl has just written, and after its changes have been read and accepted, keep it as the one every later crawl is compared against";
  "the accepting is its own command rather than a step of the check, because a check that replaced the baseline itself would report every change once and then agree with everything afterwards, whether anybody had read it or not. Reading the changes is a person's part, so the writing waits for a person to ask for it.";
  "it copies a manifest that already exists rather than crawling again, because a second crawl would answer about screens nobody has read - random content is drawn afresh every time, so the file accepted would not be the file judged";
  arguments_assert(arguments, 1);
  app_code_screens_manifest_path_assert(current_path);
  let baseline_path = app_code_screens_accepted_path();
  await file_copy_overwrite(current_path, baseline_path);
  let result = {
    from: current_path,
    to: baseline_path,
  };
  return result;
}
