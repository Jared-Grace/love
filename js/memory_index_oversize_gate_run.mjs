import { memory_index_name } from "./memory_index_name.mjs";
import { property_set } from "./property_set.mjs";
import { memory_index_lines_oversize } from "./memory_index_lines_oversize.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function memory_index_oversize_gate_run() {
  "Fails when a memory index line spends more characters than the entries it carries are allowed.";
  "This gate is what the ceiling asked for and never had. The constant's own prose says the thing that shortens the lines and the thing that checks them have to agree, or a cleanup lands still failing - and nothing checked them: the only reader of the number was the compressor that shortens by it, so the ceiling was a target with no verdict behind it.";
  "It is not the same question as the whole-file size, which is already gated. That one bounds what every session pays to load the index at all; this one bounds what any single hook may take out of that budget, and the two fail on opposite shapes - a file of many short entries passes here and fails there, one long entry the other way round.";
  "Against zero rather than a record, because the offender is always a line that can be shortened and the shortening is behaviour-preserving. There is nothing here to grandfather: an entry too long to be read as a hook was too long the day it was written.";
  let measured = await memory_index_lines_oversize();
  let oversize = property_get(measured, "oversize");
  let ceiling = property_get(measured, "ceiling");
  let lines = property_get(measured, "lines");
  ("Each line is marked with the note it sits in, so the sorting that decides a deployment reads that and nothing else. Without it the line itself was all there was to read, and a line naming a function would hold out every app shipping that function over a fault in a file no app ships.");
  let at_fault = memory_index_name();
  for (let entry of oversize) {
    property_set(entry, "at_fault", at_fault);
  }
  list_empty_is_assert_json(oversize, {
    hint: "these memory index lines spend more than the ceiling allows the entries on them - move what the note already says out of the hook and leave a pointer, and check the line is not two entries welded together before shortening either of them",
    oversize,
  });
  let r = {
    lines,
    ceiling,
  };
  return r;
}
