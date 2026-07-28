export function js_comment_migratable_cases() {
  "Which comments can become a statement standing where they already stand, written down. Having a line to itself is the half that is easy to see and easy to mistake for the whole: the other half is whether the language allows a statement at that place at all, and most of a file is somewhere it does not.";
  "The cases answering false are the ones that earn their keep. A reader that asked only whether the line was the comment's own passed every true case here and turned all three false ones into a file that no longer parses - which is how the fault was found, and why each place a statement cannot go is written down on its own.";
  "The names inside are invented on purpose. A real one written in a string here would be turned into a reference to that function by the canonicalizer, which would quietly change what the case says.";
  let cases = [
    {
      code: "// at the top of the file\nlet counted = 1;",
      migratable: true,
      why: "the first line of a file is the file's own list of statements, so another one can stand there",
    },
    {
      code: "let counted = 1;\n// between two lines\nlet other = 2;",
      migratable: true,
      why: "the plainest case there is, and the one every reading gets right",
    },
    {
      code: "function shown() {\n  // inside a body\n  return 1;\n}",
      migratable: true,
      why: "a body is a block, and a block is a run of statements",
    },
    {
      code: "let record = {\n  // inside a written-out record\n  key: 1,\n};",
      migratable: false,
      why: "between the entries of a record only another entry may stand, and this is the shape that broke it - three files of the example corpus were rewritten into files that would not parse",
    },
    {
      code: "let items = [\n  // inside a list\n  1,\n];",
      migratable: false,
      why: "a list holds values, and a statement is not one of them",
    },
    {
      code: "shown(\n  // among the arguments\n  1,\n);",
      migratable: false,
      why: "an argument is an expression, so the same refusal has to hold one level further in",
    },
    {
      code: "let counted = 1; // sharing the line with code",
      migratable: false,
      why: "where it should move is a judgement about what it explains, so it stays and is counted as work for a person",
    },
    {
      code: "/* a remark in the other spelling */\nlet counted = 1;",
      migratable: false,
      why: "the other spelling may hold several lines and may sit inside an expression, so it is left alone even where a statement would fit",
    },
  ];
  return cases;
}
