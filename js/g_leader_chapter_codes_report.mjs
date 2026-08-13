import { list_sort_text } from "./list_sort_text.mjs";
import { g_generation_plan } from "./g_generation_plan.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { g_leader_chapter_codes } from "./g_leader_chapter_codes.mjs";
import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
export async function g_leader_chapter_codes_report() {
  "for every written chapter, how much Scripture a leader arc standing on it may draw on and how often each passage would have to answer; the check that the reach list is still doing its job";
  "IT IS THE BAND, MEASURED. A plant asks a passage to answer four to six times, and the number that matters is the top - past about six an elder is repeating himself. So this divides the plant's leader turns by the passages the reach reaches, and names every chapter still above the band. Those are the chapters that want another sermon written or another reach judged, and there is no other way to see them: a chapter's own passage count looks fine right up until the reach is asked for.";
  "IT READS WHAT IS WRITTEN, not what is planned, so its answer moves as sermons land. Writing 2JN and 3JN changes JUD's row without anyone editing this.";
  let plan = g_generation_plan();
  let turns = property_get(plan, "leader_turns");
  let codes = await g_sermon_chapter_codes_all();
  let ordered = list_sort_text(codes);
  let rows = [];
  let over = [];
  for (let code of ordered) {
    let reach = await g_leader_chapter_codes(code);
    let alone = await g_sermon_chapter_passages(code);
    let passages = 0;
    for (let one of reach) {
      let its = await g_sermon_chapter_passages(one);
      passages = add(passages, its.length);
    }
    let uses = divide(turns, passages);
    let row = {
      code,
      chapters: reach.length,
      passages_alone: alone.length,
      passages: passages,
      uses: uses,
    };
    list_add(rows, row);
    let above = greater_than(uses, 6);
    if (above) {
      list_add(over, code);
    }
  }
  let r = {
    turns,
    rows,
    above_the_band: over,
  };
  return r;
}
