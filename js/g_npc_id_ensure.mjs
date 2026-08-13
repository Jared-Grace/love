import { g_npc_id_key } from "./g_npc_id_key.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function g_npc_id_ensure(npc) {
  "give a person an id if they have none, and leave alone the one they already have.";
  "WHY A PERSON NEEDS ONE. Everything remembered about a person - their picture, the cross drawn over a believer - is filed under where that person is standing. That works only while nobody walks: a step changes the address, so the drawers have to be emptied and refilled on every single step, and two people ever sent to one tile means the second takes over the first one's drawer and the first drags somebody else's picture about from then on. An id is the address that a step cannot change.";
  "THE ID IS THE TILE THEY WERE STANDING ON WHEN THEY FIRST GOT ONE, and that is a choice rather than an accident. It is unique, because two people are never on one tile. It is available, because a person has nothing else here that is theirs alone - the names are drawn from a short list and repeat. And it never changes afterwards, because it is written down once and then only read; a person who walks away from that tile keeps it, and somebody else standing there later does not get it, because they were given their own the first time they were asked.";
  "It is worth saying what it is NOT: the drawers themselves are kept in memory and drawn again every time the page opens, so nothing here is a migration of anything saved. The tile is borrowed as a word that is already unique, and for no other reason.";
  "Total and idempotent - asked of a person who has one it does nothing, so it may be asked of everybody every time the game is opened.";
  let key = g_npc_id_key();
  let held = property_get(npc, key);
  let none = undefined_is(held);
  if (none) {
    let id = g_coordinates_key(npc);
    property_set(npc, key, id);
  }
}
