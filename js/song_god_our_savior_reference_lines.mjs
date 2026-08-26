import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_sections } from "./song_god_our_savior_sections.mjs";
import { property_get } from "./property_get.mjs";
import { song_god_our_savior_line_references } from "./song_god_our_savior_line_references.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function song_god_our_savior_reference_lines(reference) {
  arguments_assert(arguments, 1);
  ("$plain reference");
  ("The sung lines of this song that rest on one passage of scripture, in the order the song sings them.");
  ("IT IS THE OTHER DIRECTION OF WHAT IS ALREADY WRITTEN DOWN, AND NOTHING MORE THAN THAT. The explanations are kept line by line, each naming the passages its line leans on, which answers what a line rests on. Choosing which translation to quote at a passage asks the opposite question - which lines are listening at it - and there was no way to ask it. Both readings come off the same explanations, so neither can drift from the other.");
  ("EVERY LINE RESTING THERE IS HANDED BACK AND NOT ONLY THE FIRST, because a song comes back to a verse from several places and a translation quoted at that verse has to answer to all of them. Taking the first line alone would choose a wording that suits one line and leave the others sounding like a different passage.");
  ("A passage nothing rests on is answered with an empty list rather than a refusal, which is the ordinary state while a song is being written and is not a fault worth stopping for.");
  let sections = song_god_our_savior_sections();
  let resting = [];
  for (let section of sections) {
    let lines = property_get(section, "lines");
    for (let line of lines) {
      let named = song_god_our_savior_line_references(line);
      let rests = list_includes(named, reference);
      if (rests) {
        list_add(resting, line);
      }
    }
  }
  return resting;
}
