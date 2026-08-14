export async function chapter_passage_write(chapter_code, fn, passage) {
  "Save one passage into a chapter's store, replacing whatever passage covered the same verses and leaving every other passage of the chapter exactly as it was.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A passage is recognised by the verse numbers it covers, so writing one that is already there corrects it rather than doubling it, and a chapter can be authored over as many sittings as it takes.";
  "A chapter nobody has written to yet is started here rather than refused, so the first passage of a chapter is written exactly like the fortieth.";
  "It is the store that decides which store, and the store is a function - so which one is asked for rather than settled here. A sermon chapter and a gloss chapter are the same shape and different material, and this holds only the shape.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let chapter = exists
    ? await file_read_json(path)
    : {
        chapter_code,
        passages: [],
      };
  let passages = property_get(chapter, "passages");
  let key = g_sermon_passage_verses_key(passage);
  function passage_other(other) {
    let left = g_sermon_passage_verses_key(other);
    let neq = not_equal(left, key);
    return neq;
  }
  let others = list_filter(passages, passage_other);
  list_add(others, passage);
  let contents = json_format_to({
    chapter_code,
    passages: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
