import { g_sermon_chapters_written } from "./g_sermon_chapters_written.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
export async function g_game_chapters_chosen(word) {
  "Which chapters one game preaches and in what order - every written chapter, with the books put in an order the word decides.";
  "A STAND-IN for a screen that does not exist yet. The player chooses this when a game begins, and until there is somewhere to choose it, a seed word stands in so the rest of the game can be built and measured against a choice that really does vary.";
  "Books are reordered and the chapters inside a book are not. That is the shape a real choice has: somebody picks Romans and James and Hebrews in whatever order appeals to them, and then reads each letter through from its beginning. Shuffling chapters within a book would be shuffling one argument, which nobody does and which the sermons are not written for.";
  "Every written chapter is included, because leaving some out is a second question - how much of the supply a game uses - and it is not this one. When the screen exists it will answer both.";
  let chapters = await g_sermon_chapters_written();
  let next = random_seed_generator_from_text(word);
  let books = [];
  let held = {};
  for (let chapter of chapters) {
    let book = ebible_chapter_code_to_book(chapter);
    let known = held[book];
    if (not(known)) {
      let started = [];
      held[book] = started;
      list_add(books, book);
    }
    let run = property_get(held, book);
    list_add(run, chapter);
  }
  let order = [];
  let count = books.length;
  for (let step = 0; less_than(step, count); step++) {
    let spare = books.length;
    let drawn = next();
    let along = multiply(drawn, spare);
    let index = floor(along);
    let book = list_remove_at(books, index);
    let run = property_get(held, book);
    list_add_multiple(order, run);
  }
  return order;
}
