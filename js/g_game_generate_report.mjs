import { multiply_divide } from "./multiply_divide.mjs";
import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { g_game_generate } from "./g_game_generate.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function g_game_generate_report(word) {
  "What one whole game comes out as - a row for each plant and the tallies the shape of it is judged by.";
  "The days totalling exactly the preaching there is, and the sizes holding nothing under the smallest a plant is allowed to be, are the two things this exists to show. Both are claims the generation makes about itself and neither can be read off a setting.";
  "A plant that came out under the size it meant to be is counted separately, because there should be at most one of those and it should be the last.";
  "The question share is worked out, never chosen, so it is here to be read rather than checked against a setting. It is what the arcs left of the days; a whole game far above the planning quarter says the arcs are short for the days they were given.";
  let plants = await g_game_generate(word);
  let rows = [];
  let sizes = {};
  let days_total = 0;
  let npcs_total = 0;
  let elder_short_plants = 0;
  let trimmed_plants = 0;
  let days_spread = 0;
  let leader_days_percent_low = 100;
  let question_percent_high = 0;
  let matches_total = 0;
  let question_matches_total = 0;
  for (let plant of plants) {
    let npcs = property_get(plant, "npcs");
    let days = property_get(plant, "days");
    let wanted = property_get(plant, "wanted");
    days_total = days_total + days;
    npcs_total = npcs_total + npcs;
    let seen = sizes[npcs];
    let already = seen ? seen : 0;
    sizes[npcs] = already + 1;
    let percent = property_get(plant, "leader_days_percent");
    let lower = less_than(percent, leader_days_percent_low);
    if (lower) {
      leader_days_percent_low = percent;
    }
    let question_percent = property_get(plant, "question_percent");
    let higher = greater_than(question_percent, question_percent_high);
    if (higher) {
      question_percent_high = question_percent;
    }
    matches_total = matches_total + property_get(plant, "matches");
    question_matches_total =
      question_matches_total + property_get(plant, "question_matches");
    let elder_short = property_get(plant, "elder_short");
    if (elder_short) {
      elder_short_plants = elder_short_plants + 1;
    }
    let days_drawn = property_get(plant, "days_drawn");
    let spread = subtract(days, days_drawn);
    days_spread = days_spread + spread;
    let trimmed = subtract(wanted, npcs);
    if (trimmed) {
      trimmed_plants = trimmed_plants + 1;
    }
    let row = {
      index: property_get(plant, "index"),
      npcs,
      days,
      days_drawn,
      wanted,
      leader_turns: property_get(plant, "leader_turns"),
      leader_days_percent: property_get(plant, "leader_days_percent"),
      leader_short: property_get(plant, "leader_short"),
      area: property_get(plant, "area"),
      book: property_get(plant, "book"),
      chapters: property_get(plant, "chapters"),
      sender_present: property_get(plant, "sender_present"),
      elder_short,
      question_matches: property_get(plant, "question_matches"),
      question_percent,
    };
    list_add(rows, row);
  }
  let reached = multiply_divide(question_matches_total, 100, matches_total);
  let question_percent_whole = round(reached);
  let r = {
    plants: plants.length,
    days_total,
    npcs_total,
    sizes,
    elder_short_plants,
    trimmed_plants,
    days_spread,
    leader_days_percent_low,
    question_percent_whole,
    question_percent_high,
    rows,
  };
  return r;
}
