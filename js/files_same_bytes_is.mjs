import { arguments_assert } from "./arguments_assert.mjs";
import { file_size } from "./file_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
export async function files_same_bytes_is(path_a, path_b) {
  arguments_assert(arguments, 2);
  ("$plain path_a");
  ("$plain path_b");
  ("Whether two files hold exactly the same bytes.");
  ("★ THE LENGTH IS ASKED FIRST AND THAT IS WHAT MAKES THIS CHEAP ENOUGH TO ASK ABOUT BIG FILES. Two files of different lengths cannot hold the same bytes, and that is settled by a question the disk answers out of what it already knows. Only when the lengths agree does anything get read, which over a folder of recordings means almost never.");
  ("★ THIS IS THE ONLY IDENTITY TEST HERE THAT CANNOT DISAGREE WITH ITSELF. A length that matches, a time that matches, a name that matches, a sound that measures the same - every one of those has been seen to agree for two different things. Bytes agreeing is the thing itself agreeing. So where the question is whether one file is a plain copy of another, ask this rather than anything cheaper, and keep the cheaper tests for the crossings where no copy exists to find.");
  let size_a = await file_size(path_a);
  let size_b = await file_size(path_b);
  let size_same_is = equal(size_a, size_b);
  if (not(size_same_is)) {
    return false;
  }
  let bytes_a = await file_read_buffer(path_a);
  let bytes_b = await file_read_buffer(path_b);
  let same_is = bytes_a.equals(bytes_b);
  return same_is;
}
