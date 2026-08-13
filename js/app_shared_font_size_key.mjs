import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_shared_font_size_key() {
  "The word the size a reader chose is filed under on their device.";
  "Frozen. It is already written into browsers this repo will never see again, so a different word here does not move anybody's setting - it hides it, and they open at a size they turned down once with nothing anywhere saying why.";
  "One place spells it because three now ask for it: the one that reads this app's own, the one that writes it, and the one that reads it across from another app. Three spellings of a published word are three chances for one of them to stop matching the other two, and no reading of any single file would show it.";
  arguments_assert(arguments, 0);
  let key = text_frozen("font_size");
  return key;
}
