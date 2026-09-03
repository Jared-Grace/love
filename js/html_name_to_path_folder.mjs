import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_web_join } from "./folder_web_join.mjs";
export function html_name_to_path_folder(folder, name, file_name_get) {
  "Where a page for one app at one stage is written, worked out from the stage's folder and the app's name.";
  "The stages sit beside the folder people are served from rather than inside it, so a page is joined onto the roof over all three and not onto the served one. It was joined onto the served one until 2026-09-03, which was right for as long as the working stages were rooms inside it.";
  "What that left behind after they moved out was silent and had two halves. A page was written to a folder nothing serves and nothing had been told to ignore, so the page people opened went on being whatever the move had carried over, dated the day before and never replaced; and the next sweep of the tree would have committed a whole build of every app, which is how this repo came by three hundred and sixty megabytes of history once already.";
  arguments_assert(arguments, 3);
  let file_name = file_name_get(name);
  let joined = path_join([folder, file_name]);
  let file_path = folder_web_join(joined);
  return file_path;
}
