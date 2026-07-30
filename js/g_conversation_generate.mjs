import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { g_struggles } from "./g_struggles.mjs";
import { g_doubts } from "./g_doubts.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
export function g_conversation_generate(pronouns) {
  ("PLACEHOLDER generator for an unbeliever NPC's conversation object: { turns, converts }. one turn per opener kind (gospel objection, how-are-you struggle, believe doubt), each = { kind, concern, correct:{reference,text}, wrong:{reference,text}, after_kind, prayer_text }. concern is the BEFORE (the need the NPC voices); after_kind names the NPC's AFTER — the warm response once the RIGHT verse lands, generated fresh by ",
    fn_name("g_response"),
    " (comfort for a met struggle, ponder for a doubt / the gospel to consider). REAL per-chapter content will carry an authored `after` STRING per prompt; the demo generates it by kind so the before/match/after mechanic runs without new static text. prayer_text is what the closing prayer assembles into 'God, please <prayer_text>, Amen'; it names the person with their own GENDERED pronouns (from `pronouns`, per npc.gender) — 'open HIS heart', 'comfort HER' — not neutral they/them. converts=true for now. this is scaffolding so the flow runs");
  let off = g_verses_off_topic();
  function off_topic() {
    let w = list_random_item(off);
    return w;
  }
  let value = property_get(pronouns, "possessive");
  let gospel_turn = {
    kind: "gospel_share_objection",
    concern:
      "Honestly, I don't see why I'd need God — my life is fine as it is.",
    correct: {
      reference: "Romans 5:8",
      text: "But God proves His own love for us in this: While we were still sinners, Christ died for us.",
    },
    wrong: off_topic(),
    after_kind: "ponder",
    prayer_text: text_combine_multiple([
      "open ",
      value,
      " heart to the good news",
    ]),
  };
  let list = g_struggles();
  let struggle = list_random_item(list);
  let value2 = property_get(pronouns, "object");
  let value3 = property_get(pronouns, "possessive");
  let how_turn = {
    kind: "how_r_u",
    concern: property_get(struggle, "concern"),
    correct: property_get(struggle, "correct"),
    wrong: off_topic(),
    after_kind: "comfort",
    prayer_text: text_combine_multiple([
      "comfort ",
      value2,
      " and carry ",
      value3,
      " burden",
    ]),
  };
  let list2 = g_doubts();
  let doubt = list_random_item(list2);
  let value4 = property_get(pronouns, "possessive");
  let value5 = property_get(pronouns, "object");
  let believe_turn = {
    kind: "believe",
    concern: property_get(doubt, "concern"),
    correct: property_get(doubt, "correct"),
    wrong: off_topic(),
    after_kind: "ponder",
    prayer_text: text_combine_multiple([
      "settle ",
      value4,
      " doubts and help ",
      value5,
      " trust You",
    ]),
  };
  let conversation = {
    turns: [gospel_turn, how_turn, believe_turn],
    converts: true,
  };
  return conversation;
}
