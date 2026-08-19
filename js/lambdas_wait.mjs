import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function lambdas_wait(lambdas) {
  "Start several different pieces of work at the same time and hand back what each one gave, in the order they were asked in.";
  "The map beside this one asks the same question of many things. This asks a handful of different questions at once, which is the shape wanted whenever two answers are both needed and neither has anything to say to the other - two files fetched, a list and a count, an index of one bible and an index of another.";
  "Written by hand instead - one call kept in a variable, a second kept in another, both awaited further down - it reads as though the two overlap, and stops overlapping the next time the file is canonicalized: the auto pass writes an await onto every call of an asynchronous function, and two awaits one after the other hand back the very same answers, only later. Nothing goes red, because nothing is wrong; it is just slower, and the paragraph explaining why the two were started together survives to say otherwise.";
  "Holding the work inside lambdas puts it where that pass does not reach, so the concurrency is a property of this function rather than of how a caller happened to be written.";
  async function run(lambda) {
    let r = await lambda();
    return r;
  }
  let results = await list_map_unordered_async(lambdas, run);
  return results;
}
