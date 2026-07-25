import { g_sermon_chapter_passages_for_grouping } from "./g_sermon_chapter_passages_for_grouping.mjs";
import { g_sermon_block_line_soft } from "./g_sermon_block_line_soft.mjs";
import { g_sermon_block_line_hard } from "./g_sermon_block_line_hard.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_groups_validate(chapter, groups) {
  "check a proposed grouping of a chapter: every passage used exactly once in reading order (contiguous + complete), and each block within the hard line cap; blocks over the soft cap are flagged, not failed";
  let passages = await g_sermon_chapter_passages_for_grouping(chapter);
  let expected_refs = list_map_property(passages, "ref");
  let lines_by_ref = {};
  for (let passage of passages) {
    let ref = property_get(passage, "ref");
    let lines = property_get(passage, "lines");
    property_set(lines_by_ref, ref, lines);
  }
  let soft = g_sermon_block_line_soft();
  let hard = g_sermon_block_line_hard();
  let errors = [];
  let flags = [];
  let flat = [];
  for (let group of groups) {
    let total = 0;
    for (let ref of group) {
      list_add(flat, ref);
      let n = property_get_or(lines_by_ref, ref, 0);
      total = total + n;
    }
    let label = list_join_comma(group);
    if (total > hard) {
      let message = "block [" + label + "] = " + total + " lines exceeds the hard cap " + hard;
      list_add(errors, message);
    } else if (total > soft) {
      let message = "block [" + label + "] = " + total + " lines is over the soft cap " + soft + " — must be compelling";
      list_add(flags, message);
    }
  }
  let expected_seq = list_join_space(expected_refs);
  let got_seq = list_join_space(flat);
  let sequence_ok = expected_seq === got_seq;
  if (!sequence_ok) {
    let message = "passages not covered exactly once in order; expected [" + expected_seq + "] but got [" + got_seq + "]";
    list_add(errors, message);
  }
  let ok = errors.length === 0;
  let r = { ok, errors, flags };
  return r;
}
