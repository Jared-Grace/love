import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_read_help_text(r6) {
  arguments_assert(arguments, 1);
  let hash = property_get(r6, "hash");
  let count_status = property_get(r6, "count_status");
  let content = property_get(r6, "content");
  let bar = property_get(r6, "bar");
  let t = property_get(r6, "t");
  let max = property_get(r6, "max");
  let help_text = property_get(r6, "help_text");
  return {
    hash,
    count_status,
    content,
    bar,
    t,
    max,
    help_text,
  };
}
