import { arguments_assert } from "./arguments_assert.mjs";
import { song_wordings_echoed } from "./song_wordings_echoed.mjs";
import { song_wordings_chosen } from "./song_wordings_chosen.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_extension } from "./json_extension.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
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
  ("Reads every English translation against the lines a song sings at each of its passages, writes what the reading decided into a file named after the song, and hands back where it put it and how much fell into each of the three heaps.");
  ("IT IS THE RANKING AND THE DECIDING PUT TOGETHER BECAUSE NOBODY WANTS THE RANKING ON ITS OWN. Reading it is what a person does to choose, and choosing is what the two halves next door already do between them. Every song would otherwise write the same three lines to join them up.");
  ("THE DECISION IS FILED AND ONLY ITS SHAPE IS HANDED BACK, BECAUSE A DECISION THIS BIG DOES NOT SURVIVE BEING PRINTED. A song of ninety three passages read against twenty two translations decides something at every one of them, and where a song retells rather than quotes every translation ties, so every passage comes back holding all twenty two. Measured 2026-09-01 and 2026-09-02, five runs of this ended in a single blank line and an exit saying nothing had gone wrong - the work was done and the answer was lost on the way to the screen. Naming a file costs one line and cannot be lost that way, and a caller who wants the whole thing opens it.");
  ("THE FILE IS NAMED AFTER THE SONG AND NOT AFTER THE RUN, so a second reading of the same song lands on top of the first rather than beside it. Two songs never collide and one song never accumulates - what is on disk is always the newest answer about that song, which is the only one anybody wants.");
  ("WHICH BIBLE IS THE USUAL ONE IS HANDED IN RATHER THAN LOOKED UP, the same as it is next door. That is a fact about the page a song is shown on, and this counts words for any song on any page.");
  let echoed = await song_wordings_echoed(references, reference_lines);
  let decided = song_wordings_chosen(echoed, bible_folder_usual);
  let json = json_format_to(decided);
  let ext_j = json_extension();
  let file_name = text_combine_multiple(["song_wordings_", song_name, ext_j]);
  let path = folder_gitignore_join(file_name);
  await file_overwrite(path, json);
  let chosen = property_get(decided, "chosen");
  let tied = property_get(decided, "tied");
  let unchanged = property_get(decided, "unchanged");
  let filed = {
    path,
    chosen: list_size(chosen),
    tied: list_size(tied),
    unchanged: list_size(unchanged),
  };
  return filed;
}
