import { npm_run } from "./npm_run.mjs";
import { text_combine } from "./text_combine.mjs";
export async function npm_install_generic(package_name, flags) {
  "The flags arrive as a list of words rather than as a piece of the command line, so asking for a global install passes one word instead of a fragment with a space on the end.";
  "The package name is the reason this matters: it is data arriving from somewhere else, and every function that installs a package on demand is reached from most of the repo, so a name that could split into two words would put a command line within reach of almost anything.";
  let latest = text_combine(package_name, "@latest");
  let words = ["install"].concat(flags).concat([latest]);
  await npm_run(words);
}
