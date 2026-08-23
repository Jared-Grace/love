import { text_frozen } from "./text_frozen.mjs";
export function js_object_property_text_set_cases() {
  "Written-out code, a property name and a new word for each piece, pinning what the file reads like afterwards - or that the step refused to touch it.";
  "THE PRINTED CODE IS WHAT IS COMPARED, AND THAT IS THE ONE THING THIS CORPUS EXISTS FOR. The printer writes a word back out from the spelling it was read in as, not from the value, so a step that set only the value would leave every one of these files byte for byte what it was and throw nothing while doing it. A case that asked whether the tree now held the right value would pass on exactly the bug the step was written to avoid.";
  "A REFUSAL IS AN ANSWER AND IS WRITTEN DOWN AS ONE. Three of these say the step must not touch the file at all, and those are its whole safety: a name that is not there means the caller asked for something that does not exist, a name written twice means the caller cannot have meant both, and a property holding a call means writing a word there would throw code away. A step that quietly did nothing, or quietly did one of the two, would go unnoticed for as long as nobody read the file afterwards.";
  "The word standing in for a refusal is a plain one rather than the message that came with it. What is being pinned is that the step stopped, and a case that spelled out the whole complaint would have to be rewritten every time the wording of a hint was improved - which would teach whoever hit that to change the case rather than to read it.";
  "The keys here are the words the pictures are filed under, because that is the caller this step was built for: a box at the bottom of a review sheet that saves what to ask for next. Nothing about the step is about pictures - it would be the same for any object of words - but a corpus written in the real caller's words is one anybody can check against a file they have open.";
  let cases = [
    {
      name: "a plain name gets the new word, and the printed spelling changes with it",
      code: text_frozen('let r = {\n  pray: "old wording",\n};'),
      key: text_frozen("pray"),
      text: text_frozen("new wording"),
      after: text_frozen('let r = {\n  pray: "new wording"\n};\n'),
    },
    {
      name: "a name written in quotes is found too, and stays in quotes",
      code: text_frozen('let r = {\n  "pray": "old wording",\n};'),
      key: text_frozen("pray"),
      text: text_frozen("new wording"),
      after: text_frozen('let r = {\n  "pray": "new wording"\n};\n'),
    },
    {
      name: "the properties either side of it are left exactly as they were",
      code: text_frozen(
        'let r = {\n  cross: "a",\n  pray: "old",\n  dye: "c",\n};',
      ),
      key: text_frozen("pray"),
      text: text_frozen("new"),
      after: text_frozen(
        'let r = {\n  cross: "a",\n  pray: "new",\n  dye: "c"\n};\n',
      ),
    },
    {
      name: "a name inside an object inside an object is reached",
      code: text_frozen('let r = {\n  outer: {\n    pray: "old",\n  },\n};'),
      key: text_frozen("pray"),
      text: text_frozen("new"),
      after: text_frozen('let r = {\n  outer: {\n    pray: "new"\n  }\n};\n'),
    },
    {
      name: "a new word with quote marks in it is spelled so the file still parses",
      code: text_frozen('let r = {\n  pray: "old",\n};'),
      key: text_frozen("pray"),
      text: text_frozen('a "quoted" word'),
      after: text_frozen('let r = {\n  pray: "a \\"quoted\\" word"\n};\n'),
    },
    {
      name: "a new word with a line break in it is spelled as a break rather than written across two lines",
      code: text_frozen('let r = {\n  pray: "old",\n};'),
      key: text_frozen("pray"),
      text: text_frozen("line\nbreak"),
      after: text_frozen('let r = {\n  pray: "line\\nbreak"\n};\n'),
    },
    {
      name: "a name that is not in the file is refused rather than quietly done nothing about",
      code: text_frozen('let r = {\n  pray: "old",\n};'),
      key: text_frozen("cross"),
      text: text_frozen("new"),
      after: text_frozen("refused"),
    },
    {
      name: "a name two different objects both write is refused rather than one of them picked",
      code: text_frozen(
        'let a = {\n  pray: "one",\n};\nlet b = {\n  pray: "two",\n};',
      ),
      key: text_frozen("pray"),
      text: text_frozen("new"),
      after: text_frozen("refused"),
    },
    {
      name: "a property holding a call is refused rather than having the call thrown away",
      code: text_frozen('let r = {\n  pray: combine("a"),\n};'),
      key: text_frozen("pray"),
      text: text_frozen("new"),
      after: text_frozen("refused"),
    },
  ];
  return cases;
}
