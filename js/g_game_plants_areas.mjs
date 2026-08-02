import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_add } from "./list_add.mjs";
export function g_game_plants_areas(plants, stream) {
  "Which chapters each plant preaches through, which book that puts it in, and whether the Sender is still alongside the player there.";
  "The plants were built without a chapter anywhere in them - a plant is as long as its cast is worth - so this lays the finished plants along the preaching supply afterwards and reads the book off where each one landed. That order can be anything and the plants do not change, which is what lets a first plant be small in every game.";
  "A chapter is allowed to straddle two plants. Nothing lines up otherwise, and a plant that had to stop where a chapter stopped would be back to taking its length from the sermon instead of from its people.";
  "An area is a book, and the Sender goes with the player through the first of them. That is what the early plants being under the elder floor MEANS: the player is not failing to raise up an elder, the church already has one standing in it, and the player is the one being formed. Elders get appointed on the way back through - Acts 14:23 - so the floor is a claim about the plants the player founds alone.";
  let s = g_generation_settings();
  let cursor = 0;
  let left_in = 0;
  let held = null;
  let book_last = null;
  let area = 0;
  let placed = [];
  for (let plant of plants) {
    let days = property_get(plant, "days");
    let chapters = [];
    let book_first = null;
    let carried = greater_than(left_in, 0);
    if (carried) {
      let code_carried = property_get(held, "chapter");
      list_add(chapters, code_carried);
      book_first = property_get(held, "book");
    }
    let taken = 0;
    let steps = stream.length + days + 1;
    for (let step = 0; less_than(step, steps); step++) {
      let done = greater_than_equal(taken, days);
      if (done) {
        break;
      }
      let empty = less_than(left_in, 1);
      if (empty) {
        let spent = greater_than_equal(cursor, stream.length);
        if (spent) {
          break;
        }
        held = stream[cursor];
        cursor = cursor + 1;
        let code = property_get(held, "chapter");
        list_add(chapters, code);
        let book_opened = property_get(held, "book");
        if (not(book_first)) {
          book_first = book_opened;
        }
        left_in = property_get(held, "days");
      }
      let wanted = subtract(days, taken);
      let paid = Math.min(wanted, left_in);
      taken = taken + paid;
      left_in = subtract(left_in, paid);
    }
    let book = book_first;
    let opened = chapters.length ? chapters[0] : null;
    let moved = not_equal(book, book_last);
    if (moved) {
      area = area + 1;
      book_last = book;
    }
    let sender_present = greater_than_equal(s.sender_areas, area);
    let leader_short = property_get(plant, "leader_short");
    let elder_short = leader_short && not(sender_present);
    let days_short = less_than(taken, days);
    let added = {
      chapters,
      chapter_first: opened,
      book,
      area,
      sender_present,
      elder_short,
      days_short,
    };
    let both = {};
    object_merge(both, plant);
    object_merge(both, added);
    list_add(placed, both);
  }
  return placed;
}
