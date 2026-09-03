import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
export function folder_public_latest() {
  "The folder an app's whole build is written into and checked at, before any of it is copied into the one people see, said once here so that nothing else spells it.";
  "Its neighbour names the working stage this same way and has done for a long time. This one had no name at all, and three separate places built the path out of the folder and the word themselves. That is the shape a folder move goes wrong in: every place that asks by name follows the move, and every place that spelled it stays behind, and the two disagree without anything going red.";
  "Nothing about where it sits is decided here. It is the public folder and the word for this stage, which is what it has always been - so this can be introduced on its own and prove it changed nothing, and wherever it ends up living is one edit afterwards rather than three.";
  arguments_assert(arguments, 0);
  let f_path = app_shared_name_latest_text();
  let folder = folder_public_join(f_path);
  return folder;
}
