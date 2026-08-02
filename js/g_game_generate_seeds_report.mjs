import { g_game_generate_report } from "./g_game_generate_report.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { property_get } from "./property_get.mjs";
export async function g_game_generate_seeds_report(words_comma) {
  "Several whole games side by side, tallies only, so the two things the generation promises can be checked over more than one of them.";
  "The promises are that the days come to exactly the preaching there is and that no plant is smaller than a plant. One game showing both proves nothing about a rule; the plants that broke them before were rare and late, which is exactly the shape a single run misses.";
  async function word_summarized(word) {
    let report = await g_game_generate_report(word);
    let summary = {
      word,
      plants: property_get(report, "plants"),
      days_total: property_get(report, "days_total"),
      npcs_total: property_get(report, "npcs_total"),
      sizes: property_get(report, "sizes"),
      elder_short_plants: property_get(report, "elder_short_plants"),
      trimmed_plants: property_get(report, "trimmed_plants"),
    };
    return summary;
  }
  let r = await text_split_comma_map_async(words_comma, word_summarized);
  return r;
}
