import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { text_to_speech } from "../../../love/public/src/text_to_speech.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let verses = await ebible_verses(bible_folder, chapter_code);
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
  function lambda() {}
  let v2 = await file_temp(lambda);
  await text_to_speech({
    text: "test",
    path_output: "C:/test.wav",
  });
}
