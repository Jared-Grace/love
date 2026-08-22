import { g_arc_written_files_or_null } from "./g_arc_written_files_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_person_assert } from "./g_arc_person_assert.mjs";
import { add_1 } from "./add_1.mjs";
import { add } from "./add.mjs";
export async function g_arc_written_gate_run() {
  "Re-ask every arc already stored the questions the store asked it at the door, so a rule written after an arc was still reaches that arc.";
  "FINDS ITS OWN SET rather than being handed one. Every chapter of written arcs there is gets read; a list typed here would go stale the first time a chapter was written and nobody remembered to add it, and a gate that silently stopped looking at a chapter reads exactly like a gate that looked and found nothing wrong.";
  "COUNTS THE LOOKING AND HANDS THE COUNT BACK, because there is no floor to hold it against. Arcs live in storage and storage is not in the repo, so a machine that has written none is not broken and must not fail - which means passing says nothing at all until you can see how many arcs it passed. Zero arcs on a fresh machine is right; zero arcs here, where one is written, is the answer to look at.";
  let files = await g_arc_written_files_or_null();
  let none = null_is(files);
  let empty = {
    chapters: 0,
    arcs: 0,
    turns: 0,
  };
  if (none) {
    return empty;
  }
  let chapters = 0;
  let arcs_checked = 0;
  let turns_total = 0;
  for (let file of files) {
    let chapter = await file_read_json(file);
    let chapter_code = property_get(chapter, "chapter_code");
    let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
    let arcs = property_get(chapter, "arcs");
    chapters = add_1(chapters);
    for (let written of arcs) {
      let index = property_get(written, "index");
      let arc = property_get(written, "arc");
      let counts = await g_arc_person_assert(index, arc, passages);
      let turns = property_get(counts, "turns");
      arcs_checked = add_1(arcs_checked);
      turns_total = add(turns_total, turns);
    }
  }
  let r = {
    chapters,
    arcs: arcs_checked,
    turns: turns_total,
  };
  return r;
}
