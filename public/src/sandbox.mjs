import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
export async function sandbox() {
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  const vid_property = "VerseId";
  let verses = list_to_lookup(vid_property, words);
  function lambda2(value, property) {}
  each_object(verses, lambda2);
  return verses;
}
