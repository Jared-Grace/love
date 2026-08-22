import { bible_gathered_verse_gaps } from "./bible_gathered_verse_gaps.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_gathered_gaps_named() {
  "Every hole the corpus currently has, as one flat list of names - a verse run nothing gathered written as CHAPTER:from-to, and a whole ungathered chapter written as BOOK:from-to - so a baseline can hold them and a gate can compare.";
  "★ IT IS A LIST OF NAMES BECAUSE THAT IS WHAT A SHRINK-ONLY BASELINE COMPARES, AND THE SHAPE THE FINDER RETURNS IS NOT ONE. The finder hands back objects nested two deep, and two records of the same hole written by different code will differ in whitespace and key order long before they differ in meaning. A name is one string, so equal holes have equal names and nothing else can drift.";
  "★ THE TWO KINDS ARE DELIBERATELY NOT SEPARATED, BECAUSE THE GATE DOES NOT CARE WHICH KIND A NEW HOLE IS. A verse run nobody gathered and a chapter nobody gathered are the same failure at two magnifications, and keeping them apart would let a chapter quietly become a verse run without anything noticing.";
  let found = await bible_gathered_verse_gaps();
  let names = [];
  function each_chapter(chapter) {
    function each_gap(gap) {
      let name = chapter.chapter_code + ":" + gap.from + "-" + gap.to;
      list_add(names, name);
    }
    each(chapter.gaps, each_gap);
  }
  each(found.chapters, each_chapter);
  function each_missing(missing) {
    let name = missing.book_code + ":" + missing.from + "-" + missing.to;
    list_add(names, name);
  }
  each(found.chapters_missing, each_missing);
  let answer = {
    names,
    walked: found.chapters_gathered,
  };
  return answer;
}
