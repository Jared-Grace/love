import { g_npc_gender } from "./g_npc_gender.mjs";
import { g_arc_review_notes_person } from "./g_arc_review_notes_person.mjs";
import { list_size } from "./list_size.mjs";
import { g_arc_review_notes_turn } from "./g_arc_review_notes_turn.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
import { g_arc_review_turn_card } from "./g_arc_review_turn_card.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_review_person_cards(entry, passages, notes) {
  "One written arc gathered for a reviewer: who the person is, and every turn of theirs with its Scripture and its standing notes.";
  "THE NICKNAME TRAVELS WITH THE ARC BECAUSE FILING A NOTE ASKS FOR IT. The store addresses a person by number and the door a person files through asks for the name, so a screen holding only the number would have to turn one into the other itself - and the turning is already done in one place, for the whole pool at once, because a name depends on who came before it.";
  "THE COUNT IS OF EVERY NOTE FILED AGAINST THEM AND NOT OF THE ONES DRAWN. It is there so a reviewer coming back can see which arcs they have already been through, and an arc whose notes point at turns it no longer has is exactly the one that must not read as untouched.";
  "A NOTE THAT IS NOBODY'S TURN IS CARRIED SEPARATELY, under turn nought, which is the store's own address for a fault in the person rather than in a line. Left in with the turns it would be drawn under whichever line came first and read as being about that line.";
  "THE FIELDS ARE WALKED RATHER THAN NAMED, from the one source the writing of an arc is built from. A field renamed there is renamed here in the same breath; spelled out here, this would go on looking for a field nothing writes any more and show it empty.";
  "WHETHER THEY ARE A MAN OR A WOMAN TRAVELS WITH THEM, because the screen draws their own words in the game's colour for their gender and a screen asking for that itself would be asking the whole cast to be dealt a second time for a person it has already gathered. It is read off the deal like their name, and for the same reason: the deck settled it before the arc was written, so anything working it out alongside would disagree with the arc's own facts.";
  "WHAT KIND OF THING EACH FIELD IS TRAVELS WITH ITS VALUE, so the screen drawing it never has to know that a trouble is somebody speaking and an occupation is not. The whole field is read here rather than only its name, which is what carries the kind along; a screen deciding that for itself would be a second list of the field names, kept by hand, drifting.";
  arguments_assert(arguments, 3);
  let index = property_get(entry, "index");
  let arc = property_get(entry, "arc");
  let nickname = await g_npc_nickname(index);
  let gender = await g_npc_gender(index);
  let described = g_arc_answer_fields();
  let chosen_fields = property_get(described, "person");
  let fields = [];
  for (let one_field of chosen_fields) {
    let name = property_get(one_field, "name");
    let shape = property_get(one_field, "shape");
    let value = property_get(arc, name);
    list_add(fields, {
      name,
      value,
      shape,
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
    gender,
    fields,
    notes_count,
    person_notes,
    turns,
  };
  return r;
}
