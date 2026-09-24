import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
export function app_shared_hash_restore_set(context, hash_restore) {
  arguments_assert(arguments, 2);
  ("read where the reader is out of the address now, before the first draw, and keep the reader so the back and forward button can read the address again when a step brings an older one back. The screen itself is filed on the step, so an app whose address holds nothing but the screen needs no reader at all");
  ("each app keeps its own reader, since only it knows which words its address holds and which screens cannot be drawn without them");
  object_merge_replace(context, {
    hash_restore,
  });
  hash_restore(context);
}
