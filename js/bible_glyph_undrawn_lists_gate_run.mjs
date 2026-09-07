import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_glyph_undrawn_wanted } from "./bible_glyph_undrawn_wanted.mjs";
import { bible_glyph_undrawn_deliberate } from "./bible_glyph_undrawn_deliberate.mjs";
import { bible_glyph_undrawn_sentence_decides } from "./bible_glyph_undrawn_sentence_decides.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_undrawn_lists_gate_run() {
  "Checks that the three lists of undrawn words stay disjoint from each other and from every word a root table has actually seated a picture on.";
  "THE THREE LISTS ARE THREE ANSWERS TO ONE QUESTION AND A WORD MAY ONLY GIVE ONE OF THEM. One list says no picture belongs, one says no single mark can be honest because the sentence decides, and one says a picture is wanted and nobody has chosen it. A number sitting in two of them at once is not a duplicate record, it is two contradictory decisions about the same word, and whichever a reader opens first is the one they believe.";
  "THE SECOND CHECK IS THE ONE THAT WAS ALREADY NEEDED. The wanted list said of twenty nine words that nothing was seated under them, and then those twenty nine were seated, and the sentence stayed on the page for as long as it took somebody to notice. Nothing went red, because a claim about what is missing is exactly the claim that is not tested by the thing it is about. Asking the root tables directly is what turns that from a thing to remember into a thing that cannot be got wrong.";
  "IT ASKS BOTH ROOT TABLES RATHER THAN CLAIMING WHICH LIST IS WHICH TESTAMENT. A Strong's number belongs to one testament, and the undrawn lists do not record which one, so a gate that paired each list with a testament would be asserting something no data backs. Walking both tables asserts nothing. The price is that a Hebrew number and a Greek number that happen to spell the same digits would be reported as a collision that is not one - so every report names the testament and the root it found, which makes that case obvious to read rather than hidden. AN ENTRY MAY NAME ITS OWN ROOT, and when it does the seat has to match that root as well as the number, which settles the case for good. The two older lists already carry a root on every entry, so the field is not a new idea; the escape is only needed by a number two testaments both spell, and it is a red gate that asks for it rather than a rule somebody has to remember.";
  "IT PASSES AT ZERO AND ALWAYS SHOULD. Both checks were clean the day it was written, so there is no baseline and none is wanted. A gate that starts at zero is the only kind that can honestly refuse the first offender.";
  let lists = [
    {
      fn: fn_name("bible_glyph_undrawn_wanted"),
      rows: bible_glyph_undrawn_wanted(),
    },
    {
      fn: fn_name("bible_glyph_undrawn_deliberate"),
      rows: bible_glyph_undrawn_deliberate(),
    },
    {
      fn: fn_name("bible_glyph_undrawn_sentence_decides"),
      rows: bible_glyph_undrawn_sentence_decides(),
    },
  ];
  let seated = {};
  let testaments = ebible_book_testaments();
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      for (let word of root.words) {
        property_set(seated, word.strong, {
          testament_name,
          root: root.root,
          glyph: word.glyph,
        });
      }
    }
  }
  let claimed = {};
  let clashes = [];
  let drawn = [];
  let entries = 0;
  for (let list of lists) {
    for (let row of list.rows) {
      entries = add(entries, 1);
      let strong = row.strong;
      let twice = property_exists(claimed, strong);
      if (twice) {
        let first = property_get(claimed, strong);
        list_add(clashes, {
          strong,
          gloss: row.gloss,
          said_first: first,
          said_again: list.fn,
        });
      }
      property_set(claimed, strong, list.fn);
      let already = property_exists(seated, strong);
      if (already) {
        let seat = property_get(seated, strong);
        let named = property_exists(row, "root");
        let other = named && not(equal(row.root, seat.root));
        if (other) {
          continue;
        }
        list_add(drawn, {
          strong,
          gloss: row.gloss,
          undrawn_in: list.fn,
          seated: seat,
        });
      }
    }
  }
  let no_clash = list_empty_is(clashes);
  assert_json(no_clash, {
    clashes,
    hint: "these Strong's numbers are listed as undrawn twice, which records two different decisions about one word - keep the entry in the list whose test the word actually meets and delete the other",
  });
  let none_drawn = list_empty_is(drawn);
  let table_name = fn_name("bible_glyph_roots_hebrew");
  assert_json(none_drawn, {
    drawn,
    hint: text_combine_multiple([
      "these Strong's numbers are listed as undrawn and a root table has already seated a picture on them, so the list is telling a reader something that stopped being true - delete the entry, or take the seat out of ",
      table_name,
      " if the seat is the thing that is wrong",
    ]),
  });
  let r = {
    lists: lists.length,
    entries,
    tables: testaments.length,
  };
  return r;
}
