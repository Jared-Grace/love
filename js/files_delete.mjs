import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { file_delete } from "./file_delete.mjs";
export async function files_delete(file_paths_comma) {
  "takes several files away at once, given where each of them is";
  "it exists so that removing a set of files is one named command rather than one invocation per file. A run of invocations leaves nothing behind that can be run again, and it also breaks the commit message, because a batch has no single command and so forces a description into the one place a description must never go. Named here, the removal reads back as the command plus the very paths it was given.";
  "do NOT grant, for the same reason the single one is not granted: a standing approval here removes any set of files in the repo without being seen, and a removal is the one change that leaves nothing behind to read afterwards. Being the plural form makes that worse rather than better.";
  "the paths arrive as one word with commas between them, which is the shape every other command taking a list is asked in. A command line hands each word over as a separate parameter, so a plural command written to take several words would silently keep the first and drop the rest.";
  let deleted = await text_split_comma_map_async(file_paths_comma, file_delete);
  return deleted;
}
