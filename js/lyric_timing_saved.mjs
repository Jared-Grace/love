import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { greater_than } from "./greater_than.mjs";
export async function lyric_timing_saved(asked, held, duration, file_name) {
  arguments_assert(arguments, 4);
  ("$plain asked");
  ("$plain held");
  ("$plain duration");
  ("$plain file_name");
  ("Writes what has just been tapped to the disk of the machine serving this page, pulls it earlier by the tap lag, and says where it landed.");
  ("★ THE WHOLE READING OF THE ROW IS HANDED OVER, BECAUSE ALL OF IT SAYS WHICH FILE IS WRITTEN. The verses and the take are as much of the address as the chapter is, and sending only the chapter meant every sitting landed on the plain whole-chapter document: an evening tapped against the second arrangement of a psalm overwrote the first arrangement's times, silently, with the name of the song that was playing recorded inside the file it did not belong to.");
  ("WHAT IS WRITTEN FIRST IS WHAT WAS ACTUALLY TAPPED, and the lag is taken off afterwards by the command that exists for it. The two could be folded into one arithmetic here and the result would be identical, but then the same correction would be spelled in two places and could come to mean two things; and a lag somebody later decides was wrong can be reconsidered against a document that still records what the hand did.");
  ("A lag of nothing skips the second step rather than applying a shift of zero. Somebody who taps on the beat should not have their document rewritten to say the same thing it already said.");
  ("THE SONG'S NAME TRAVELS WITH THE TIMES RATHER THAN BEING FETCHED WHEN A VIDEO IS RENDERED. Saving and rendering are two presses that can be days apart, and in between a downloads folder collects more takes; a name looked up at the second press is a name looked up in a folder that has changed. Carried at the first, it is the name of the file that was actually playing while the hand was moving.");
  let lines = lyric_timing_lines_timed(held.starts, held.texts, duration);
  let f_name = fn_name("lyric_timing_save");
  let saved = await app_shared_api_named(f_name, [
    asked,
    duration,
    lines,
    file_name,
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
