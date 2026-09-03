import { arguments_assert } from "./arguments_assert.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { app_shared_path_stage_served } from "./app_shared_path_stage_served.mjs";
export function app_shared_path_dev_served(app_name) {
  "$plain app_name";
  "the path an app's dev page is FETCHED at, worked out from where that page is written.";
  "It is the written path and the fetched path being different that this exists for. Handing the written path to a browser names a folder inside a folder, and what comes back is not a page but a refusal - and a browser handed a bare repo path refuses before it even asks, which is how this was found.";
  "Taking the front off is not done here. Both stages take the same thing off in the same way, so it is asked for rather than spelled, and the one place it is spelled is the one place to change when the folders move again.";
  arguments_assert(arguments, 1);
  let relative = html_name_to_path_dev(app_name);
  let served = app_shared_path_stage_served(relative);
  return served;
}
