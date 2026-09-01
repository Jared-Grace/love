import { arguments_assert } from "./arguments_assert.mjs";
import { song_wordings_echoed } from "./song_wordings_echoed.mjs";
import { song_wordings_chosen } from "./song_wordings_chosen.mjs";
export async function song_wordings_decided(
  references,
  reference_lines,
  bible_folder_usual,
) {
  arguments_assert(arguments, 3);
  ("$plain references");
  ("$plain bible_folder_usual");
  ("Reads every English translation against the lines a song sings at each of its passages, and hands back only what the reading decided - the passages that won themselves a translation, the ones where several won together, and the ones that keep the translation the page already reads.");
  ("IT IS THE RANKING AND THE DECIDING PUT TOGETHER BECAUSE NOBODY WANTS THE RANKING ON ITS OWN. Reading it is what a person does to choose, and choosing is what the two halves next door already do between them. Every song would otherwise write the same three lines to join them up.");
  ("THE FULL READING IS NEVER CARRIED OUT OF HERE, AND THAT IS THE POINT RATHER THAN A SAVING. Ranked whole, a song of ninety three passages against twenty two translations answers with every wording of every verse, which is megabytes - and printing that is how the answer got lost. Measured 2026-09-01 three runs of the ranking on its own came back with nothing printed at all and no error to say why, because a large answer does not survive being written out. What comes back from here is a few passages with a few wordings each.");
  ("WHICH BIBLE IS THE USUAL ONE IS HANDED IN RATHER THAN LOOKED UP, the same as it is next door. That is a fact about the page a song is shown on, and this counts words for any song on any page.");
  let echoed = await song_wordings_echoed(references, reference_lines);
  let decided = song_wordings_chosen(echoed, bible_folder_usual);
  return decided;
}
