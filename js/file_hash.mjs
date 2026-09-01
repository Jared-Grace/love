import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { sha256_hash } from "./sha256_hash.mjs";
export async function file_hash(file_path) {
  arguments_assert(arguments, 1);
  ("$plain file_path");
  ("One short fixed word standing for the whole contents of a file, so a record of which file something was made from can be kept and checked later without keeping the file itself.");
  ("IT READS THE BYTES AND NEVER THE WRITING IN THEM. The neighbouring one over text answers the same question about a piece of writing, and the two are deliberately not one function, because what is handed in is the whole of the difference: a song, a picture and a video hold no writing at all, and a file opened as writing is a file quietly altered on the way in by whatever its bytes were assumed to spell.");
  ("WHAT THE TWO DO SHARE IS THE ENDING, AND THAT NOW HAS ITS OWN NAME. Opening the file is the whole of this one; turning what came out into the short word is neither this one's work nor the other one's, and writing the method's name in both files was two places to change it and no way for either to know the other had moved.");
  ("HOW LONG A FILE IS AND HOW LONG IT PLAYS ARE THE NEAR MISSES THIS EXISTS TO REPLACE. Both are cheap to ask for and both answer nearly the same for files that are not the same at all - measured over one folder of downloaded songs, four different sections of one psalm all ran within a sixth of a second of each other, so any allowance loose enough to survive a container's rounding called them one recording. Contents cannot do that: two files are the same file or they are not, and there is no tolerance to choose.");
  ("Reading the whole file to answer is affordable and was measured rather than assumed - sixty megabytes of song took an eighth of a second. A reader that fed the file through in pieces would answer the same thing and is what to reach for the day something here is too big to hold, which no song is.");
  let bytes = await file_read_buffer(file_path);
  let r = sha256_hash(bytes);
  return r;
}
