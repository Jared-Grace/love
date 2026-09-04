import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_frame_sizes } from "./lyric_video_frame_sizes.mjs";
import { lyric_video_screen_room } from "./lyric_video_screen_room.mjs";
import { property_get } from "./property_get.mjs";
import { audio_words_timed_confidence_least } from "./audio_words_timed_confidence_least.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_audio_chunk_path } from "./bible_audio_chunk_path.mjs";
import { list_add } from "./list_add.mjs";
export function bible_audio_chapter_screens_timed_line_each(
  chunks,
  bible_folder,
  chapter_code,
) {
  arguments_assert(arguments, 3);
  let sizes = lyric_video_frame_sizes();
  let room = lyric_video_screen_room(sizes);
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let least = audio_words_timed_confidence_least();
  let long_orders = [];
  let pieces = [];
  function line_each(line, order) {
    let text = property_get(line, "text");
    let drawn = lyric_video_text_lines(text, pixels_across, font_size);
    let long = greater_than(drawn, lines_max);
    if (long) {
      let chunk = chunks[order];
      let number = property_get(chunk, "chunk");
      let audio = bible_audio_chunk_path(bible_folder, chapter_code, number);
      let piece = {
        audio: audio,
        text: text,
      };
      list_add(long_orders, order);
      list_add(pieces, piece);
    }
  }
  let r = {
    room,
    least,
    long_orders,
    pieces,
    line_each,
  };
  return r;
}
