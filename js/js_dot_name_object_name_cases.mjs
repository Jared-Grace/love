export function js_dot_name_object_name_cases() {
  "Written-out expressions and the thing each one reads the name of, so the reading is checked against writing somebody chose rather than against whatever the repo happens to hold today.";
  "The refusals carry the weight. Every one of them is an expression that looks like a name being read and is not, and a reading that let any of them through would hand back a word that no rename follows - which is the whole failure this reading exists to prevent.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      code: "app_a_paste.name",
      object: "app_a_paste",
      why: "a function's own name asked for as a word - this is the spelling a rename follows",
    },
    {
      code: 'fn_name("app_a_paste")',
      object: null,
      why: "the same word asked for the other way - a call, not a dot, so this reading is not the one that answers it",
    },
    {
      code: "person.age",
      object: null,
      why: "a dot that is about something other than a name",
    },
    {
      code: 'person["name"]',
      object: null,
      why: "the name reached by a computed dot - what stands in the brackets is worked out as the code runs, so nothing here can be read off the page",
    },
    {
      code: "list_first(people).name",
      object: null,
      why: "a name read off the answer to a call - there is no word standing before the dot to hand back",
    },
    {
      code: "app_a_paste",
      object: null,
      why: "a plain word with no dot at all, which is what most nodes handed here are",
    },
  ];
  return cases;
}
