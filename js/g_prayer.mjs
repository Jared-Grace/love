import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { g_prayer_address } from "./g_prayer_address.mjs";
export function g_prayer(petition) {
  "compose a prayer DRY: '<address>, <petition>' — the varied address (g_prayer_address) lives here in ONE place, so prayer text isn't repeated literals. g_thanks is the 'thank You for <thing>' special case built on this";
  let prayer = text_combine_multiple([g_prayer_address(), ", ", petition]);
  return prayer;
}
