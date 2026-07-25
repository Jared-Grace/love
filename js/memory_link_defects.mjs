import { memory_links_unresolved } from "./memory_links_unresolved.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { memory_dangling_links } from "./memory_dangling_links.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { memory_link_verdict } from "./memory_link_verdict.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function memory_link_defects() {
  "Every double-bracket link in memory that is wrong rather than merely unwritten. Two faults: a link naming a note that does not exist and was not marked as one to write, and a marker still sitting on a link whose note has since been written. Read-only.";
  "The marker is what makes this gateable at all. An unresolved link is allowed on purpose by the instructions, and nothing in its shape says whether it was meant, so the writer says so - and once they can, a link that says nothing is a slip.";
  "The judging is next door and written down against cases, because every link here is innocent today and a sweep over them would come back empty whether the judging worked or was never asked.";
  let unresolved = await memory_links_unresolved();
  let stems = await memory_note_stems();
  let typo = await memory_dangling_links();
  function link_of(result) {
    let link = property_get(result, "link");
    return link;
  }
  let typo_links = list_map(typo, link_of);
  let defects = [];
  for (let link of unresolved) {
    let verdict = memory_link_verdict(link, stems, typo_links);
    let innocent = null_is(verdict);
    if (innocent) {
      continue;
    }
    list_add(defects, verdict);
  }
  return defects;
}
