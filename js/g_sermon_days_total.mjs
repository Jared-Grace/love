import { g_game_plant_passages } from "./g_game_plant_passages.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_days_total() {
  "How many days of preaching the whole written sermon supply comes to, added up over the plants it makes.";
  "This is the one hard limit on how much game there is. Plants are worked out from their casts now, so nothing else says when the content runs out - the sermon does, because a day without preaching in it is not a day.";
  "Added up over the PLANTS rather than over the chapters, and the difference is not rounding noise. A chapter's day count is its lines rounded up, and a plant is several chapters in a row, so adding chapter counts charges a fresh part-day at every chapter break - as though the preaching stopped for the night whenever a chapter ended. It does not; a plant reads on across the join. Measured over the supply as it stands, chapter-by-chapter came to three hundred and nineteen days where the plants come to three hundred and ten.";
  "The plant is the right boundary rather than merely a smaller one. Days genuinely do not flow across a plant, because a plant does not cross books and a new letter is a new argument - so the rounding up is real exactly once per plant, which is where it is now taken.";
  let plants = await g_game_plant_passages();
  function plant_days(plant) {
    let days = property_get(plant, "days");
    return days;
  }
  let r = list_map_sum(plants, plant_days);
  return r;
}
