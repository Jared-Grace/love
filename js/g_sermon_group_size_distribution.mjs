import { g_sermon_chapters_passage_lines } from "./g_sermon_chapters_passage_lines.mjs";
import { list_group_sequential_under } from "./list_group_sequential_under.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
export async function g_sermon_group_size_distribution(ceiling) {
  "greedily group every written chapter's passages under a line ceiling, then tally how many resulting blocks have each passage-count; shows the block-size spread a ceiling produces (a mechanical maximum: real topic-aware grouping cuts blocks smaller)";
  let chapters = await g_sermon_chapters_passage_lines();
  let tally = {};
  let blocks = 0;
  for (let lines of chapters) {
    let groups = list_group_sequential_under(lines, ceiling);
    for (let group of groups) {
      let size = group.length;
      let prev = property_get_or(tally, size, 0);
      let next = prev + 1;
      property_set(tally, size, next);
      blocks = blocks + 1;
    }
  }
  let r = {
    ceiling,
    blocks,
    tally,
  };
  return r;
}
