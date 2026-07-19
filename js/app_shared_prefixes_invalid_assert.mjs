import { app_shared_prefixes_invalid } from "./app_shared_prefixes_invalid.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_shared_prefixes_invalid_assert() {
  "QA gate primitive: throws when any app_<part>_ prefix is neither a real app nor an allowed bucket — wire into the deploy path so a squatter blocks firebase";
  let groups = await app_shared_prefixes_invalid();
  list_empty_is_assert_json(groups, {
    hint: "every app_<part>_ prefix must be a real app or the shared bucket — migrate these squatters to app_shared_* before deploying",
  });
}
