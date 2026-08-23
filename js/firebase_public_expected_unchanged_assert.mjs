import { firebase_public_expected_changed } from "./firebase_public_expected_changed.mjs";
import { firebase_public_expected_path } from "./firebase_public_expected_path.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function firebase_public_expected_unchanged_assert() {
  "Refuses a sending whose folder holds anything other than the bytes that were approved, naming the apps that moved";
  "This is the whole of what a sending is allowed to ask. It is a question about content and not about whether the code is sound - that was answered where the app was generated and approved - so it can be asked honestly here: the bytes in front of it either are the ones somebody agreed to or they are not, and nothing about the state of the working folder changes the answer.";
  "It has to come before the sending rather than after it. A sending puts out the whole folder at once, so bytes nobody approved go out along with everything else; asked afterwards the same question is worthless, because the answer arrives when the change is already live.";
  "Where the record lives is handed to whoever is refused, because being told an app moved is only half of it - the other half is being able to go and look at what was written down about it.";
  let changed = await firebase_public_expected_changed();
  let path = firebase_public_expected_path();
  list_empty_is_assert_json(changed, {
    path,
  });
}
