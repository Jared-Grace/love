import { arguments_assert } from "./arguments_assert.mjs";
import { song_wordings_echoed } from "./song_wordings_echoed.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_extension } from "./json_extension.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { song_wordings_chosen } from "./song_wordings_chosen.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function song_wordings_decided(
  song_name,
  references,
  reference_lines,
  bible_folder_usual,
) {
  arguments_assert(arguments, 4);
  ("$plain song_name");
  ("$plain references");
  ("$plain bible_folder_usual");
  ("Reads every English translation against the lines a song sings at each of its passages, writes both the whole reading and what it decided into files named after the song, and hands back where it put them and how much fell into each of the three heaps.");
  ("IT IS THE RANKING AND THE DECIDING PUT TOGETHER BECAUSE NOBODY WANTS THE RANKING ON ITS OWN. Reading it is what a person does to choose, and choosing is what the two halves next door already do between them. Every song would otherwise write the same three lines to join them up.");
  ("THE DECISION IS FILED AND ONLY ITS SHAPE IS HANDED BACK, BECAUSE A DECISION THIS BIG DOES NOT SURVIVE BEING PRINTED. A song of ninety three passages read against twenty two translations decides something at every one of them, and where a song retells rather than quotes every translation ties, so every passage comes back holding all twenty two. Measured 2026-09-01 and 2026-09-02, five runs of this ended in a single blank line and an exit saying nothing had gone wrong - the work was done and the answer was lost on the way to the screen. Naming a file costs one line and cannot be lost that way, and a caller who wants the whole thing opens it.");
  ("THE WHOLE READING IS FILED AS WELL, AND THAT IS WHAT MAKES THE DECISION ARGUABLE. Counting how much of a line a translation echoes settles which translations say the most of it and nothing else, and the reasons a person keeps or refuses one of them - whether it renders the words of the original or explains their sense, whether a reader will understand it - are not in the count and never will be. Judging that means reading the ones that came second, and a decision that has thrown them away can only be taken or left. Measured 2026-09-02: the loudest translation at four of one hymn's passages turned out to be a meaning-based helper text rather than a translation of the words, and answering what should stand there instead needed a second hour-long reading that filing would have made free.");
  ("THE FILES ARE NAMED AFTER THE SONG AND NOT AFTER THE RUN, so a second reading of the same song lands on top of the first rather than beside it. Two songs never collide and one song never accumulates - what is on disk is always the newest answer about that song, which is the only one anybody wants.");
  ("WHICH BIBLE IS THE USUAL ONE IS HANDED IN RATHER THAN LOOKED UP, the same as it is next door. That is a fact about the page a song is shown on, and this counts words for any song on any page.");
  let echoed = await song_wordings_echoed(references, reference_lines);
  let reading_name = text_combine_multiple([
    "song_reading_",
    song_name,
    json_extension(),
  ]);
  let reading_path = folder_gitignore_join(reading_name);
  await file_overwrite(reading_path, json_format_to(echoed));
  let decided = song_wordings_chosen(echoed, bible_folder_usual);
  let file_name = text_combine_multiple([
    "song_wordings_",
    song_name,
    json_extension(),
  ]);
  let path = folder_gitignore_join(file_name);
  await file_overwrite(path, json_format_to(decided));
  let chosen = property_get(decided, "chosen");
  let tied = property_get(decided, "tied");
  let unchanged = property_get(decided, "unchanged");
  let filed = {
    path,
    reading_path,
    chosen: list_size(chosen),
    tied: list_size(tied),
    unchanged: list_size(unchanged),
  };
  return filed;
}
