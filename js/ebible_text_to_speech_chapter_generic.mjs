import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
export async function ebible_text_to_speech_chapter_generic(
  bible_folder,
  verses,
  chapter_code,
) {
  let text = list_map_property_join_space(verses, "text");
  let f = bible_audio_folder(bible_folder, chapter_code);
  await text_to_speech({
    text: text,
    path_output: f,
  });
}
