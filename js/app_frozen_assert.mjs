import { apps_frozen_names_all } from "./apps_frozen_names_all.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { assert_message } from "./assert_message.mjs";
export function app_frozen_assert(name) {
  let names = apps_frozen_names_all();
  let allowed = list_includes_not(names, name);
  assert_message(
    allowed,
    "This app is on the frozen list, so its production assets are kept unchanged — no prod build, promote, or deletion. Would you like to remove it from apps_frozen() first, or act on a different app?",
  );
}
