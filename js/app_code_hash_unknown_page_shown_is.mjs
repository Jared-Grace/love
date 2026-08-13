import { app_code_hash_fields } from "./app_code_hash_fields.mjs";
import { app_shared_hash_fields_unknown_page_shown_is } from "./app_shared_hash_fields_unknown_page_shown_is.mjs";
export function app_code_hash_unknown_page_shown_is(context, hash) {
  "What the code app puts in front of its own work: did the link name a lesson, a screen, or a place in a quiz it cannot make sense of, and has the reader been told so and offered the near ones.";
  let fields = app_code_hash_fields();
  let shown = app_shared_hash_fields_unknown_page_shown_is(
    context,
    hash,
    fields,
  );
  return shown;
}
