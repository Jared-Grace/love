import { subtract } from "./subtract.mjs";
import { g_game_generate } from "./g_game_generate.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function g_game_generate_report(word) {
  "What one whole game comes out as - a row for each plant and the tallies the shape of it is judged by.";
  "The days totalling exactly the preaching there is, and the sizes holding nothing under the smallest a plant is allowed to be, are the two things this exists to show. Both are claims the generation makes about itself and neither can be read off a setting.";
  let plants = await g_game_generate(word);
  let rows = [];
  let sizes = {};
  let days_total = 0;
  let npcs_total = 0;
  let elder_short_plants = 0;
  let trimmed_plants = 0;
  for (let plant of plants) {
    let npcs = property_get(plant, "npcs");
    let days = property_get(plant, "days");
    let days_asked = property_get(plant, "days_asked");
    days_total = days_total + days;
    npcs_total = npcs_total + npcs;
    let seen = sizes[npcs];
    let already = seen ? seen : 0;
    sizes[npcs] = already + 1;
    let elder_short = property_get(plant, "elder_short");
    if (elder_short) {
      elder_short_plants = elder_short_plants + 1;
    }
    let trimmed = subtract(days_asked, days);
    if (trimmed) {
      trimmed_plants = trimmed_plants + 1;
    }
    let row = {
      index: property_get(plant, "index"),
      npcs,
      days,
      days_asked,
      leader_turns: property_get(plant, "leader_turns"),
      leader_days_percent: property_get(plant, "leader_days_percent"),
      leader_short: property_get(plant, "leader_short"),
      area: property_get(plant, "area"),
      book: property_get(plant, "book"),
      chapters: property_get(plant, "chapters"),
      sender_present: property_get(plant, "sender_present"),
      elder_short,
    };
    list_add(rows, row);
  }
  let r = {
    plants: plants.length,
    days_total,
    npcs_total,
    sizes,
    elder_short_plants,
    trimmed_plants,
    rows,
  };
  return r;
}
