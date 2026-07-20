import { text_combine } from "./text_combine.mjs";
import { g_prayer } from "./g_prayer.mjs";
export function g_thanks(thing) {
  "compose a thanksgiving prayer DRY: '<address>, thank You for <thing>' — the 'thank You for <thing>' special case of g_prayer (which owns the varied address), so the ~100 gratitude prayers aren't repeated literals";
  let prayer = g_prayer(text_combine("thank You for ", thing));
  return prayer;
}
