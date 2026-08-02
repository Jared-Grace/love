import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_arc_lengths } from "./g_arc_lengths.mjs";
import { g_sermon_chapter_days } from "./g_sermon_chapter_days.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_arc_lengths_all() {
  "The arc lengths of every chapter that has been grouped, side by side, so what the chapters actually contain can be compared with the numbers the settings guess at.";
  "It finds its own set from the grouping todo rather than receiving a list, so it cannot fall behind the chapters that exist. A chapter joins this report by being grouped.";
  "The two settings it puts under pressure are the plant's length in days and the leader's share of the turns. Both were chosen from reasoning about weeks and cell sizes; the days and the longest arc here are read off the sermon text, so a gap between the two columns is a real finding rather than a rounding difference.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  let settings = g_generation_settings();
  async function chapter_row(chapter) {
    let arcs = await g_arc_lengths(chapter);
    let days = await g_sermon_chapter_days(chapter);
    let lengths = property_get(arcs, "lengths");
    let longest = lengths[0];
    let row = {
      chapter,
      days,
      lines: property_get(arcs, "lines"),
      arc_turns: property_get(arcs, "arc_turns"),
      npcs: property_get(arcs, "npcs"),
      longest,
      lengths,
    };
    return row;
  }
  let rows = await list_map_async(chapters, chapter_row);
  let r = {
    plant_days_setting: settings.plant_days,
    plant_days_minimum_setting: settings.plant_days_minimum,
    plant_days_maximum_setting: settings.plant_days_maximum,
    rows,
  };
  return r;
}
