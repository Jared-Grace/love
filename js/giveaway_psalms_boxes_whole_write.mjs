import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_boxes_whole_report } from "./giveaway_psalms_boxes_whole_report.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { giveaway_psalms_boxes_whole_path } from "./giveaway_psalms_boxes_whole_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function giveaway_psalms_boxes_whole_write(folder_media) {
  arguments_assert(arguments, 1);
  ("$plain folder_media");
  ("Asks every given-away box what it is holding, and writes the answer down with the day it was asked and the boxes it was asked about, so a check can read the answer later without asking again.");
  ("★ THE ASKING AND THE JUDGING ARE DELIBERATELY TWO COMMANDS, BECAUSE THE ASKING TAKES HALF AN HOUR AND NEEDS ANOTHER MACHINE. The repo-wide run of gates already takes a quarter of an hour, and a gate that reached across the world would add more than that again and would go red on a bad line rather than on a fault - which is the worst thing a gate can do, because a reader who has seen a gate cry wolf stops reading it. So this is run by hand, or by whatever is sending, and the gate beside it only reads what this left.");
  ("★ THE BOXES IT WAS ASKED ABOUT ARE WRITTEN DOWN, NOT ONLY THE VERDICT. A verdict alone cannot say whether it is about the boxes that exist now: five boxes sent since this was written would be unjudged, and a list of no faults would read as though they had passed. With the names here, the check next door can work out for itself which boxes nothing has ever said anything about, and that is a thing it can derive rather than a thing anybody has to guess.");
  ("★ THE DAY IS WRITTEN DOWN AND NOTHING HERE DECIDES HOW OLD IS TOO OLD. A number of days would be invented, and an invented number either fails on an ordinary afternoon or never fails at all. The day is for a person reading the file; what makes the check bite is a box with no verdict, which is a fact rather than a threshold.");
  ("Writing over the last answer is right, because there is nothing to learn from an older asking than the newest one: a box either holds what it should today or it does not, and what it held last week changes nothing anybody would do.");
  let report = await giveaway_psalms_boxes_whole_report(folder_media);
  let gone = await giveaway_psalms_chapters_uploaded();
  let asked_on = date_today_iso();
  let found = {
    asked_on: asked_on,
    gone: gone,
    gone_count: report.gone_count,
    whole_count: report.whole_count,
    filing_count: report.filing_count,
    short_count: report.short_count,
    unanswered_count: report.unanswered_count,
    whole: report.whole,
    short: report.short,
    filing: report.filing,
    unanswered: report.unanswered,
  };
  let path = giveaway_psalms_boxes_whole_path();
  await file_overwrite_json(path, found);
  let r = {
    path: path,
    asked_on: asked_on,
    gone_count: report.gone_count,
    whole_count: report.whole_count,
    filing_count: report.filing_count,
    short_count: report.short_count,
    unanswered_count: report.unanswered_count,
  };
  return r;
}
