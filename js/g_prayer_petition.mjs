import { text_combine } from "./text_combine.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_prayer } from "./g_prayer.mjs";
export function g_prayer_petition(petition) {
  ("compose a petition prayer DRY: address, ask, petition, closing — e.g. petition 'comfort them in their grief' becomes 'God, please comfort them in their grief, in Jesus' name, amen'. all three surrounding parts are drawn fresh (",
    fn_name("g_prayer_address"),
    ", ",
    fn_name("g_prayer_ask"),
    ", ",
    fn_name("g_prayer_closing"),
    "), so two petitions in a row never read the same. this is the shape a conversation turn's prayer_text becomes in the closing prayer. the ending used to be a fixed ', Amen' spelled here — the only capital Amen in the game, and the one prayer that always finished the same way; taking the shared closing fixed both at once");
  let ask = g_prayer_ask();
  let asked = g_prayer(text_combine(ask, petition));
  let closing = g_prayer_closing();
  let full = text_combine(asked, closing);
  return full;
}
