export function text_dispatcher_command_names_cases() {
  "Which pieces of writing spell out a command to run and which do not, written down. The sweep built on this walks every function in the repo, where a reader that collected nothing and a repo telling nobody to run anything look exactly the same, so the reading itself is pinned here instead.";
  "The cases answering with nothing carry the weight. A reader that collected every word after the dispatcher would pass a corpus of plain commands alone, and the two shapes it would wrongly collect are both here: a line that ends at the dispatcher and joins the name on as a reference, which a rename already follows, and a word holding letters a name cannot hold.";
  "The names inside are invented on purpose, and this is the one corpus where that matters twice over. A real name written here would be turned into a reference to that function by the canonicalizer, which would quietly change what the case says - and an invented one would be read by the sweep as a command naming nothing, which is why the sweep is told to pass every corpus by.";
  let cases = [
    {
      text: "asserts, so it can join the gate - run: node scripts/ai.mjs run_me_to_check",
      names: ["run_me_to_check"],
      why: "a docstring telling a reader how to run the thing it describes - the whole shape this exists to watch, and the case a reader that gives up and answers nothing fails",
    },
    {
      text: 'the line reads "  to repair   node scripts/ai.mjs " + repair_name',
      names: [],
      why: "the name is joined on as a reference rather than written out, so a rename already carries it and there is nothing here that can go stale",
    },
    {
      text: "run node scripts/ai.mjs Run_Me_Loudly to see it",
      names: [],
      why: "a name is lower case letters, digits and underscores, and a word holding anything else names nothing - it would read as a dead command forever while never having been one",
    },
    {
      text: "node scripts/ai.mjs first_command then node scripts/ai.mjs second_command then node scripts/ai.mjs first_command again",
      names: ["first_command", "second_command"],
      why: "a command told twice is one command, in the order the writing put it, so one piece of prose is not reported twice for repeating itself",
    },
    {
      text: "the dispatcher lives at scripts/ai.mjs and takes a full name",
      names: [],
      why: "writing about the dispatcher is not telling anyone to run something, and the word after it here is an ordinary word - the whole command has to be spelled before anything is claimed",
    },
  ];
  return cases;
}
