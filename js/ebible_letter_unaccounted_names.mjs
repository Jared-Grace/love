import { ebible_readaloud_lines_differ_as_published_names } from "./ebible_readaloud_lines_differ_as_published_names.mjs";
import { ebible_letter_accounted } from "./ebible_letter_accounted.mjs";
import { list_difference } from "./list_difference.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function ebible_letter_unaccounted_names() {
  "Every chapter eBible publishes with its verse marks and its spoken lines disagreeing that nobody has yet either written to them about or read and cleared, named as the bible and the chapter joined by a space.";
  "This is what a next letter is for, and asking it is what keeps a chapter from being reported twice. A letter written from a reading of the last letter repeats whatever the last letter happened to cover; a letter written from this answer cannot, because anything covered is subtracted before it is offered.";
  "It found six chapters the first letter had missed - three in one bible and three in another - which had been proved to disagree as published and then never looked at by a person. That is the failure this exists to stop, and it had already happened once before the record was written down.";
  "Only the chapters proved to come back the same from a fresh download are asked about. A chapter still waiting to be looked at here is not something to write to anybody about yet, because it may be a broken download on this machine rather than anything wrong with what they published.";
  ("Asked chapter by chapter rather than by taking one list of names away from another, because a judgment may have been written down about a whole bible or a whole book and a chapter inside it is then judged too. Subtracting the record's own keys reads only the judgments that happen to be chapter-shaped, and offers the rest again as if nobody had looked.");
  let published = await ebible_readaloud_lines_differ_as_published_names();
  let accounted = await ebible_letter_accounted();
  function unaccounted_is(name) {
    let judged = ebible_letter_accounted_is(accounted, name);
    let unaccounted = not(judged);
    return unaccounted;
  }
  let names = list_filter(published, unaccounted_is);
  return names;
}
