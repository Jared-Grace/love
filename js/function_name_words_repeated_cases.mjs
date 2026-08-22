import { arguments_assert } from "./arguments_assert.mjs";
export function function_name_words_repeated_cases() {
  "A name, and whether it says the same run of words twice running, with the reason written down beside each one.";
  "THE NAMES HERE ARE MADE UP ON PURPOSE and none of them is a name this repo answers to. The repo's real offenders are already written down in the record the gate ratchets against, and that record is meant to shrink as they are renamed - a case pinned to one of them would go red at exactly the moment somebody fixed it, which is the one moment a gate must not fight.";
  "THE CASES THAT ANSWER NO ARE THE ONES WORTH HAVING. Finding a word repeated was never the hard half; not calling a name doubled when a word merely comes back later, or when the two words only look alike, was - and each of those is a name a person really would choose.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      f_name: "sermon_list_render_render",
      repeated: true,
      why: "one word saying itself, which is the case the older reading already caught",
    },
    {
      f_name: "bible_glyph_table_bible_glyph_table_because",
      repeated: true,
      why: "three words saying themselves, which is what comes out when a command joins a holder's name to a piece already spelled with that holder's name in it. The older reading walked past every one of these, because the two words either side of the seam are different words",
    },
    {
      f_name: "html_scroll_wait_wait_wait",
      repeated: true,
      why: "the same word three times running is still the same word twice running, found at the first pair rather than counted",
    },
    {
      f_name: "bible_glyph_table_because",
      repeated: false,
      why: "the ordinary case: every word narrows what the words before it opened",
    },
    {
      f_name: "bible_glyph_chapters_glyphs_write",
      repeated: false,
      why: "two words that merely look alike are left alone, because a pair that is nearly the same may be a real narrowing and only a reader can tell",
    },
    {
      f_name: "list_first_word_list",
      repeated: false,
      why: "a word coming back later in a name is ordinary and often right, so only a run standing immediately beside itself is asked about",
    },
    {
      f_name: "sermon_list_render_sermon_list",
      repeated: false,
      why: "a whole run coming back later is the same allowance one word further out, and it is the case that would be lost by asking whether a run occurs twice anywhere rather than twice running",
    },
    {
      f_name: "not",
      repeated: false,
      why: "a name of one word has nothing to say twice, and the walk over lengths never starts",
    },
  ];
  return cases;
}
