import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_arc_lines_moved } from "./g_arc_lines_moved.mjs";
import { g_arc_moved_by_turn } from "./g_arc_moved_by_turn.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { add } from "./add.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { list_add } from "./list_add.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
import { g_arc_review_turn_card } from "./g_arc_review_turn_card.mjs";
import { g_arc_review_notes_person } from "./g_arc_review_notes_person.mjs";
import { list_size } from "./list_size.mjs";
import { g_arc_review_notes_turn } from "./g_arc_review_notes_turn.mjs";
export function g_arc_review_person_cards(
  entry,
  passages,
  notes,
  nickname,
  gender,
  base,
) {
  "$plain nickname";
  "$plain gender";
  "One written arc gathered for a reviewer: who the person is, every turn of theirs with its Scripture and its standing notes, and what has moved in it since the last older copy of it.";
  "THE NICKNAME TRAVELS WITH THE ARC BECAUSE FILING A NOTE ASKS FOR IT. The store addresses a person by number and the door a person files through asks for the name, so a screen holding only the number would have to turn one into the other itself.";
  "WHO THE PERSON IS COMES IN RATHER THAN BEING LOOKED UP HERE, and that is a fact about cost rather than a taste. Both their name and their gender are answered by dealing the whole cast, and dealing the cast counts every written sermon - so asking for one person, twice, once per person, read the entire sermon supply six times to draw a chapter of three. Handed in, it is read twice for the chapter however many people are in it.";
  "THE COUNT IS OF EVERY NOTE FILED AGAINST THEM AND NOT OF THE ONES DRAWN. It is there so a reviewer coming back can see which arcs they have already been through, and an arc whose notes point at turns it no longer has is exactly the one that must not read as untouched.";
  "A NOTE THAT IS NOBODY'S TURN IS CARRIED SEPARATELY, under turn nought, which is the store's own address for a fault in the person rather than in a line. Left in with the turns it would be drawn under whichever line came first and read as being about that line.";
  "THE FIELDS ARE WALKED RATHER THAN NAMED, from the one source the writing of an arc is built from. A field renamed there is renamed here in the same breath; spelled out here, this would go on looking for a field nothing writes any more and show it empty.";
  "WHETHER THEY ARE A MAN OR A WOMAN TRAVELS WITH THEM, because the screen draws their own words in the game's colour for their gender and a screen holding only a number could not know which colour that is. It comes from the deal and never from anything worked out alongside it: the deck settled every person's gender before the arc was written, so a second opinion would disagree with the arc's own facts for about half the pool with nothing going red.";
  "WHAT KIND OF THING EACH FIELD IS TRAVELS WITH ITS VALUE, so the screen drawing it never has to know that a trouble is somebody speaking and an occupation is not. The whole field is read here rather than only its name, which is what carries the kind along; a screen deciding that for itself would be a second list of the field names, kept by hand, drifting.";
  "THE OLDER COPY COMES IN NAMED, and no older copy at all is null rather than an empty arc. An arc with nothing behind it is not an arc that said nothing, and comparing against an empty one would mark every line of it as new - which is the whole arc shouting, on exactly the reading where none of it has been judged yet and the shouting means nothing.";
  "THE NAME FOR WHERE IT CAME FROM IS PASSED STRAIGHT OUT, because what the page must say about the moved lines depends on it. Moved since you read it and moved since the backup was taken are different claims, and a page told only that there is a difference would have to pick one of them and be wrong half the time.";
  arguments_assert(arguments, 6);
  let index = property_get(entry, "index");
  let arc = property_get(entry, "arc");
  let base_arc = property_get(base, "arc");
  let base_source = property_get(base, "source");
  let older = not_equal(base_arc, null);
  let by_turn = {};
  let moved_count = 0;
  if (older) {
    let moved = g_arc_lines_moved(base_arc, arc);
    by_turn = g_arc_moved_by_turn(arc, moved);
    let changed = property_list_size(moved, "changed");
    let vanished = property_list_size(moved, "vanished");
    let appeared = property_list_size(moved, "appeared");
    let left = add(changed, vanished);
    moved_count = add(left, appeared);
  }
  let person_moved = property_or_null(by_turn, "0");
  let untouched = equal(person_moved, null);
  if (untouched) {
    person_moved = {};
  }
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
    let number = property_get(one, "number");
    let key = String(number);
    let turn_moved = property_or_null(by_turn, key);
    let still = equal(turn_moved, null);
    if (still) {
      turn_moved = {};
    }
    let card = g_arc_review_turn_card(one, passages, notes, index, turn_moved);
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
    base_source,
    moved_count,
    person_moved,
    turns,
  };
  return r;
}
