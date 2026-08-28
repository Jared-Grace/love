import { arguments_assert } from "./arguments_assert.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { bible_usfm_version_withheld_why_or_null } from "./bible_usfm_version_withheld_why_or_null.mjs";
export async function bible_usfm_version_text_clipboard_copy_withheld(
  text,
  version,
) {
  arguments_assert(arguments, 2);
  await clipboard_copy(text);
  let withheld = bible_usfm_version_withheld_why_or_null(version);
  let copied = {
    text,
    withheld,
  };
  return copied;
}
