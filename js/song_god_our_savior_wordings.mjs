import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
import { song_wordings } from "./song_wordings.mjs";
export async function song_god_our_savior_wordings() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings that are really on offer for it - each set of words once, and the translations that use exactly those words.");
  ("IT IS THE READING LIST FOR CHOOSING WHICH TRANSLATION EACH LINE QUOTES. The page shows one translation per passage, and which one is a judgement somebody has to make by reading; this is what there is to read, gathered in one pass instead of a hundred lookups.");
  ("IT FINDS ITS OWN SET rather than being handed a list of passages. The song's passages are already written down beside its lines, so a list typed here could fall behind them - a line gaining a passage would leave that passage uncompared, with nothing anywhere saying so.");
  ("WHICH IS THE WHOLE OF WHAT IS LEFT HERE. The gathering itself is general and stands next door taking a song's passages; this asks that of this song and is worth keeping for one reason only - a hundred and one passages cannot be typed onto a command line, so the reading a person actually asks for has to be one that needs no argument.");
  let references = song_god_our_savior_references();
  let compared = await song_wordings(references);
  return compared;
}
