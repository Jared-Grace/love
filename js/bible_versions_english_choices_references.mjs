import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function bible_versions_english_choices_references(references) {
  "$plain references";
  "A list of passages, each read out of every English translation this repo may lawfully put in front of a reader, from either of the two shelves it fetches from - each passage against the translations that carry it and the words each one uses there.";
  "A WHOLE SONG'S WORTH AT ONCE RATHER THAN ONE PASSAGE AT A TIME. Asking a translation for its words costs almost nothing once its list of books is on this disk, and fetching that list is the slow half - measured at most of the time one passage took. Asked one passage at a time, a hundred passages pay for twenty-one book lists a hundred times over; asked together they pay for them once.";
  "The passages come back in the order they were asked in, because that order is usually the order somebody means to read them in - the lines of a song from its first verse to its last - and a comparison shuffled out of that order has to be sorted back by hand before it can be read.";
  "A translation that does not carry a passage is left out of that passage rather than listed as empty, so each passage shows the set of real options. That is an ordinary state and not a fault: two of the translations here are published a book at a time and hold fifty-six of the sixty-six, so a passage in one of the other ten simply has fewer options.";
  "A TRANSLATION THAT CANNOT BE READ AT ALL IS LEFT OUT RATHER THAN ALLOWED TO END THE COMPARISON. Being on the choices list and having had its chapters uploaded are two separate things, and the first can be true while the second is not. Thrown, one such translation emptied the whole comparison and twenty others that had already been read were shown to nobody.";
  "SEVERAL TRANSLATIONS AT A TIME, because each one not already on this disk has to come down, and waiting for one is no reason to stop asking for the next. A few at a time and not all at once, because the answer is a set of chapters and asking for every translation at once would only queue them somewhere else.";
  arguments_assert(arguments, 1);
  let usable = await bible_versions_english_choices_usable();
  async function lambda$read(record) {
    let bible_folder = property_get(record, "bible_folder");
    let name = property_get(record, "name");
    async function read() {
      let found = await ebible_folder_references_texts(
        bible_folder,
        references,
      );
      return found;
    }
    let caught = await catch_null_async(read);
    let unread = null_is(caught);
    let texts = ternary(unread, {}, caught);
    let v = {
      bible_folder,
      name,
      texts,
    };
    return v;
  }
  let reads = await list_map_limited_async(usable, lambda$read, 4);
  function passage(reference) {
    function wording(record) {
      let bible_folder = property_get(record, "bible_folder");
      let name = property_get(record, "name");
      let texts = property_get(record, "texts");
      let text = property_get_or_null(texts, reference);
      let worded = {
        bible_folder,
        name,
        text,
      };
      return worded;
    }
    let wordings = list_map(reads, wording);
    let held = list_filter_property_not(wordings, "text", null);
    let v = {
      reference,
      wordings: held,
    };
    return v;
  }
  let passages = [];
  for (let reference of references) {
    let v = passage(reference);
    list_add(passages, v);
  }
  return passages;
}
