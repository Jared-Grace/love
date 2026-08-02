import { not } from "./not.mjs";
import { g_game_plants_report } from "./g_game_plants_report.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
export async function g_game_plants_seeds_report(words_comma) {
  "Several playthroughs side by side - one compact line each - so a claim about how often something happens is counted rather than guessed from one run.";
  "One game says nothing about a rate. The plants under the elder floor are the small early ones, and whether the Sender is still alongside them depends on how many chapters the first book happens to hold - a five-chapter book covers three plants and a one-chapter book covers one. That is a difference between seeds, so it takes seeds to see it.";
  async function word_summarized(word) {
    let report = await g_game_plants_report(word);
    let rows = property_get(report, "rows");
    let sender_books = [];
    let elder_short_at = [];
    let sender_plants = 0;
    for (let row of rows) {
      let sender_present = property_get(row, "sender_present");
      if (sender_present) {
        sender_plants = sender_plants + 1;
        let book = property_get(row, "book");
        let seen = sender_books.includes(book);
        if (not(seen)) {
          list_add(sender_books, book);
        }
      }
      let elder_short = property_get(row, "elder_short");
      if (elder_short) {
        let index = property_get(row, "index");
        list_add(elder_short_at, index);
      }
    }
    let summary = {
      word,
      plants: property_get(report, "plants"),
      days_total: property_get(report, "days_total"),
      sizes: property_get(report, "sizes"),
      short_plants: property_get(report, "short_plants"),
      elder_short_plants: property_get(report, "elder_short_plants"),
      elder_short_at,
      sender_plants,
      sender_books,
    };
    return summary;
  }
  let r = await text_split_comma_map_async(words_comma, word_summarized);
  return r;
}
