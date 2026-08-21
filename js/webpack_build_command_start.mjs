export function webpack_build_command_start() {
  "The first words of the command every webpack build in this repo is started from, before the path of the config and anything a caller adds.";
  "★ IT IS SHARED BECAUSE ONE READER COUNTS BUILDS BY LOOKING FOR THESE WORDS IN THE LINES OF RUNNING PROCESSES. Spelled twice, the two could drift, and the drift would not break anything: the counter would simply stop matching and answer that nothing is building, which reads exactly like a quiet machine. Spelled once, that cannot happen - a change to how a build is started changes what is looked for in the same breath.";
  let words = ["webpack", "--config"];
  return words;
}
