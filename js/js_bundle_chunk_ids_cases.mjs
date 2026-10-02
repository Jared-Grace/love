export function js_bundle_chunk_ids_cases() {
  "small stretches of a built app, and the numbers of the extra scripts each one sends for";
  "★ THE WHOLE POINT OF THIS CORPUS IS THAT ONE BUILD SPELLS THE SAME SENDING THREE WAYS. The outermost script keeps the long name the compiler writes; every piece cut out of the app is handed the same thing as an argument and the shortener renames it to a single letter; and a round number is written the shortest way there is. A reader that knows only the first spelling reads the outermost script correctly and then reads nothing in any of the pieces, so every script sent for only from inside a piece looks like one nothing wants. That is not a rare shape - measured on the 2nd of October one app had four hundred and five of its four hundred and forty five pieces reached only from inside another piece.";
  "★ IT MATTERS MORE THAN A RED CHECK, BECAUSE WHAT THIS READER ANSWERS IS DELETED. A piece this fails to see is a piece something then removes from a folder a working app is being served out of, and the app keeps working only for as long as nobody loads the part that was cut away.";
  "A case whose answer is a number written the short way expects it back in digits, because the answer is used as the name of a file and no file is called 1e3.";
  "The last two cases are the ones that say the reading has not gone too wide. A sending whose piece is chosen while the app is running names no number at all, and a number sitting in the open is not a sending.";
  let cases = [
    {
      bundle_text:
        "Promise.all([__webpack_require__.e(1330),__webpack_require__.e(4017)]).then(__webpack_require__.bind(__webpack_require__,8423))",
      ids: ["1330", "4017"],
      why: "the outermost script keeps the long name, which is the one spelling that always read correctly",
    },
    {
      bundle_text:
        '"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2647],{74123:(e,r,o)=>{o.e(1050).then(o.bind(o,61234))}}])',
      ids: ["1050"],
      why: "inside a piece the same thing is a parameter and the shortener has called it o, and the number the piece writes for itself at the front is how it says which piece it is rather than one it sends for",
    },
    {
      bundle_text: "o.e(1e3).then(o.bind(o,22104))",
      ids: ["1000"],
      why: "a round number comes out the shortest way the shortener can write it, and the file it names is still called by its digits",
    },
    {
      bundle_text: "__webpack_require__.e(1e3);o.e(1000)",
      ids: ["1000"],
      why: "one piece sent for twice, written both ways, is answered once - so the putting back into digits has to happen before the repeats are dropped and not after",
    },
    {
      bundle_text: "o.e(t).then(o.bind(o,r))",
      ids: [],
      why: "which piece this sends for is decided while the app is running, so there is no number here to read and none may be invented",
    },
    {
      bundle_text: "console.log(1330);let n=[[2647],{}]",
      ids: [],
      why: "a number standing on its own is not a sending, and neither is the one a piece writes to say which piece it is",
    },
  ];
  return cases;
}
