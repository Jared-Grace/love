import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { giveaway_psalms_record_write } from "./giveaway_psalms_record_write.mjs";
export async function giveaway_psalms_record_write_downloads() {
  arguments_assert(arguments, 0);
  ("Write the giveaway record from the recordings where they actually are, which is the downloads folder.");
  ("★ IT TAKES NOTHING BECAUSE THE ONE THING IT WOULD TAKE IS NOT A CHOICE ANYBODY MAKES. The writer underneath takes a folder, and rightly: a recording can be anywhere, and a function that reached for one folder could never be run against another. But every recording that has ever gone into this record came out of the browser into the downloads folder, so at the command line the argument was a fixed word being typed again each time - and a fixed word in an argument slot is a line that can be pasted wrong, or pasted with yesterday's folder in it.");
  ("★ THE REAL REASON FOR THE SHORTER LINE IS WHO RUNS IT. This is a write, so it is not something an agent may run unasked; it is handed to the human to paste. A handed line has to survive a terminal, and a line carrying a path is the one that wraps, loses a slash, or quietly names a folder that does not exist - whereupon the walk finds nothing and the record is written empty, which no gate can tell from a run where the songs really were all gone.");
  ("Nothing is checked here that the writer does not check. A wrapper that added a question would be a second place for the answer to live, and the whole of what this is for is to have no arguments.");
  ("★ THE EMPTY FILE NAME IS HOW THE DOWNLOADS FOLDER ITSELF IS ASKED FOR, AND LEAVING IT OUT ALTOGETHER IS NOT. That reader is named for a path to a file in the folder, so handed nothing at all it builds a path with a hole where the file name goes, and the join refuses rather than answering about the folder - which is what happened the first time this was run. An empty piece is a different thing from a missing one: the join passes an empty piece over on purpose, because a caller who writes the emptiness down has said what they meant. Twelve other readers of these same recordings ask for the folder in exactly this way, so the empty word is the house idiom rather than a trick, and a wrapper of its own to say the same thing would have been a thirteenth way of spelling one folder.");
  let folder_audio = folder_user_downloads_path("");
  let rows = await giveaway_psalms_record_write(folder_audio);
  return rows;
}
