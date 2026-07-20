import { g_struggles } from "./g_struggles.mjs";
import { g_doubts } from "./g_doubts.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
export function g_conversation_generate() {
  "PLACEHOLDER generator for an unbeliever NPC's conversation object: { turns, converts }. one turn per opener kind (gospel objection, how-are-you struggle, believe doubt), each = { kind, concern, correct:{reference,text}, wrong:{reference,text}, prayer_text }. prayer_text is what the closing prayer assembles into 'God, please <prayer_text>, Amen'. converts=true for now. REAL per-chapter content is generated + reviewed elsewhere — this is scaffolding so the flow runs";
  let off = g_verses_off_topic();
  function off_topic() {
    let w = list_random_item(off);
    return w;
  }
  let gospel_turn = {
    kind: "gospel_share_objection",
    concern: "Honestly, I don't see why I'd need God — my life is fine as it is.",
    correct: {
      reference: "Romans 5:8",
      text: "But God proves His own love for us in this: While we were still sinners, Christ died for us.",
    },
    wrong: off_topic(),
    prayer_text: "open their heart to the good news",
  };
  let struggle = list_random_item(g_struggles());
  let how_turn = {
    kind: "how_r_u",
    concern: property_get(struggle, "concern"),
    correct: property_get(struggle, "correct"),
    wrong: off_topic(),
    prayer_text: "comfort them and carry their burden",
  };
  let doubt = list_random_item(g_doubts());
  let believe_turn = {
    kind: "believe",
    concern: property_get(doubt, "concern"),
    correct: property_get(doubt, "correct"),
    wrong: off_topic(),
    prayer_text: "settle their doubts and help them trust You",
  };
  let conversation = {
    turns: [gospel_turn, how_turn, believe_turn],
    converts: true,
  };
  return conversation;
}
