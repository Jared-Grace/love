import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_sermon_chapter_groups } from "./g_sermon_chapter_groups.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { list_add } from "./list_add.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function g_arc_lengths(chapter) {
  "Works out how long each arc in one chapter should be, from the settings and the chapter's own passage grouping - so the npc count falls out as the length of the list rather than being chosen.";
  "Everything is measured in CONVERSATIONS, not in matches, because the thing that can fail to schedule is days: an npc is talked to once a day, so an arc of nine conversations needs nine days and a chapter only has as many days as it has passage groups.";
  "Three ceilings sit on the longest arc and the smallest wins - the settings' own maximum, a quarter of the arc budget so no one person eats the chapter, and the chapter's day count.";
  "Lengths descend by one from that ceiling and then sit at the minimum, longest first, because a long arc is the hardest thing to place and should be placed while the space is empty. Whatever is left at the end is a short tail arc, which always fits.";
  let settings = g_generation_settings();
  let groups = await g_sermon_chapter_groups(chapter);
  let days = groups.length;
  let lines = await g_sermon_chapter_lines(chapter);
  let matches = g_passage_match_count(lines);
  let question_share = multiply(matches, settings.question_matches_percent);
  let divided = divide(question_share, 100);
  let question_matches = Math.round(divided);
  let arc_matches = subtract(matches, question_matches);
  let divided2 = divide(arc_matches, settings.conversation_turns);
  let conversations = Math.floor(divided2);
  let quarter = divide(arc_matches, 4);
  let divided3 = divide(quarter, settings.conversation_turns);
  let cap_share = Math.floor(divided3);
  let cap = Math.min(settings.arc_conversations_maximum, cap_share, days);
  let minimum = settings.arc_conversations_minimum;
  let lengths = [];
  let remaining = conversations;
  let length = cap;
  for (let step = 0; less_than(step, conversations); step++) {
    if (less_than(remaining, minimum)) {
      break;
    }
    if (less_than(length, minimum)) {
      break;
    }
    let take = Math.min(length, remaining);
    list_add(lengths, take);
    remaining = subtract(remaining, take);
    if (greater_than(length, minimum)) {
      length = subtract(length, 1);
    }
  }
  if (greater_than(remaining, 0)) {
    list_add(lengths, remaining);
  }
  let npcs = lengths.length;
  let divided4 = divide(settings.day_matches, settings.conversation_turns);
  let v = Math.ceil(divided4);
  let npcs_minimum = Math.max(v, settings.npcs_available_minimum);
  let npcs_floor_met = greater_than_equal(npcs, npcs_minimum);
  let r = {
    chapter,
    days,
    lines,
    matches,
    question_matches,
    arc_matches,
    conversations,
    cap,
    lengths,
    npcs,
    npcs_minimum,
    npcs_floor_met,
  };
  return r;
}
