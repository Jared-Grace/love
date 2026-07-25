import { memory_frontmatter_defects } from "./memory_frontmatter_defects.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function memory_frontmatter_gate_run() {
  "Gate: every memory note's header must say what the memory instructions require - its own file name, a description, and one of the four kinds. Nothing else in the build reads these fields, so a note written with a wrong one is not caught anywhere; it simply stops being findable in the way its writer expected.";
  "Held here rather than left to whoever remembers, because a header is written once and read by every session afterwards. A name that disagrees with the file breaks the identity links resolve against, and it breaks it silently: the note is still on disk, still in the index, and the link to it still looks right.";
  "Clearing a failure is one edit: fix the field, or for a wrong name let the repair next door rewrite it from the file name.";
  let defects = await memory_frontmatter_defects();
  for (let defect of defects) {
    let file = property_get(defect, "file");
    let kind = property_get(defect, "kind");
    let declared = property_get(defect, "declared");
    console.log(kind + "  " + file + "  says: " + declared);
  }
  console.log("header defects: " + defects.length);
  if (greater_than(defects.length, 0)) {
    throw new Error(
      "memory frontmatter gate: " + defects.length + " to reconcile",
    );
  }
  let r = {
    defects: 0,
  };
  return r;
}
