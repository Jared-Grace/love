import { text_frozen } from "./text_frozen.mjs";
export function js_call_arguments_get_cases() {
  "Written-out calls beside the kinds of the things handed over in each one, in the order they are written, and the word for having stopped where what was given is not a call at all.";
  "A call with nothing in its brackets answers with an empty list, and something that is not a call is refused. Those two are the pair that costs something to keep apart: from above, an empty list and a failure to find any arguments read the same, so a reading that had started refusing empty calls would look exactly like a reading that could not find their arguments. They are told apart here and nowhere else, which is why the stop is written as a word rather than as a list of no arguments.";
  "What is being called is not looked at. The call through a member answers the same way as the plain one, because the only question asked is whether the thing given is a call, and a call reached through a name and a dot is still a call.";
  "A spread comes back as one thing, standing as it is, rather than opened out into what it spreads. So counting what comes back counts the spread as one argument and not as however many it turns into when the call is actually made - which is the difference between reading the written call and predicting the call.";
  "The two that are refused are chosen to be things that really turn up where a call is expected - a plain name and a plain value - rather than nonsense, since those are what a reading above hands down when it has found the wrong node.";
  "Each call is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "the things handed over, in the order they are written",
      code: text_frozen("g(1, a)"),
      kinds: ["Literal", "Identifier"],
    },
    {
      name: "a call with nothing in its brackets",
      code: text_frozen("g()"),
      kinds: [],
    },
    {
      name: "a call reached through a name and a dot, which is still a call",
      code: text_frozen("o.m(1)"),
      kinds: ["Literal"],
    },
    {
      name: "a spread, handed back as one thing rather than opened out",
      code: text_frozen("g(...xs)"),
      kinds: ["SpreadElement"],
    },
    {
      name: "a plain name, which is not a call",
      code: text_frozen("a"),
      kinds: "refused",
    },
    {
      name: "a plain value, which is not a call either",
      code: text_frozen("1"),
      kinds: "refused",
    },
  ];
  return cases;
}
