import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_name_tag_fire_joined_names_walked } from "./bible_glyph_chapters_name_tag_fire_joined_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_name_tag_fire_joined_baseline_path } from "./bible_glyph_chapters_name_tag_fire_joined_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_name_tag_fire_joined_gate_run() {
  "QA gate: no new picture Bible verse writes the name tag and the fire side by side where the English has a word between them.";
  "IT WATCHES A CHAPTER EATING ITS OWN ENGLISH. Deuteronomy four wrote the covenant of the LORD your God as three marks in a row, dropping the the and the your, and Deuteronomy eleven did the same thing thirty two verses running. A reader who does not know the language has only the drawn line, and a line with its glue eaten is not English at all - it is a list of pictures they must guess the joints of.";
  "THE PHRASE IS THE MEASURE BECAUSE THE CORPUS WRITES IT BOTH WAYS. Three attempts at a general crowding measure all confounded: seven glyphs are themselves function words so a chapter drawing its glue scored as one that ate it, a subject beside its verb has no glue to eat at all, and the identical pair is wrong in Deuteronomy and right in Genesis. No threshold separates those. One phrase the subject spells two ways does, and it needs no standard of mine anywhere in the judgment.";
  "MEASURED AGAINST THE RECORD RATHER THAN AGAINST NOUGHT, because the correct spelling is real. Genesis says the LORD God with nothing between the words and the pair is right there; so is the vocative O LORD God in Second Chronicles six and Second Samuel seven, and the LORD God of Hosts in Psalm eighty four. Twenty eight verses stood when this was built and every one of them was read against the English first. Six that were not correct - Leviticus four, Numbers ten, fifteen and twenty three - were repaired rather than recorded.";
  "The number handed back is how many verses were opened, not how many were wrong. Nothing wrong is what a good run says and it is also what a run that reached no chapter would say, and the count is the one part of the answer that falls in the second case.";
  arguments_assert(arguments, 0);
  let told = bible_glyph_chapters_name_tag_fire_joined_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_name_tag_fire_joined_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_name_tag_fire_joined_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these verses draw the name tag and the fire with nothing between them - open the English, and if it reads the LORD your God or the LORD his God then the chapter ate the word between them and the picture has to get it back",
    name_write,
  );
  return r;
}
