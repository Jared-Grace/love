import { text_combine } from "./text_combine.mjs";
import { g_prayer } from "./g_prayer.mjs";
export function g_prayer_petition(petition) {
  "compose a petition prayer DRY: '<address>, please <petition>, Amen' — e.g. petition 'comfort them in their grief' → 'God, please comfort them in their grief, Amen'. builds on g_prayer (the varied address); this is the shape a conversation turn's `prayer_text` becomes in the closing prayer";
  let asked = g_prayer(text_combine("please ", petition));
  let full = text_combine(asked, ", Amen");
  return full;
}
