import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_module_nt(chapter_code) {
  arguments_assert(arguments, 1);
  ("Builds the chapter file scripts/temp/bible_glyph_chapter_<code>.mjs out of the verses in scripts/temp/<CODE>draft.txt and the prose in scripts/temp/<CODE>prose.txt, and returns the path it wrote.");
  ("The prose file holds one paragraph per line, the first line being the one-sentence description. The verses are copied from the draft as they are, so the tally audit afterwards checks only what was edited by hand in between.");
  let books = {
    MAT: "Matthew",
    MRK: "Mark",
    LUK: "Luke",
    JHN: "John",
  };
  let file_path = path_join(["scripts", "temp", chapter_code + "draft.txt"]);
  let draft = await file_read(file_path);
  let json_line = draft.split("\n=== JSON\n")[1].trim();
  let verses = json_from(json_line);
  let file_path2 = path_join(["scripts", "temp", chapter_code + "prose.txt"]);
  let prose_text = await file_read(file_path2);
  function lambda(l) {
    let r = l.trim();
    return r;
  }
  function lambda2(l) {
    let neq = not_equal(l, "");
    return neq;
  }
  let prose = prose_text.split("\n").map(lambda).filter(lambda2);
  let fn = "bible_glyph_chapter_" + chapter_code.toLowerCase();
  let v2 = chapter_code.slice(3);
  let reference = books[chapter_code.slice(0, 3)] + " " + Number(v2);
  let lines = [];
  lines.push("export function " + fn + "() {");
  for (let p of prose) lines.push("  " + json_to(p) + ";");
  lines.push("  let chapter = {");
  lines.push("    chapter_code: " + json_to(chapter_code) + ",");
  lines.push("    reference: " + json_to(reference) + ",");
  lines.push("    verses: [");
  for (let v of verses) {
    function lambda3(w) {
      let r2 = w.replace(/^‘+/, "").replace(/’+([^A-Za-z0-9]*)$/, "$1");
      return r2;
    }
    function lambda4(w) {
      let neq2 = not_equal(w, "");
      return neq2;
    }
    let words = v.words.map(lambda3).filter(lambda4);
    lines.push("      {");
    lines.push("        verse_number: " + Number(v.verse_number) + ",");
    lines.push("        words: [");
    for (let w of words) lines.push("          " + json_to(w) + ",");
    lines.push("        ],");
    lines.push("      },");
  }
  lines.push("    ],");
  lines.push("  };");
  lines.push("  return chapter;");
  lines.push("}");
  let out_path = path_join(["scripts", "temp", fn + ".mjs"]);
  await file_overwrite(out_path, lines.join("\n") + "\n");
  return out_path;
}
