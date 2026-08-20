import { youtube_video_page } from "./youtube_video_page.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_from } from "./json_from.mjs";
export async function youtube_video_description(video_id) {
  "$plain video_id";
  "The words that sit under one video, read the way anybody with the address would see them - or nothing at all when the page carries no such words.";
  "Nobody is signed in for this, which is the whole point of it. Studio saying a change was accepted is studio's word about its own work; what a listener actually lands on is the fact, and only a stranger's reading can tell you that. So this is what a write is checked with, and it can check a write nobody here made.";
  "The words are taken out of the page itself rather than asked for, because the private address a player uses came back with almost nothing when asked from outside. The page still carries them, written where a player would find them, and reading them from there needs no permission and no key.";
  "The end of the words is found by walking, not by looking for the next quotation mark. The words are a person's writing and may hold quotation marks of their own, each one written with a stroke before it; a search for the next mark would stop at the first of those and hand back a sentence cut in half.";
  arguments_assert(arguments, 1);
  let page = await youtube_video_page(video_id);
  let mark = '"shortDescription":"';
  let at = page.indexOf(mark);
  let absent = less_than(at, 0);
  if (absent) {
    return null;
  }
  let from = at + mark.length;
  let to = from;
  while (less_than(to, page.length)) {
    let letter = page[to];
    let stroke = equal(letter, "\\");
    if (stroke) {
      to = to + 2;
      continue;
    }
    let closing = equal(letter, '"');
    if (closing) {
      break;
    }
    to = to + 1;
  }
  let quoted = '"' + page.slice(from, to) + '"';
  let description = json_from(quoted);
  return description;
}
