import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_playlist_chapter_ids(playlists) {
  "Which playlist belongs to which chapter of the Psalms, read off the names the playlists wear.";
  "A channel holds playlists that are not chapters of anything, so a playlist counts only when its whole name is the word Psalm and a number. Matching loosely would have swept a playlist named after something else into a chapter and quietly filed songs there.";
  arguments_assert(arguments, 1);
  let chapter_ids = {};
  for (let playlist of playlists) {
    let found = playlist.title.match(/^Psalm (\d+)$/);
    if (!found) {
      continue;
    }
    let chapter = Number(found[1]);
    chapter_ids[chapter] = playlist.playlist_id;
  }
  return chapter_ids;
}
