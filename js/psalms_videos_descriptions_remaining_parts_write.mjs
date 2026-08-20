export async function psalms_videos_descriptions_remaining_parts_write(
  letters_most,
) {
  "Asks youtube which songs still want their words, cuts those into pieces small enough to paste, and writes the pieces down over the ones already there.";
  "It writes over the old pieces rather than beside them because the old pieces are a slicing of every song there is, and once any of the work has landed that slicing describes work that no longer needs doing. Two lists of pieces where one is out of date is how a piece already done gets pasted a second time.";
  "This is the command to run before each sitting. Whoever pasted last, and whether they finished, stops mattering: the pieces that come out hold exactly what is still missing, so two people working on this cannot undo or repeat each other's work, only shorten what is left.";
  "How big a piece a browser will take is not a fact this repo can work out, so it is asked for rather than guessed at.";
  arguments_assert(arguments, 1);
  let remaining = await psalms_videos_descriptions_remaining();
  let parts = psalms_videos_descriptions_parts_cut(remaining, letters_most);
  let path = psalms_videos_descriptions_payload_parts_path();
  await file_overwrite_json(path, parts);
  let sizes = [];
  for (let one of parts) {
    sizes.push(one.length);
  }
  let r = {
    path: path,
    parts: parts.length,
    videos: remaining.length,
    videos_by_part: sizes,
  };
  return r;
}
