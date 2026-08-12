import { not } from "./not.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { gloss_passage_words_misaligned } from "./gloss_passage_words_misaligned.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapter_words_misaligned(chapter_code, fn) {
  "Every passage of one authored gloss chapter whose word explanations have stopped lining up with the passage itself.";
  "A chapter nobody has authored yet has nothing to line up and comes back empty, the same answer a chapter authored correctly gives. That is on purpose: this asks whether what is there is right, and which passages are still waiting is a separate question with its own reader.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let none = {
      chapter_code,
      passages: 0,
      misaligned: [],
    };
    return none;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let misaligned = list_map_filter_null_not_is(
    passages,
    gloss_passage_words_misaligned,
  );
  let r = {
    chapter_code,
    passages: list_size(passages),
    misaligned,
  };
  return r;
}
