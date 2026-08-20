import { text_frozen } from "./text_frozen.mjs";
export function js_identifier_name_try_cases() {
  "Small pieces of code beside the name the name-reading gets out of each one, and nothing where there is no name to get.";
  "The reading is asked about whatever a caller is holding rather than about something already known to be a name, so answering nothing is not a failure and must not be a stop. Every case here except the first is a thing with no name in it, and each has to come back with nothing.";
  "Nothing is written down as nothing rather than as a word, because a word naming nothing would be a piece of code as well - the word for nothing is a legal name - and the case would then be asking about the wrong thing. A piece of code and no piece of code are told apart by being different in kind, not by being different words.";
  "The direction that hurts is a name coming back where none was asked for, since every caller here treats a name as proof it is holding one and goes on to look the name up.";
  "Each piece of code is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a name, which is the whole of what this is for",
      code: text_frozen("a"),
      named: "a",
    },
    {
      name: "a number, which has no name in it",
      code: text_frozen("1"),
      named: null,
    },
    {
      name: "a call, whose own name belongs to the thing called and not to the call",
      code: text_frozen("g(1)"),
      named: null,
    },
    {
      name: "nothing at all",
      code: null,
      named: null,
    },
  ];
  return cases;
}
