import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { assert_message } from "./assert_message.mjs";
export function app_frozen_assert(name) {
  let names = apps_frozen_names();
  let allowed = list_includes_not(names, name);
  assert_message(
    allowed,
    "This app is on the frozen list, so it's kept safe from deletion (it shouldn't change in production). Would you like to remove it from apps_frozen() first, or delete a different app?",
  );
}
