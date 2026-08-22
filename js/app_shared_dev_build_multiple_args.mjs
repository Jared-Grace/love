import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { app_shared_dev_build_multiple } from "./app_shared_dev_build_multiple.mjs";
export async function app_shared_dev_build_multiple_args(names_comma) {
  "The command-line way in to building several dev bundles at once: the app names arrive as one comma-joined word, the same shape every other command takes a list in from a command line.";
  "Worth its own name because the function it stands in front of wants a real list, and a command line has no way to hand one over. Every word after the first arrives as a further parameter, so a function declaring one parameter keeps the first word and drops the rest - and a rebuild of eight apps that quietly rebuilds one is the shape of failure that reads exactly like success.";
  "That trap was already known where it lands rather than where it is set: the walker underneath refuses a text outright, because a text is walkable one LETTER at a time and would otherwise run the build against every character without a word. Refusing is right, and it left the multiple-build with no door from a command line at all.";
  let names = text_split_comma_or_empty(names_comma);
  let result = await app_shared_dev_build_multiple(names);
  return result;
}
