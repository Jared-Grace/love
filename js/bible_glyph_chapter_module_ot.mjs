import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
export async function bible_glyph_chapter_module_ot(chapter_code) {
  arguments_assert(arguments, 1);
  ("Builds the Old Testament chapter file scripts/temp/bible_glyph_chapter_<code>.mjs out of the verses in scripts/temp/<CODE>draft.txt and the prose in scripts/temp/<CODE>prose.txt, returned as text. It only reads, so it runs in the read-only sandbox, and the text is kept as scripts/temp/bible_glyph_chapter_<code>.mjs.");
  ("The prose file holds one paragraph per line, the first line being the one-sentence description. The verses are copied from the draft as they are, so the tally audit afterwards checks only what was edited by hand in between. It is the New Testament twin with the Old Testament's book names.");
  let books = {
    GEN: "Genesis",
    EXO: "Exodus",
    LEV: "Leviticus",
    NUM: "Numbers",
    DEU: "Deuteronomy",
    JOS: "Joshua",
    JDG: "Judges",
    RUT: "Ruth",
    "1SA": "1 Samuel",
    "2SA": "2 Samuel",
    "1KI": "1 Kings",
    "2KI": "2 Kings",
    "1CH": "1 Chronicles",
    "2CH": "2 Chronicles",
    EZR: "Ezra",
    NEH: "Nehemiah",
    EST: "Esther",
    JOB: "Job",
    PSA: "Psalm",
    PRO: "Proverbs",
    ECC: "Ecclesiastes",
    SNG: "Song of Solomon",
    ISA: "Isaiah",
    JER: "Jeremiah",
    LAM: "Lamentations",
    EZK: "Ezekiel",
    DAN: "Daniel",
    HOS: "Hosea",
    JOL: "Joel",
    AMO: "Amos",
    OBA: "Obadiah",
    JON: "Jonah",
    MIC: "Micah",
    NAM: "Nahum",
    HAB: "Habakkuk",
    ZEP: "Zephaniah",
    HAG: "Haggai",
    ZEC: "Zechariah",
    MAL: "Malachi",
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
  let module_text = lines.join("\n");
  return module_text;
}
