import { bible_glyph_chapters_language_write } from "./bible_glyph_chapters_language_write.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_chapters_urdu_write() {
  "Fetches the Urdu of every picture Bible chapter and writes it out as a committed function, so the key band can print a plain translation the reader already speaks.";
  "IT IS THE SECOND LANGUAGE AND IT IS WHY THE FIRST ONE WAS SPLIT IN TWO. The Tagalog writer says in its own prose that all of the doing moved next door and only the three choices stayed behind, so that a second language would be a choice and not a rewrite. Until this file existed that was a claim: the Urdu chapters were on disk with no command naming them, so the one thing the split was for - rebuilding a language after a chapter is added - could be done for Tagalog and not for Urdu. Three lines is what the claim was worth.";
  "AND THE MISSING COMMAND WAS FOUND BY A GATE AND NOT BY A READER. Two picture chapters were written, the reveal gate reported both languages short of the same three codes, and only one of the two could be repaired by running something. A language that can be fetched and cannot be re-fetched goes stale silently, because a band that is absent looks exactly like a chapter nobody translated.";
  "THE CODE IS TWO LETTERS HERE AND THREE FOR TAGALOG, which is the whole reason the code is a choice made in a named place rather than derived from the language's name. Urdu has a two-letter code and Tagalog does not, and the folder each resolves to on somebody's server is not a fact either of these functions should know.";
  let language_code = "ur";
  let written_name = fn_name("bible_glyph_chapters_urdu");
  let language_word = "Urdu";
  let report = await bible_glyph_chapters_language_write(
    language_code,
    written_name,
    language_word,
  );
  return report;
}
