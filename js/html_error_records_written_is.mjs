import { arguments_assert } from "./arguments_assert.mjs";
import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function html_error_records_written_is() {
  ("whether this device has written anything down about an error - answered without reading what it wrote");
  ("This exists to be CHEAP rather than to be careful, and the whole of it is the difference between the reporter costing nothing and costing everybody. It is asked at the one boot every app in the repo goes through, on the ordinary visit where nothing has gone wrong, and its only job is to say no fast enough that the reading and sending behind it never has to be downloaded.");
  ("Reading the list properly means the store's quarantining reader, which brings the machinery for a key that turns out to be corrupt. That is the right reader for a value somebody depends on; here it would put eight KiB into every page to answer a question that is almost always no, and the answer to no is that nobody reads the list at all.");
  ("The presence of the word is the whole answer because the writer never writes an empty list - it writes a record or it writes nothing. So there is no case where something is stored and the answer should still be no, and a value that turns out to be unreadable is the reader's problem rather than this one's.");
  arguments_assert(arguments, 0);
  let key = html_error_records_storage_key();
  let held = window.localStorage.getItem(key);
  let missing = null_is(held);
  let written = not(missing);
  return written;
}
