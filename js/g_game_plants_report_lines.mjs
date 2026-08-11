import { g_game_plants_report } from "./g_game_plants_report.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
export async function g_game_plants_report_lines(word) {
  "One playthrough's plants as a line each, plus a summary line - the same report read as text rather than as a heap of json.";
  "Sizing is a thing people look at rather than a thing code consumes, and a full report is several hundred lines of json in which the four numbers that matter are scattered. A row that fits on one line is what makes a change visible at a glance: plants that shifted, a plant that fell short, a budget that went over.";
  "The summary comes LAST so it is the thing still on screen after the rows have scrolled past.";
  let report = await g_game_plants_report(word);
  let lines = [];
  let rows = property_get(report, "rows");
  for (let row of rows) {
    let flags = [];
    let floor_met = property_get(row, "floor_met");
    if (not(floor_met)) {
      list_add(flags, "SHORT");
    }
    let over_maximum = property_get(row, "over_maximum");
    if (over_maximum) {
      list_add(flags, "LONG");
    }
    let unfinished = property_get(row, "unfinished");
    if (unfinished) {
      list_add(flags, "UNFINISHED");
    }
    let leader_short = property_get(row, "leader_short");
    if (leader_short) {
      list_add(flags, "LEADER");
    }
    let value = property_get(row, "start");
    let value2 = property_get(row, "end");
    let joined = list_join_space(flags);
    let words = [
      value,
      "->",
      value2,
      property_get(row, "lines") + " lines",
      property_get(row, "days") + " days",
      property_get(row, "npcs") + " npcs",
      "area " + property_get(row, "area"),
      "spent " +
        property_get(row, "spent") +
        " of " +
        property_get(row, "arc_turns"),
      joined,
    ];
    let line = list_join_space(words);
    list_add(lines, line);
  }
  let object = property_get(report, "sizes");
  let tally = [
    "sermon " + property_get(report, "sermon_days") + " days",
    "placed " + property_get(report, "npcs_placed") + " npcs",
    "plants " + property_get(report, "plants"),
    "leader_short " + property_get(report, "short_plants"),
    "elder_short " + property_get(report, "elder_short_plants"),
    "sizes " + json_to(object),
  ];
  let item = list_join_space(tally);
  list_add(lines, item);
  return lines;
}
