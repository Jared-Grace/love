import { text_frozen } from "./text_frozen.mjs";
export function js_call_callee_name_try_cases() {
  "Small pieces of code beside the name of the thing each one calls, and nothing where the piece of code either is not a call or calls something that no single name reaches.";
  "This is the reading behind every count of who calls what in the repo, and it is asked about every node in a file, nearly all of which are not calls at all. So nothing has to be an answer rather than a stop.";
  "The second case is the one worth having. A call reached through an object is a call, and it has a callee, but that callee is not one word - so the name that comes back is nothing, and the call is not counted. That is the reading working as written rather than a fault, but it is also the reason a search over callers can come back short, and it is easier to trust the search once the case is written down.";
  "Nothing is written down as nothing rather than as a word, because any word would also be a legal piece of code and the case would then be asking about the wrong thing.";
  "Each piece of code is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a plain call, which names the thing it calls in one word",
      code: text_frozen("g(1)"),
      named: "g",
    },
    {
      name: "a call reached through an object, which no single name reaches",
      code: text_frozen("o.m(1)"),
      named: null,
    },
    {
      name: "a name on its own, which calls nothing",
      code: text_frozen("a"),
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
