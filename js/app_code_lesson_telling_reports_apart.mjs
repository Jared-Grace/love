import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { ternary } from "./ternary.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_telling_reports_apart(reports) {
  arguments_assert(arguments, 1);
  ("the reports over a lesson's telling, split into the ones naming a fault and the ones nothing could be judged about, with every unjudged lesson said out loud as it is set aside.");
  ("A report whose telling came out empty is not a lesson that passed. It is the check saying it never found where the lesson does its telling, and a lesson quietly counted as clean because nothing was found to look at is the one failure that would make the whole check worthless.");
  ("Both gates over these reports have to make that separation and both have to name the lessons it happened to. Made twice it can come to be made differently, and a let-off that grows on one side and not the other is the kind of drift nothing would go red on.");
  let offenders = [];
  let unjudged = [];
  for (let report of reports) {
    let blind = property_list_empty_is(report, "telling");
    let side = ternary(blind, unjudged, offenders);
    list_add(side, report);
  }
  for (let report of unjudged) {
    let lesson = property_get(report, "lesson");
    console.log("NO TELLING FOUND  " + lesson);
  }
  let apart = {
    offenders,
    unjudged,
  };
  return apart;
}
