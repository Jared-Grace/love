import { g_arc_assert } from "./g_arc_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_person } from "./g_arc_person.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
export async function g_arc_person_assert(index, arc, passages) {
  "Prove one person's written arc obeys both the rules it was written under and the length the pool gave that person.";
  "THE WHOLE OF WHAT MAKES AN ARC KEEPABLE, asked in one place because it is asked in two: at the door of the store, before an arc is written in, and again over everything already stored. Split between them, a rule added at the door would leave every arc written before it unasked, and a rule added to the gate would let the store go on taking what the gate is about to refuse.";
  "The length is asked here rather than inside the rules check, because the rules are about an arc alone and this is about an arc against the person it was written for - the same arc is correct for one person and too long for another.";
  let counts = g_arc_assert(arc, passages);
  let turns = property_get(counts, "turns");
  let person = await g_arc_person(index);
  let turns_wanted = property_get(person, "turns");
  json_equal_assert_json(turns, turns_wanted, {
    index,
    hint: "a person's arc is exactly as many turns long as the pool gave them, because a player meets them that many times and no more - a shorter arc runs out mid-game and a longer one holds turns nobody reaches",
  });
  return counts;
}
