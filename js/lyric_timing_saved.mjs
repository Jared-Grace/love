import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { fn_name } from "./fn_name.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function lyric_timing_saved(asked, held, duration) {
  arguments_assert(arguments, 3);
  ("$plain asked");
  ("$plain held");
  ("$plain duration");
  ("Writes what has just been tapped to the disk of the machine serving this page, pulls it earlier by the tap lag, and says where it landed.");
  ("WHAT IS WRITTEN FIRST IS WHAT WAS ACTUALLY TAPPED, and the lag is taken off afterwards by the command that exists for it. The two could be folded into one arithmetic here and the result would be identical, but then the same correction would be spelled in two places and could come to mean two things; and a lag somebody later decides was wrong can be reconsidered against a document that still records what the hand did.");
  ("A lag of nothing skips the second step rather than applying a shift of zero. Somebody who taps on the beat should not have their document rewritten to say the same thing it already said.");
  let lines = lyric_timing_lines_timed(held.starts, held.texts, duration);
  let f_name = fn_name("lyric_timing_save");
  let saved = await app_shared_api_named(f_name, [
    asked.version,
    asked.book_code,
    asked.chapter_number,
    duration,
    lines,
  ]);
  let earlier = number_from_text(asked.earlier_text);
  let lagged = greater_than(earlier, 0);
  if (lagged) {
    let f_name2 = fn_name("lyric_video_document_earlier");
    await app_shared_api_named(f_name2, [
      saved.path_document,
      asked.earlier_text,
    ]);
  }
  let r = saved.path_document;
  return r;
}
