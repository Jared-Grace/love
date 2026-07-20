import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { g_prayer_address } from "./g_prayer_address.mjs";
export function g_thanks(thing) {
  "compose a thanksgiving prayer DRY: '<address>, thank You for <thing>' — the varied address (g_prayer_address) and the 'thank You for' opener live here in ONE place, so the ~100 gratitude prayers aren't repeated literals";
  let prayer = text_combine_multiple([g_prayer_address(), ", thank You for ", thing]);
  return prayer;
}
