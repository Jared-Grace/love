import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { g_prayer_address } from "./g_prayer_address.mjs";
export function g_thanks_discernment() {
  "a short prayer thanking God for the discernment He gave — spontaneously varied each time (like the NPC lines) so it reads freshly rather than a fixed string; the address is DRY via g_prayer_address (shared with all prayers)";
  let address = g_prayer_address();
  let thank = list_random_item(["thank You", "thank You so much", "I thank You"]);
  let gift = list_random_item([
    "for the discernment",
    "for leading me",
    "for showing me what to say",
    "for Your wisdom",
    "for guiding me",
  ]);
  let close = list_random_item(["Amen.", "Amen!", "In Jesus' name, amen."]);
  let prayer = text_combine_multiple([
    address,
    ", ",
    thank,
    " ",
    gift,
    ". ",
    close,
  ]);
  return prayer;
}
