import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_keys_found } from "./giveaway_archive_keys_found.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { file_read } from "./file_read.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { text_split_equal_first } from "./text_split_equal_first.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { text_empty_not_is_assert } from "./text_empty_not_is_assert.mjs";
export async function giveaway_archive_keys() {
  arguments_assert(arguments, 0);
  ("The two archive.org upload keys read off this machine's own settings file, for the one function that sends a file.");
  ("★ NOTHING MAY PRINT WHAT THIS HANDS BACK, AND THE ONLY CALLER IS THE SENDER. The pair is an account's whole power to publish: anybody holding it can upload under this name, overwrite metadata and delete items. The seam Claude runs prints every answer and files a long one under gitignore, so the rule is that this answer is used in a header and never put in a record that is returned, logged or compared. The question anybody else wants - are the keys here at all - is answered next door, by a function that reads the same file and says only yes or no.");
  ("★ THE KEYS LIVE OUTSIDE THIS REPO ON PURPOSE, AND THAT IS WHY THEY ARE READ RATHER THAN STORED. This repo is public. A key committed here is a key published, and a key sitting in an ignored folder inside here is one careless change to that folder's rules away from the same thing. The tool's own settings file in the human's config folder is somewhere this repo cannot publish by accident, and somewhere the human already expects secrets to be.");
  ("★ A MISSING FILE THROWS AND SAYS HOW TO MEND IT, BECAUSE THE ALTERNATIVE IS A FAILED UPLOAD NOBODY CAN EXPLAIN. Handed nothing, the sender would ask archive.org to accept a file with no authority and be told no in a way that reads like a network fault. So the refusal is made here, where the reason is known, and it names the page the keys come from and the two lines the file wants.");
  ("The pair is read as a settings file rather than parsed as one: the only two lines that matter say access and secret, each a name and a value either side of the first equals, and everything else in the file - the section heading, a cookie, a comment - is passed over. Reading only what is wanted is what lets the human's own file hold whatever else the tool put there.");
  let found = await giveaway_archive_keys_found();
  true_is_assert_json(found.found, {
    places: found.places,
    hint: "no archive.org keys on this machine. get them from https://archive.org/account/s3.php while logged in, then write them as a file holding the line [s3] and then access = and secret = , one each, at the first of the places listed above",
  });
  let text = await file_read(found.path);
  let lines = text_lines_working(text);
  let access = "";
  let secret = "";
  for (let line of lines) {
    let pair = text_split_equal_first(line);
    let name = text_trim(pair.first);
    let value = text_trim(pair.second);
    let access_is = equal(name, "access");
    let secret_is = equal(name, "secret");
    if (access_is) {
      access = value;
    }
    if (secret_is) {
      secret = value;
    }
  }
  each([access, secret], text_empty_not_is_assert);
  let keys = {
    access: access,
    secret: secret,
  };
  return keys;
}
