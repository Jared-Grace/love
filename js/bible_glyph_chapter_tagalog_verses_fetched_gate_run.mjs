import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_language_verses_fetched_gate_run_check } from "./bible_glyph_chapter_language_verses_fetched_gate_run_check.mjs";
import { bible_glyph_chapter_tagalog_verses } from "./bible_glyph_chapter_tagalog_verses.mjs";
import { bible_glyph_chapter_tagalog_verses_fetched } from "./bible_glyph_chapter_tagalog_verses_fetched.mjs";
export async function bible_glyph_chapter_tagalog_verses_fetched_gate_run() {
  "Gate: the sent-for Tagalog of every picture chapter is the Tagalog the repo holds for it. Read-only.";
  arguments_assert(arguments, 0);
  ("THE WALK ITSELF IS NOT HERE. Every language's whole text lives in one function with a sending-for neighbour, and what can go wrong between the two does not vary by language, so the reasoning and the comparing are in ",
    fn_name("bible_glyph_chapter_language_verses_fetched_gate_run_check"),
    " and this names which pair to ask. Read that one for why the sending is done rather than the source read.");
  ("THE WHOLE TAGALOG IS ONE FILE AND IS SENT FOR AS ONE, which is not how the picture chapters and their Rosetta bands are sent for, and the difference is where the text happens to live rather than a judgment about how much anybody should download.");
  let f_name = fn_name("bible_glyph_chapter_tagalog_verses_fetched");
  let r = await bible_glyph_chapter_language_verses_fetched_gate_run_check(
    "Tagalog",
    f_name,
    bible_glyph_chapter_tagalog_verses,
    bible_glyph_chapter_tagalog_verses_fetched,
  );
  return r;
}
