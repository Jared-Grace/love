import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_reach_maximum } from "./app_shared_bible_passage_reach_maximum.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_index_flat_passage_run_most } from "./ebible_index_flat_passage_run_most.mjs";
import { ebible_index_flat_passage_run } from "./ebible_index_flat_passage_run.mjs";
export async function app_next_passage_run(
  bible_folders,
  extended_none,
  list,
  asked,
) {
  arguments_assert(arguments, 4);
  let reach = app_shared_bible_passage_reach_maximum();
  let first = list_first(bible_folders);
  let folders_first = [first];
  let run = extended_none
    ? await ebible_index_flat_passage_run_most(
        list,
        asked,
        folders_first,
        reach,
      )
    : await ebible_index_flat_passage_run(list, asked, folders_first, reach);
  return run;
}
