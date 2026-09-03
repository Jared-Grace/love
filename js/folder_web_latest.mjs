import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { folder_web_join } from "./folder_web_join.mjs";
export function folder_web_latest() {
  "The folder an app's whole build is written into and checked at, before any of it is copied into the one people see, said once here so that nothing else spells it.";
  "Its neighbour names the working stage this same way. This one had no name at all until the move that put both of them here, and three separate places built the path out of the folder and the word themselves. That is the shape a folder move goes wrong in: every place that asks by name follows the move, and every place that spelled it stays behind, and the two disagree without anything going red.";
  "It sits beside the folder people are served from rather than inside it. Inside it, everything checked here was also being sent to the live site, and the settings that hold the working stage back never named this one - so every app's checked build was public whether or not it had been approved. Beside it, only what has been copied across is sent, which is the whole of what the copying step was for.";
  "The cost of that, so it is written down rather than discovered: the address this stage is opened at is not a link from anywhere, it is typed. It answered before only because this folder happened to sit under the one served whole. The serving now names it, which is what keeps that address alive here; nothing keeps it alive on the live site, and nothing is meant to.";
  arguments_assert(arguments, 0);
  let f_path = app_shared_name_latest_text();
  let folder = folder_web_join(f_path);
  return folder;
}
