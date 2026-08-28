import { arguments_assert } from "./arguments_assert.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { bible_usfm_version_withheld_why_or_null } from "./bible_usfm_version_withheld_why_or_null.mjs";
export async function bible_usfm_version_text_clipboard_copy_withheld(
  text,
  version,
) {
  "$plain text";
  "$plain version";
  "Writing put on the clipboard and handed back as well, and beside it the reason the bible it came from is held back from readers, where there is one.";
  "THE WRITING IS HANDED BACK AND NOT ONLY COPIED, because a clipboard cannot be read back to check. A command that copies and says nothing is indistinguishable from one that copied nothing at all.";
  "The warning travels with the copy rather than being left on a list somewhere. A passage is copied once and pasted somewhere this repo will never see again, so the moment of copying is the last moment anybody can be told anything about it at all, and the shelf carries translations that hand back the wrong passage in good English.";
  arguments_assert(arguments, 2);
  await clipboard_copy(text);
  let withheld = bible_usfm_version_withheld_why_or_null(version);
  let copied = {
    text,
    withheld,
  };
  return copied;
}
