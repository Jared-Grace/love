import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_to } from "./json_to.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_passage_words } from "./g_sermon_passage_words.mjs";
import { bible_interlinear_verse } from "./bible_interlinear_verse.mjs";
import { strongs_greek_definition } from "./strongs_greek_definition.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
("Inspect a passage for study/drafting: prints the original, English, generated draft,");
("numbered tokens (indices for the matching game), and the word-by-word interlinear");
('(original | parsing | gloss ⟵ Strong\'s root definition). key is "5" or grouped "19,20".');
export async function g_sermon_pull(chapter, key) {
  let passages = await g_sermon_generate_chapter_passages_get(chapter);
  function lambda(x) {
    let left = x.verse_numbers.join(",");
    let eq = equal(left, key);
    return eq;
  }
  let p = passages.find(lambda);
  console.log("chapter:", chapter);
  let json = json_to(p.verse_numbers);
  console.log("vv:", json);
  console.log("GREEK  :", p.original);
  console.log("ENGLISH:", p.text);
  let v2 = p.sermon.replace(/\\r\\n/g, " / ");
  console.log("GENERATED:", v2);
  console.log("--- tokens ---");
  let toks = g_sermon_passage_words(p.text);
  function lambda2(w, i) {
    let r = i + ":" + w;
    return r;
  }
  let v3 = toks.map(lambda2).join("  ");
  console.log(v3);
  console.log(
    "--- interlinear: original | parsing | gloss  ⟵ Strong's root definition ---",
  );
  let book_code = chapter.slice(0, 3);
  let book = g_verify_book_name(book_code);
  let v4 = chapter.slice(3);
  let chapter_number = Number(v4);
  for (let v of p.verse_numbers) {
    let ref = book + " " + chapter_number + ":" + v;
    console.log("[" + ref + "]");
    let words = await bible_interlinear_verse(ref);
    for (let w of words) {
      let def = w.strong ? await strongs_greek_definition(w.strong) : null;
      let root = def ? (def.strongs_def || "").trim().replace(/\s+/g, " ") : "";
      if (greater_than(root.length, 110)) {
        root = root.slice(0, 110) + "…";
      }
      console.log(
        "  " +
          w.original.padEnd(13) +
          " " +
          w.parsing.padEnd(11) +
          " " +
          w.gloss.padEnd(15) +
          (root ? "  ⟵ " + root : ""),
      );
    }
  }
}
