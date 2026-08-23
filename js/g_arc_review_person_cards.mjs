import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
import { g_arc_review_turn_card } from "./g_arc_review_turn_card.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_review_person_cards(entry, passages, notes) {
  "One written arc gathered for a reviewer: who the person is, and every turn of theirs with its Scripture and its standing notes.";
  "THE NICKNAME TRAVELS WITH THE ARC BECAUSE FILING A NOTE ASKS FOR IT. The store addresses a person by number and the door a person files through asks for the name, so a screen holding only the number would have to turn one into the other itself - and the turning is already done in one place, for the whole pool at once, because a name depends on who came before it.";
  "THE FIELDS ARE WALKED RATHER THAN NAMED, from the one source the writing of an arc is built from. A field renamed there is renamed here in the same breath; spelled out here, this would go on looking for a field nothing writes any more and show it empty.";
  arguments_assert(arguments, 3);
  let index = property_get(entry, "index");
  let arc = property_get(entry, "arc");
  let nickname = await g_npc_nickname(index);
  let names = g_arc_answer_field_names("person");
  let fields = [];
  for (let name of names) {
    let value = property_get(arc, name);
    list_add(fields, {
      name,
      value,
    });
  }
  let numbered = g_arc_turns_numbered(arc);
  let turns = [];
  for (let one of numbered) {
    let card = g_arc_review_turn_card(one, passages, notes, index);
    list_add(turns, card);
  }
  let theirs = g_arc_review_notes_person(notes, index);
  let notes_count = list_size(theirs);
  let person_notes = g_arc_review_notes_turn(notes, index, 0);
  let r = {
    index,
    nickname,
    fields,
    notes_count,
    person_notes,
    turns,
  };
  return r;
}
