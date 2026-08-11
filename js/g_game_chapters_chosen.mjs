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
    let known = property_get_default(held, book, null);
    if (not(known)) {
      let started = [];
      held[book] = started;
      list_add(books, book);
    }
    let run = property_get(held, book);
    list_add(run, chapter);
  }
  let order = [];
  let left = books.length;
  for (let step = 0; less_than(step, left); step++) {
    let spare = books.length;
    let index = random_generator_index(next, spare);
    let book = books[index];
    list_remove_index(books, index);
    let run = property_get(held, book);
    list_add_multiple(order, run);
  }
  return order;
}
