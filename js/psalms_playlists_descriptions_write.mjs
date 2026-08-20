import { psalms_chapters_descriptions_write } from "./psalms_chapters_descriptions_write.mjs";
import { psalms_playlists_chapters } from "./psalms_playlists_chapters.mjs";
export async function psalms_playlists_descriptions_write() {
  "Writes down the words of every chapter of the Psalms that already has a playlist of its own on the channel, ready to be put underneath it.";
  "It works out which chapters those are by asking the channel, so it takes nothing and can simply be run. A list handed in would have been a second place the truth was written, and the day a new chapter got a playlist the list would have been the reason its words never appeared.";
  let playlisted = await psalms_playlists_chapters();
  let written = await psalms_chapters_descriptions_write(playlisted.chapters);
  return written;
}
