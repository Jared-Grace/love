import { text_to_speech } from "./text_to_speech.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_text_to_speech_chapter_generic(
  bible_folder,
  verses,
  chapter_code,
) {
  let mapped = list_map_property(verses, "text");
  let text = list_join_space(mapped);
  let f = bible_audio_folder(bible_folder, chapter_code);
  await text_to_speech({
    text: text,
    path_output: f,
  });
}
