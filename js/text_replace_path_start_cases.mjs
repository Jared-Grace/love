import { arguments_assert } from "./arguments_assert.mjs";
export function text_replace_path_start_cases() {
  "Some writing, the folder named in it and the folder it is to name instead, with what should come back written down beside each one.";
  "The cases that leave the writing alone are the ones worth having. Renaming a folder where it really is named was never the hard half; noticing that the same letters were sitting on the end of somebody else's word was, and it went unnoticed until an address that had worked for years stopped working.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      text: "py/sample.py",
      before: "py",
      after: "scripts/py",
      written: "scripts/py/sample.py",
      why: "the ordinary case: a folder named at the very start of a path is named again",
    },
    {
      text: "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      before: "py",
      after: "scripts/py",
      written: "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      why: "the letters are there and they are followed by a folder mark, but they are the end of somebody else's word. This exact line was rewritten once, and what it left behind was an address for a package that does not exist",
    },
    {
      text: "python ./py/kokoro.py",
      before: "py",
      after: "scripts/py",
      written: "python ./scripts/py/kokoro.py",
      why: "a folder mark before the name does not stop it, because a path spelled from somewhere else names this same folder that way",
    },
    {
      text: "a happy/day",
      before: "py",
      after: "scripts/py",
      written: "a happy/day",
      why: "a letter before the name carries the word on, so the name does not begin there",
    },
    {
      text: "sample.py/x",
      before: "py",
      after: "scripts/py",
      written: "sample.py/x",
      why: "a dot before the name carries it on too, because that is how a file says what kind of file it is",
    },
    {
      text: "py/py/x",
      before: "py",
      after: "scripts/py",
      written: "scripts/py/scripts/py/x",
      why: "a folder of the same name nested inside another one is renamed as well, and that is the price of letting a folder mark count as a place a name may begin. It is written down rather than hidden, and it is why the sweep hands back the files it changed instead of how many",
    },
  ];
  return cases;
}
