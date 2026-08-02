import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_sermon_chapter_days } from "./g_sermon_chapter_days.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_sum } from "./list_sum.mjs";
export async function g_sermon_days_total() {
  "How many days of preaching the whole written sermon supply comes to, added up over every chapter already grouped.";
  "This is the one hard limit on how much game there is. Plants are worked out from their casts now, so nothing else says when the content runs out - the sermon does, because a day without preaching in it is not a day.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  async function chapter_days(chapter) {
    let days = await g_sermon_chapter_days(chapter);
    return days;
  }
  let chapter_days_each = await list_map_async(chapters, chapter_days);
  let r = list_sum(chapter_days_each);
  return r;
}
