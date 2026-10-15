import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_delete } from "./property_delete.mjs";
export function app_reply_verses_prepared_take(prepared_held, key) {
  "Hands back the verses fetched ahead of time under this name and forgets them, so the next press gets fresh ones; null when none are ready.";
  arguments_assert(arguments, 2);
  let ready = property_exists(prepared_held, key);
  if (not(ready)) {
    return null;
  }
  let texts = property_get(prepared_held, key);
  property_delete(prepared_held, key);
  return texts;
}
