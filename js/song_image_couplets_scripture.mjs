import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_verse } from "./song_image_couplets_verse.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplets_scripture(verse_number) {
  "$plain verse_number";
  "the passages a verse of the hymn rests on, a line to a couplet, each line saying the words first and then where they come from - or the whole hymn's passages when the number is 0";
  "EVERY LINE CARRIES ITS OWN WORDS, so a reader can see which passage answers which line rather than being handed a heap of references and left to guess. A bare list would be shorter and would say nothing about the thing it is a list of.";
  "A REPEATED COUPLET IS NAMED ONCE. The words are sung twice and so appear twice above, but the passage behind them does not change on the second hearing, and printing it again would read as a second, different reason for the same line.";
  "A couplet nobody has written a reference for is left out rather than named with an empty reason. The hymn is glossed couplet by couplet as the pictures for it are decided, so the unglossed ones are work not yet done, and a line saying only the words would look like a claim that they rest on nothing.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets_verse(verse_number);
  let keys_named = [];
  let lines = [];
  for (let couplet of couplets) {
    let key = song_image_couplet_key(couplet.n);
    let named = list_includes(keys_named, key);
    if (named) {
      continue;
    }
    list_add(keys_named, key);
    let gloss = song_image_couplet_gloss(couplet.n);
    let unglossed = equal(gloss, undefined);
    if (unglossed) {
      continue;
    }
    let references = gloss.lyric_ref;
    let bare = equal(references, "");
    if (bare) {
      continue;
    }
    let halves = [couplet.first, couplet.second];
    let words = list_join_space(halves);
    let line = list_join([words, references], " - ");
    list_add(lines, line);
  }
  let r = list_join_newline(lines);
  return r;
}
