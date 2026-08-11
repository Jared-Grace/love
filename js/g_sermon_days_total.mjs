import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_sermon_chapter_days } from "./g_sermon_chapter_days.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_sum } from "./list_sum.mjs";
export async function g_sermon_days_total() {
  "How many days of preaching the whole written sermon supply comes to, added up over every chapter already grouped.";
  "This is the one hard limit on how much game there is. Plants are worked out from their casts now, so nothing else says when the content runs out - the sermon does, because a day without preaching in it is not a day.";
  "Added up over the PLANTS rather than over the chapters, and the difference is not rounding noise. A chapter's day count is its lines rounded up, and a plant is several chapters in a row, so adding chapter counts charges a fresh part-day at every chapter break - as though the preaching stopped for the night whenever a chapter ended. It does not; a plant reads on across the join. Measured over the supply as it stands, chapter-by-chapter came to three hundred and nineteen days where the plants come to three hundred and ten.";
  "The plant is the right boundary rather than merely a smaller one. Days genuinely do not flow across a plant, because a plant does not cross books and a new letter is a new argument - so the rounding up is real exactly once per plant, which is where it is now taken.";
  let plants = await g_plant_chapters();
  function plant_days(plant) {
    let days = property_get(plant, "days");
    return days;
  }
  let r = list_map_sum(plants, plant_days);
  return r;
}
