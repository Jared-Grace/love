import { text_frozen } from "./text_frozen.mjs";
export function error_where_cases() {
  "Trails written out, each one saying which single line the reader should hand back";
  "as the place a thrown thing came from.";
  "The first case is the one the reader exists for, and it must come back with a real";
  "line. A reader that had stopped looking would answer every case with one of the two";
  "sentences below, and those sentences are also the honest answer to a trail that";
  "genuinely names nowhere - so without a case that must find something, the two cannot";
  "be told apart.";
  "The second case carries the reason the lines are sifted at all: the runtime puts its";
  "own machinery at the top of a trail, and a reader arriving here wants the code that";
  "was written here.";
  "The last two are the shapes with nothing to read. Anything at all can be thrown, so";
  "a thrown thing carrying no trail, and a thrown nothing, both have to answer in words";
  "rather than fail - a reader is here because something has already gone wrong.";
  "Every name written inside a trail is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference.";
  let cases = [
    {
      thrown: {
        stack: text_frozen(
          "ReferenceError: property_get is not defined\n    at file_write_import (file:///home/j/repos/love/js/file_write_import.mjs:14:12)\n    at data_get (file:///home/j/repos/love/js/data_get.mjs:9:3)\n",
        ),
      },
      where: text_frozen(
        "at file_write_import (file:///home/j/repos/love/js/file_write_import.mjs:14:12)",
      ),
      why: "the case the reader exists for - a name that is not defined, whose words name the name and not the file, so the first line of the trail is the whole answer",
    },
    {
      thrown: {
        stack: text_frozen(
          "Error: broken\n    at node:internal/process/task_queues:95:5\n    at async run (file:///home/j/repos/love/js/run.mjs:3:1)\n",
        ),
      },
      where: text_frozen(
        "at async run (file:///home/j/repos/love/js/run.mjs:3:1)",
      ),
      why: "the runtime's own machinery sits above the code that was written here, and is passed over",
    },
    {
      thrown: {
        stack: text_frozen(
          "Error: broken\n    at node:internal/process/task_queues:95:5\n",
        ),
      },
      where: "the trail names no file of code",
      why: "a trail made entirely of the runtime's own machinery names nowhere a reader can go",
    },
    {
      thrown: {
        message: "plain object",
      },
      where: "nothing was thrown that could say where it came from",
      why: "a thrown thing that is not an error carries no trail, and saying so is more than saying nothing",
    },
    {
      thrown: null,
      where: "nothing was thrown that could say where it came from",
      why: "a thrown nothing has neither words nor a trail, and this is the last place that should add a second failure on top of the first",
    },
  ];
  return cases;
}
