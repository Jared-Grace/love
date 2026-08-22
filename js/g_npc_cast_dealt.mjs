import { g_npc_pool_drawn } from "./g_npc_pool_drawn.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { g_profiles_dealt } from "./g_profiles_dealt.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { list_size } from "./list_size.mjs";
export async function g_npc_cast_dealt() {
  "Who every person of the convert pool is - one settled profile each, in pool order, dealt exactly as a real run deals them.";
  "THE PROFILE IS SETTLED BEFORE ANY ARC IS WRITTEN, and that is what makes it worth having a name of its own. A person's gender, age, house and past are dealt from a weighted deck; the prompt then hands them over as facts that must not be changed. So anything else that wants to know who somebody is - what to call them, whether the cast is balanced, whether an arc kept faith with its own facts - has to read the same deal rather than guess alongside it.";
  "THE WHOLE CAST IS DEALT AT ONCE BECAUSE THE DEAL IS WEIGHTED. Each card is drawn against who the cast is still short of, so who lands at any one position depends on every card drawn around it - ask for one person alone and the spread that decides who they are was never formed.";
  "IT IS THE SAME DEAL EVERY TIME, seeded on the dealer's own name, so a profile read here is the profile the prompt renders. Two dealers seeded differently would hand the same person two different sets of facts, and the arcs would disagree with the deck with nothing going red.";
  let pool = await g_npc_pool_drawn();
  let cast = list_size(pool);
  let deck = g_profiles();
  let deal_next = random_seed_generator_from_text(g_profiles_dealt.name);
  let dealt = g_profiles_dealt(deck, cast, deal_next);
  return dealt;
}
