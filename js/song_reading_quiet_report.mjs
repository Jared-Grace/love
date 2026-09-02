import { arguments_assert } from "./arguments_assert.mjs";
import { json_extension } from "./json_extension.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { song_reading_quiet_read } from "./song_reading_quiet_read.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
export async function song_reading_quiet_report(song_name, bible_folder_usual) {
  "$plain song_name";
  "$plain bible_folder_usual";
  "Opens the reading already filed for a song and hands back every passage the counting heard nothing at, with the lines that rest on it and the words the usual bible says there, so the quiet heap can be read from a command line instead of from a script somebody has to write first.";
  "IT READS THE FILED READING RATHER THAN TAKING ONE, BECAUSE THE READING IS THE EXPENSIVE HALF AND IT IS ALREADY ON DISK. Reading a song of ninety three passages against twenty two translations fetches for the better part of an hour, and the song next door files exactly that answer under the song's own name for exactly this reason. A person choosing a wording is doing it days after the reading was taken and would otherwise pay for it again to look at the same numbers.";
  "THE QUIET HEAP HAD NO WAY IN AT ALL AND THAT IS THE WHOLE OF WHY THIS EXISTS. The step that finds these passages is a function with no command line name, taking a reading that has already been opened and parsed - so reaching it meant writing a throwaway script, and the four choices it found on 2026-09-02 were found from one. A step that produced half a song's translation choices and can only be run by writing code first will not be run again by anybody who did not write it.";
  "BOTH ANSWERS ARE HANDED IN AS PLAIN WORDS BECAUSE NEITHER CAN BE LOOKED UP FROM THE OTHER. The word the file is named after is whatever the song's own reading passed when it filed it, and it is written nowhere on the song itself - the song carries a title and a word for an address, and the file is named after neither. Which bible is the usual one is a fact about the song too, and is asked for here rather than derived so that a reading can be looked at through some other bible's words on purpose.";
  "HOW MANY CAME BACK WITH NO WORDS IS COUNTED OUT SEPARATELY, BECAUSE ONE OF THEM MEANS SOMETHING AND ALL OF THEM MEANS SOMETHING ELSE. A single passage the usual bible says nothing at is a real finding about that bible - two of the translations on offer are published a book at a time and hold fifty six of the sixty six. Every passage coming back empty is not that finding at all; it is a bible folder typed wrong, and without the count it reads as a song whose own bible has failed it everywhere.";
  arguments_assert(arguments, 2);
  let extension = json_extension();
  let reading_name = text_combine_multiple([
    "song_reading_",
    song_name,
    extension,
  ]);
  let reading_path = folder_gitignore_join(reading_name);
  let echoed = await file_read_json(reading_path);
  let entries = song_reading_quiet_read(echoed, bible_folder_usual);
  let empty = 0;
  for (let entry of entries) {
    let text = property_get(entry, "text");
    let wordless = null_is(text);
    if (wordless) {
      empty = add(empty, 1);
    }
  }
  let quiet = list_size(entries);
  let report = {
    song_name,
    bible_folder_usual,
    reading_path,
    quiet,
    empty,
    entries,
  };
  return report;
}
