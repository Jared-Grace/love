import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_chapter_derived } from "./bible_glyph_chapter_derived.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { less_than } from "./less_than.mjs";
export async function bible_glyph_chapters_derived_agreement() {
  arguments_assert(arguments, 0);
  ("How closely every hand-written picture Bible chapter agrees with the same chapter BUILT from the interlinear, verse by verse, counting the pictures each one draws and the order it draws them in.");
  ("IT IS THE MEASUREMENT THAT DECIDES WHETHER A HAND-WRITTEN CHAPTER CAN BE REPLACED BY A BUILT ONE. A verse that draws the same pictures in the same order loses nothing; a verse that draws the same pictures in another order loses only placement; a verse that draws different pictures is where the hand author decided something the table does not know, and those are the verses a person has to look at.");
  ("A group is split into its pictures on both sides, because the hand chapter writes a group as one word and the table seats it as one name joined with a plus, and the two are the same pictures.");
  let chapters = bible_glyph_chapters();
  let same = 0;
  let reordered = 0;
  let different = 0;
  let unbuilt = 0;
  let built_only_adds = 0;
  let built_adds_names = {};
  let hand_extra_names = {};
  let examples = [];
  for (let stored of chapters) {
    let chapter_code = stored.chapter_code;
    let hand = bible_glyph_chapter(chapter_code);
    let built = await bible_glyph_chapter_derived(chapter_code);
    let built_by_verse = {};
    for (let verse of built.verses) {
      let names = [];
      for (let word of verse.words) {
        for (let name of word.glyph.split("+")) {
          let b2 = equal(name, "");
          if (not(b2)) {
            list_add(names, name);
          }
        }
      }
      built_by_verse["v" + verse.verse_number] = names;
    }
    for (let verse of hand.verses) {
      let names = [];
      for (let word of verse.words) {
        if (equal(typeof word, "string")) {
          continue;
        }
        for (let part of word) {
          if (equal(typeof part, "string")) {
            continue;
          }
          for (let name of part) {
            list_add(names, name);
          }
        }
      }
      let other = built_by_verse["v" + verse.verse_number];
      if (not(other)) {
        unbuilt = add(unbuilt, 1);
        continue;
      }
      let a = list_join_space(names);
      let b = list_join_space(other);
      if (equal(a, b)) {
        same = add(same, 1);
        continue;
      }
      let list = [...names].sort();
      let sorted_a = list_join_space(list);
      let list2 = [...other].sort();
      let sorted_b = list_join_space(list2);
      if (equal(sorted_a, sorted_b)) {
        reordered = add(reordered, 1);
        continue;
      }
      let left = [...other];
      let hand_extra = [];
      for (let name of names) {
        let at = left.indexOf(name);
        if (equal(at, -1)) {
          list_add(hand_extra, name);
          continue;
        }
        left.splice(at, 1);
      }
      for (let name of left) {
        built_adds_names[name] = add(built_adds_names[name] || 0, 1);
      }
      if (equal(hand_extra.length, 0)) {
        built_only_adds = add(built_only_adds, 1);
        continue;
      }
      for (let name of hand_extra) {
        hand_extra_names[name] = add(hand_extra_names[name] || 0, 1);
      }
      different = add(different, 1);
      if (less_than(examples.length, 12)) {
        list_add(examples, {
          verse: chapter_code + " " + verse.verse_number,
          hand: a,
          built: b,
        });
      }
    }
  }
  let r = {
    chapters: chapters.length,
    same,
    reordered,
    built_only_adds,
    different,
    built_adds_names,
    hand_extra_names,
    unbuilt,
    examples,
  };
  return r;
}
