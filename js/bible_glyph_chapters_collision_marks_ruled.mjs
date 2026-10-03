import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_collision_marks_settled } from "./bible_glyph_collision_marks_settled.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_collision_mark_name } from "./bible_glyph_collision_mark_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_collision_marks_ruled() {
  "The collision walk's evidence with the marks a person has already ruled on folded in, so what is left undecided is only what nobody has read yet.";
  "THE WALK IS EVIDENCE AND THIS IS THE VERDICT, which is why they are two readings and not one. The walk asks the interlinear which of two roots stands in a verse and says plainly that it hands back evidence and never an edit; a ruling is a person disagreeing with that table after reading the verse, and folding it into the walk would make the walk's own account of itself untrue. Everything that consumes a verdict - the ratchet, and the command that splits a shared picture - asks this one instead.";
  "A RULING PAYS THE DEBT RATHER THAN WAIVING IT. It names one root per mark in the order the page draws them, so a ruled mark goes in beside the ones the interlinear decided by itself and the picture can still be split. An exemption that only cleared the gate would leave the split impossible and the gate would have stopped counting the thing it exists to count.";
  "IT CHECKS A RULING BEFORE TRUSTING IT, because a ruling is typed by hand into a file and the command that acts on it rewrites three thousand marks across the chapters. Two things are checked: that it names exactly as many roots as the page drew marks, since fewer or more cannot be paired by position, and that every root it names is one of the two actually sharing that picture, since a third name would redraw a mark as a word that was never in question. Both fail loudly here rather than quietly later.";
  "A RULING THAT NO LONGER ANSWERS ANYTHING IS NAMED AND NOT DROPPED. The interlinear is reread every run and a word may be retagged, so a mark ruled on by hand can become one the walk decides on its own - and then the ruling is a sentence about the past sitting in a file of present decisions. Saying so is what lets somebody take it out; dropping it silently is how a file of overrides grows into a file nobody dares touch.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let settled = await bible_glyph_collision_marks_settled();
  let decided = property_get(walk, "decided");
  let aligned = [];
  for (let entry of property_get(walk, "aligned")) {
    list_add(aligned, entry);
  }
  let ambiguous = [];
  let unseated = [];
  let ruled = [];
  let used = {};
  function pile_read(entries, pile) {
    for (let entry of entries) {
      let name = bible_glyph_collision_mark_name(entry);
      let ruling = property_get_or_null(settled, name);
      let unread = null_is(ruling);
      if (unread) {
        list_add(pile, entry);
        continue;
      }
      property_set(used, name, true);
      let roots = property_get(ruling, "roots");
      let drew = property_get(entry, "drew");
      let counted = list_size_equal(roots, drew);
      assert_json(counted, {
        name,
        roots,
        drew,
        hint: "a ruling names one root for every mark the page drew on that picture, in the order the page draws them, so a ruling of a different length cannot be paired to the marks by position - count the marks in the drawn verse again",
      });
      let sharers = property_get(entry, "sharers");
      for (let root_name of roots) {
        let shares = list_includes(sharers, root_name);
        assert_json(shares, {
          name,
          root_name,
          sharers,
          hint: "a ruling may only name one of the two roots that actually share this picture, because naming a third would redraw a mark as a word that was never in question here",
        });
      }
      let ruled_entry = {
        chapter_code: property_get(entry, "chapter_code"),
        verse_number: property_get(entry, "verse_number"),
        glyph: property_get(entry, "glyph"),
        drew,
        order: roots,
        wanted: drew,
        roots: list_unique_sorted(roots),
        sharers,
        reason: property_get(ruling, "reason"),
      };
      list_add(aligned, ruled_entry);
      list_add(ruled, ruled_entry);
    }
  }
  let value = property_get(walk, "ambiguous");
  pile_read(value, ambiguous);
  let value2 = property_get(walk, "unseated");
  pile_read(value2, unseated);
  let stale = [];
  for (let name of object_property_names(settled)) {
    let spent = property_exists(used, name);
    if (not(spent)) {
      list_add(stale, name);
    }
  }
  let r = {
    walked: property_get(walk, "walked"),
    decided,
    aligned,
    ambiguous,
    unseated,
    ruled,
    stale,
  };
  return r;
}
