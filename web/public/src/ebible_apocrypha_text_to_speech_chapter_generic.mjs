import { marker } from "../../../love/public/src/marker.mjs";
import { text_to_speech } from "../../../love/public/src/text_to_speech.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export async function ebible_apocrypha_text_to_speech_chapter_generic(
  verses,
  bible_folder,
  chapter_code,
) {
  marker("1");
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
  let f = bible_audio_folder(bible_folder, chapter_code);
  await text_to_speech({
    text: text,
    path_output: f,
  });
}
