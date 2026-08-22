import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_marks_free_for_groups } from "./bible_glyph_marks_free_for_groups.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { bible_glyph_marks_reserved } from "./bible_glyph_marks_reserved.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export function bible_glyph_marks_reserved_gate_run() {
  "Checks that every picture this Bible holds back is still held back - seated on no word and standing at no word edge anywhere in the written chapters.";
  "IT PASSES AT NOUGHT AND ALWAYS SHOULD. There is no baseline to ratchet and none is wanted: a reserved picture that has been spent is not a debt to be paid down over time, it is a decision that has been reversed by somebody who did not know they were reversing it. A gate that starts at nought is the only kind that can honestly refuse the first offender.";
  "WHAT IT REFUSES LOOKS LIKE ORDINARY GOOD WORK. Seating a word on a free picture is exactly what seating a word is; nothing about the act says the picture was being kept, and the picture that gets reached for is precisely the one nothing else has claimed. So the refusal has to come from a list rather than from judgement, and it has to arrive at the moment of the seating rather than at the moment a group needs the picture and finds it gone.";
  "A RESERVED NAME MUST BE A REAL PICTURE, which is the other half of the check and the half a list alone cannot keep. A name misspelled here reserves nothing at all and reads exactly like a name being honoured - the list is short, nobody re-reads it, and the picture it was meant to protect is free for anybody. So the name is looked for in the vocabulary and its absence fails as loudly as its use.";
  "IT COUNTS WHAT WAS FREE beside the verdict. The reading underneath walks both root tables and every written chapter, and a run that stopped reaching them would report every picture in the vocabulary as free - which is this gate passing while measuring nothing, and it is the shape of failure this whole family has already taken once.";
  arguments_assert(arguments, 0);
  let reading = bible_glyph_marks_free_for_groups();
  let edges_count = property_get(reading, "edges_count");
  assert_json(edges_count, {
    reading,
    hint: "no word anywhere in the tables or the written chapters was found to have a picture at either end, which no picture Bible can be true of - the walk has stopped reaching its sources, and every reserved picture is being reported as safe without being looked at",
  });
  let free = property_get(reading, "free");
  let free_names = [];
  for (let entry of free) {
    let item = property_get(entry, "name");
    list_add(free_names, item);
  }
  let characters = bible_glyph_characters();
  let known = [];
  for (let character of characters) {
    let item2 = property_get(character, "name");
    list_add(known, item2);
  }
  let reserved = bible_glyph_marks_reserved();
  let spent = [];
  for (let entry of reserved) {
    let name = property_get(entry, "name");
    let real = list_includes(known, name);
    assert_json(real, {
      name,
      hint: "this picture is written down as reserved and the vocabulary has no picture by that name, so the reservation protects nothing - correct the spelling, or drop the entry if the picture is gone",
    });
    let still_free = list_includes(free_names, name);
    if (not(still_free)) {
      list_add(spent, name);
    }
  }
  let none = list_empty_is(spent);
  assert_json(none, {
    spent,
    hint: "these pictures are held back on purpose and a word has now been seated on one of them, or a chapter has written one at the end or the start of a word - move that word onto a picture that is not reserved, or take the picture off the reserved list and say in its place why the reason for holding it no longer stands",
  });
  let r = {
    reserved: list_size(reserved),
    free: list_size(free),
    edges: edges_count,
  };
  return r;
}
