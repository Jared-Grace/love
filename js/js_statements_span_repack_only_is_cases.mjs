import { text_frozen } from "./text_frozen.mjs";
export function js_statements_span_repack_only_is_cases() {
  "Written-out pairs of a run of lines and the lines behind it, pinning which runs would come out as a piece holding no work";
  "Each case is two pieces of a single function body, given as text: what would be cut out, and what would stay behind it. They are parsed into statements before the reading is asked, which is the shape the reading takes them in.";
  "The cases fail both ways on purpose. A reading that called every run a repack breaks the four that are honest work; a reading that called none breaks the three that are not.";
  "The names inside are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "two names lifted out of a record and both read behind is the whole shape",
      span: text_frozen(
        'let one = property_get(r, "one");\nlet other = property_get(r, "other");\n',
      ),
      tail: text_frozen("console.log(one + other);\n"),
      repack_only_is: true,
    },
    {
      name: "one line of real work between the lifting is still a repack, because that is what a cut leaves behind",
      span: text_frozen(
        'let one = property_get(r, "one");\nlet other = property_get(r, "other");\nlet sum = add(one, other);\n',
      ),
      tail: text_frozen("console.log(one + other);\n"),
      repack_only_is: true,
    },
    {
      name: "two lines of real work is a function doing something, whatever else it hands back",
      span: text_frozen(
        'let one = property_get(r, "one");\nlet other = property_get(r, "other");\nlet sum = add(one, other);\nlet doubled = add(sum, sum);\n',
      ),
      tail: text_frozen("console.log(one + other);\n"),
      repack_only_is: false,
    },
    {
      name: "nothing lifted at all, so there is no record being taken apart",
      span: text_frozen("let one = add(1, 2);\nlet other = add(3, 4);\n"),
      tail: text_frozen("console.log(one + other);\n"),
      repack_only_is: false,
    },
    {
      name: "one name handed back is not a repack, because one entry is not a record worth rebuilding",
      span: text_frozen('let one = property_get(r, "one");\n'),
      tail: text_frozen("console.log(one);\n"),
      repack_only_is: false,
    },
    {
      name: "lifting that nothing behind reads hands nothing back, so the piece is not a repack but a piece with no product",
      span: text_frozen(
        'let one = property_get(r, "one");\nlet other = property_get(r, "other");\n',
      ),
      tail: text_frozen("console.log(1);\n"),
      repack_only_is: false,
    },
    {
      name: "a line of prose is not work, so it does not rescue a run from being a repack",
      span: text_frozen(
        'let one = property_get(r, "one");\n"WHAT THE RUN IS FOR.";\nlet other = property_get(r, "other");\n',
      ),
      tail: text_frozen("console.log(one + other);\n"),
      repack_only_is: true,
    },
  ];
  return cases;
}
