import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { not } from "./not.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { lyric_timing_chosen_remember } from "./lyric_timing_chosen_remember.mjs";
import { lyric_timing_desk_load } from "./lyric_timing_desk_load.mjs";
export async function lyric_timing_song_chosen(desk, file_name) {
  arguments_assert(arguments, 2);
  ("$plain desk");
  ("$plain file_name");
  ("Works out which recording the song somebody has just chosen actually is, moves the row at the top onto it, and loads its document.");
  ("★ THE SONG IS THE ANSWER TO WHICH RECORDING IS BEING TIMED, AND ASKING THE PERSON A SECOND TIME IS ASKING THEM SOMETHING THEY HAVE ALREADY SAID. They pressed a file called Psalm_119_Qoph (2).wav; the stanza and the arrangement are in that choice, and the machine serving the page can read both off its own folder more reliably than anybody can retype them. Before this the screen kept only the name and went on addressing whatever the row said, which was the plain whole chapter every time - so tapping along to a take wrote over a different recording's times and no stanza could be opened at all.");
  ("THE ROW IS MOVED RATHER THAN QUIETLY BYPASSED, so the screen says what it is about to write. A page that addressed the right document while the row above it named a different psalm would be correct and unreadable, and the person would have no way of telling a good lookup from a bad one.");
  ("It is written down for next time on the way through, because choosing a song is now the press that settles the passage and that is the press worth remembering. Coming back to the screen and finding the last take already loaded is the whole point of remembering anything.");
  ("A SONG THE MACHINE DOES NOT RECOGNISE LEAVES THE ROW ALONE AND SAYS SO. It may be a song of another book, or named in a way the readers do not know, and moving the row to a guess would be worse than moving nothing: the person would see a passage named confidently and no sign that it was invented. Leaving it standing keeps the hand-chosen passage working exactly as it did.");
  let version = html_value_get(desk.inputs.version_input);
  let f_name = fn_name("lyric_timing_song_found");
  let found = await app_shared_api_named(f_name, [version, file_name]);
  let unknown = not(found.found);
  if (unknown) {
    let unsaid =
      "No psalm recording of that name in the downloads folder: " +
      file_name +
      ". Timing whatever the row above says.";
    html_text_content_set(desk.told, unsaid);
    return found;
  }
  let chosen = desk.inputs.chosen;
  chosen.book_code = found.book_code;
  chosen.chapter_number = found.chapter_number;
  chosen.verse_first = found.verse_first;
  chosen.verse_last = found.verse_last;
  chosen.mark = found.mark;
  desk.inputs.passage_show();
  lyric_timing_chosen_remember(chosen);
  await lyric_timing_desk_load(desk);
  return found;
}
