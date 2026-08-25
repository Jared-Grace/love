import { text_frozen } from "./text_frozen.mjs";
export function js_edit_prose_only_is_cases() {
  "Pairs of pieces an edit is made of - the words going out and the words coming in - each beside whether that edit touches nothing but what is written for a reader.";
  "The cases fail both ways on purpose. A reading that called every edit prose breaks the five that are work or are unreadable; a reading that called none breaks the three that are prose.";
  "Two of the three shapes a paragraph is written in are spelled here, because the reading underneath asks about all three and a corpus that only ever showed the plain one would pass a reading that had quietly forgotten the others.";
  "The pieces inside are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "one paragraph reworded, which is the edit the replacing verb was written for",
      text_before: text_frozen('"What this does, said plainly.";'),
      text_after: text_frozen('"What this does, said more plainly.";'),
      prose_only_is: true,
    },
    {
      name: "one paragraph becoming two, which the adding verb covers",
      text_before: text_frozen('"What this does.";'),
      text_after: text_frozen('"What this does.";\n"And why it is here.";'),
      prose_only_is: true,
    },
    {
      name: "a paragraph written with a name in it rather than letters, which is the second of the three shapes",
      text_before: text_frozen('("The judgment lives in ", fn_name("q"), ".");'),
      text_after: text_frozen(
        '("The judgment lives in ", fn_name("q"), " and nowhere else.");',
      ),
      prose_only_is: true,
    },
    {
      name: "a paragraph replaced by a line that does something, so the file stops meaning what it meant",
      text_before: text_frozen('"What this does.";'),
      text_after: text_frozen("let r = work(state);"),
      prose_only_is: false,
    },
    {
      name: "a line that does something replaced by a paragraph, which is the same edit the other way round",
      text_before: text_frozen("let r = work(state);"),
      text_after: text_frozen('"What this does.";'),
      prose_only_is: false,
    },
    {
      name: "work replaced by work, which is the ordinary hand edit nothing named covers",
      text_before: text_frozen("let r = work(state);"),
      text_after: text_frozen("let r = work_better(state);"),
      prose_only_is: false,
    },
    {
      name: "a piece cut out of the middle of a record, which will not stand on its own and so cannot be called anything",
      text_before: text_frozen('"a": 1,'),
      text_after: text_frozen('"a": 2,'),
      prose_only_is: false,
    },
    {
      name: "nothing going out, which is an addition rather than a replacement and is not prose either",
      text_before: text_frozen(""),
      text_after: text_frozen('"What this does.";'),
      prose_only_is: false,
    },
  ];
  return cases;
}
