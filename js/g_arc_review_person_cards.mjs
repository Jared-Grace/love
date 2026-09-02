import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_arc_lines_moved } from "./g_arc_lines_moved.mjs";
import { g_arc_moved_by_turn } from "./g_arc_moved_by_turn.mjs";
import { g_arc_moved_count } from "./g_arc_moved_count.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { g_arc_noted_held_by_turn } from "./g_arc_noted_held_by_turn.mjs";
import { g_arc_held_count } from "./g_arc_held_count.mjs";
import { g_arc_review_person_fields } from "./g_arc_review_person_fields.mjs";
import { g_arc_review_person_turn_cards } from "./g_arc_review_person_turn_cards.mjs";
import { g_arc_review_notes_person } from "./g_arc_review_notes_person.mjs";
import { list_size } from "./list_size.mjs";
import { g_arc_review_notes_turn } from "./g_arc_review_notes_turn.mjs";
export function g_arc_review_person_cards(
  entry,
  passages,
  notes,
  nickname,
  gender,
  { base, asked, approved_arc },
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
  "THE LINES THAT WERE ASKED ABOUT AND KEPT ARE WORKED OUT ONLY AGAINST THE COPY A REVISION REPLACED, and never against a reading or a backup. The addresses come from the one wave of notes that one revision answered, so they line up with that revision and with nothing else: against a reading taken since, they would mark a note as unanswered on a line the reader has already been shown the outcome of, and against the oldest backup they would name a wave from a day the backup knows nothing about. Both of those are the page telling somebody they were ignored when they were not.";
  "THE APPROVED COPY COMES IN SEPARATELY FROM THE ONE THE MARKS ARE MEASURED AGAINST, and it has to, because they answer different questions. The base answers what has moved since somebody last looked; the approved copy answers what has moved since somebody last said the wording was right. Those come apart the moment an arc is read again after being passed - the marks go quiet while lines the reviewer never approved sit in it unremarked.";
  "NO APPROVED COPY IS NULL AND NOT AN EMPTY ARC, for the same reason the base is. An arc nobody has passed has not been passed on nought lines, and compared against an empty one every line it holds would count as moved since an approval that never happened.";
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
    moved_count = g_arc_moved_count(moved);
  }
  let approved = not_equal(approved_arc, null);
  let approved_moved_count = 0;
  if (approved) {
    let approved_moved = g_arc_lines_moved(approved_arc, arc);
    approved_moved_count = g_arc_moved_count(approved_moved);
  }
  let person_moved = property_or_null(by_turn, "0");
  let untouched = equal(person_moved, null);
  if (untouched) {
    person_moved = {};
  }
  let replaced = equal(base_source, "previous");
  let held_by_turn = {};
  if (replaced) {
    held_by_turn = g_arc_noted_held_by_turn(arc, asked, by_turn);
  }
  let held_count = g_arc_held_count(held_by_turn);
  let person_held = property_or_null(held_by_turn, "0");
  let unasked = equal(person_held, null);
  if (unasked) {
    person_held = {};
  }
  let fields = g_arc_review_person_fields(arc);
  let turns = g_arc_review_person_turn_cards(
    arc,
    by_turn,
    held_by_turn,
    passages,
    notes,
    index,
  );
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
    approved,
    approved_moved_count,
    person_moved,
    held_count,
    person_held,
    turns,
  };
  return r;
}
