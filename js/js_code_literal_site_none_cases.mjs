import { text_frozen } from "./text_frozen.mjs";
export function js_code_literal_site_none_cases() {
  "Files written out small, each one saying whether a given word is written";
  "anywhere in it as a string of its own.";
  "The false cases are the ones that earn their keep. A word standing as a value,";
  "as a field name, or as a whole sentence is a real site each - three different";
  "jobs, and none of them is what this withholds. Judging otherwise would empty a";
  "report of everything it was built to find.";
  "The true cases are the ones nothing else in this repo could answer. The same";
  "letters inside a longer sentence, inside a comment, or inside a longer word";
  "are all found by a search of the file's text and are none of them a written";
  "constant, and the two readings beside this one see them as a file with no";
  "mentions at all - which reads to those as nothing to withhold.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen(
        '("one string (\\"chosen\\", passed as an argument) and returns a list");',
      ),
      literal: "chosen",
      site_none: true,
      why: "quoted inside a sentence that explains an argument, which is the case this was built for - there is nowhere in a run of letters inside somebody's sentence for a call to stand",
    },
    {
      code: text_frozen('let held = "unchosen";'),
      literal: "chosen",
      site_none: true,
      why: "the letters are inside a longer word, so a search of the file's text finds them and no written string of the repo holds that value",
    },
    {
      code: text_frozen("let held = 1;\n"),
      literal: "chosen",
      site_none: true,
      why: "a file that does not carry the word at all answers the same way as one that only appears to",
    },
    {
      code: text_frozen('let held = "chosen";'),
      literal: "chosen",
      site_none: false,
      why: "bound to a name, which is the plainest way a word can be a written constant",
    },
    {
      code: text_frozen('property_set(record, "chosen", 1);'),
      literal: "chosen",
      site_none: false,
      why: "a field name is a real site - withholding it is a judgment the reading beside this one makes, and it must be given the chance to make it",
    },
    {
      code: text_frozen('("chosen");'),
      literal: "chosen",
      site_none: false,
      why: "a whole sentence saying only that word is a real site too, and the sentence reading is the one that withholds it",
    },
    {
      code: text_frozen('("mentions chosen in prose");\nlet held = "chosen";'),
      literal: "chosen",
      site_none: false,
      why: "one mention is inside a sentence and the other is written out, so the file has a site and stays on offer",
    },
  ];
  return cases;
}
