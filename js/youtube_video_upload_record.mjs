import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_privacy_words } from "./youtube_privacy_words.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
export function youtube_video_upload_record(title, description, privacy) {
  "$plain title";
  "$plain description";
  "$plain privacy";
  "Everything about a film except the film: what it is called, what it says underneath, what shelf it belongs on, and who is allowed to watch it.";
  "Who may watch it is checked here against the three words YouTube actually knows, and checked before anything is sent rather than after. A word outside those three is not treated as an unknown setting - it is treated as private, which means a film that was meant to be public goes up invisible and reports success, and nobody finds out until they go looking for it.";
  "The shelf is music because that is the only kind of thing this channel puts up, and a film filed nowhere is recommended to nobody. It is written here rather than asked for because a caller with no opinion about it would leave it off, and left off is not neutral.";
  "It says the film is not made for children, which is a declaration to a regulator and not a preference. Sung scripture is not directed at children in the sense that word carries here - it is the setting that turns off comments and personalised recommendations for everybody watching - and the declaration has to be made either way, so it is made here in the open rather than left for a person to click through half-read.";
  arguments_assert(arguments, 3);
  let words = youtube_privacy_words();
  let known = list_includes(words, privacy);
  assert_json(known, {
    privacy,
    words,
  });
  let record = {
    snippet: {
      title: title,
      description: description,
      categoryId: "10",
    },
    status: {
      privacyStatus: privacy,
      selfDeclaredMadeForKids: false,
    },
  };
  return record;
}
