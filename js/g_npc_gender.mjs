import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { list_get } from "./list_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
export async function g_npc_gender(index) {
  "Whether one person of the convert pool is a man or a woman, given their number.";
  "IT IS READ OFF THE DEAL AND NEVER DECIDED HERE, for the same reason their name is. The deck settles every person's gender before an arc is written and the prompt hands it over as a fact that must not be changed; anything working it out alongside the deal would disagree with it for about half the pool with nothing going red.";
  "THE WHOLE CAST IS DEALT TO ANSWER FOR ONE PERSON, and that cost is in the open rather than hidden behind a name that looks cheap. The deal is weighted, so who lands at any one position depends on every card drawn around it and a single person cannot be dealt alone.";
  "THE NUMBER IS MADE A NUMBER HERE, because this is one a person asks by hand and a command line hands every argument over as text.";
  let dealt = await g_npc_cast_dealt();
  let wanted = number_from_text(index);
  let profile = list_get(dealt, wanted);
  let gender = property_get(profile, "gender");
  return gender;
}
