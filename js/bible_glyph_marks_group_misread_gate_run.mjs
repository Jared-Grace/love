import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_marks_group_misread } from "./bible_glyph_chapters_marks_group_misread.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_marks_group_misread_gate_run() {
  "Checks that no two neighbouring words in the written picture Bible put a group's opening picture and its closing picture either side of the gap between them.";
  "IT SHUTS A DOOR RATHER THAN WORKING A QUEUE. Every written chapter was clean the day this was written, so it passes at nought and always should; there is no baseline to ratchet and none is wanted. A gate that starts at nought is the only kind that can honestly refuse the first offender, and the first offender here is a verse that says something the text does not say.";
  "THE FAULT IT CATCHES IS INVISIBLE TO EVERY OTHER CHECK. Both words are spelled correctly, both are seated on the right pictures, the page draws exactly what the table says - and a reader who reads the gap as narrow gets a third word that nobody wrote. Nothing throws, nothing is missing, and the only evidence is the reading itself.";
  "IT IS EXPECTED TO GO RED ON A DAY THAT IS NOBODY'S MISTAKE, which is unusual for a gate and worth saying plainly. Seating a word on a new pair of pictures can turn a pair of neighbours that has stood in a chapter for months into a misreading, without that chapter being touched. The repair is then a choice between the seating and the wording, and this gate exists to make somebody make it rather than to blame whoever moved last.";
  "IT REFUSES A BLIND RUN AS WELL AS A DIRTY ONE. The reading it asks walks the chapters through the parser, and a walk that found no pictures at all would report no misreadings just as cheerfully as a clean one - that mistake was made once already on the reading underneath this. So a run that found no touching pairs anywhere fails here rather than passing, because there is no state of this Bible in which that is true.";
  let reading = bible_glyph_chapters_marks_group_misread();
  let touching_count = property_get(reading, "touching_count");
  assert_json(touching_count, {
    reading,
    hint: "no two words anywhere in the written chapters were found touching picture to picture, which no written Bible can be true of - the walk is reading the stored shorthand rather than the parsed chapters, so it is looking at text where the pictures should be and can never find a fault",
  });
  let misread = property_get(reading, "misread");
  let none = list_empty_is(misread);
  assert_json(none, {
    misread,
    hint: "the last picture of one word and the first of the next spell a group the tables give a meaning to, so a reader who reads the gap between them as narrow reads a word nobody wrote - either reword one of the two words, or seat that group on a different pair of pictures",
  });
  let r = {
    touching: touching_count,
    groups: property_get(reading, "groups"),
    opened: property_get(reading, "opened_count"),
    closed: property_get(reading, "closed_count"),
  };
  return r;
}
