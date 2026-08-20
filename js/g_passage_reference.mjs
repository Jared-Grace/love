import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { property_get } from "./property_get.mjs";
export function g_passage_reference(passage) {
  "How one written passage is cited: its book and chapter spelled out the way everybody writes one, a colon, then its verse numbers with commas between - 1 John 2:5,6.";
  "ONE SOURCE, because this spelling is written at one seam and read back at another. A prompt shows every passage under this citation and the answer copies one of them back, so the two have to agree character for character. Spelled twice, a comma that became a dash on one side alone would match nothing, and the reading call could not say so - it can only fail to find a passage that was named correctly.";
  "It is the reference alone, with no brackets around it. The brackets belong to the line the citation sits on, where they are the boundary between the citation and the Scripture after it; the answer copies out what is between them.";
  let chapter = property_get(passage, "chapter");
  let named = ebible_chapter_code_label(chapter);
  let joined = property_list_join_comma(passage, "verse_numbers");
  let reference = list_join_colon([named, joined]);
  return reference;
}
