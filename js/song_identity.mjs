import { arguments_assert } from "./arguments_assert.mjs";
import { song_path_downloads } from "./song_path_downloads.mjs";
import { not } from "./not.mjs";
import { file_size } from "./file_size.mjs";
import { file_hash } from "./file_hash.mjs";
export async function song_identity(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("Which recording a thing was made against: the song's name, how many bytes it holds, and the one word standing for its contents.");
  ("THE CONTENTS DECIDE, AND THE NAME IS THERE ONLY TO BE READ BY A PERSON. A downloads folder collects the second and third take of a song under its own name with a number stuck on the end, so the name is precisely the thing that fails to tell two recordings apart - which is the whole reason this is not simply the name. The size is kept for the same reason as the name and not as a test: it is what somebody holding this record beside a folder listing can match by eye.");
  ("A SONG THAT CANNOT BE FOUND IS RECORDED AS NOT FOUND RATHER THAN LEFT OUT. What was heard is worth keeping whether or not the song it was heard in is still where it was, so nothing here may stop the thing that called it. But a record that quietly omitted the song would read exactly like a record written before there was anything to omit, and those two want opposite things from whoever finds them later - one wants leaving alone, the other wants somebody to go and look.");
  ("It is asked for by name because the name is all a browser ever gives away, and the folder songs arrive in is what turns a name back into a file.");
  let song = await song_path_downloads(file_name);
  let missing = not(song.found);
  if (missing) {
    let unfound = {
      file_name,
      found: false,
    };
    return unfound;
  }
  let bytes = await file_size(song.path_audio);
  let sha = await file_hash(song.path_audio);
  let r = {
    file_name,
    found: true,
    bytes,
    sha256: sha,
  };
  return r;
}
