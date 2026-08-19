import { literals_frozen_gate_run_lambda2 } from "./literals_frozen_gate_run_lambda2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_books_matches_is_uncategorized(
  book,
  known_codes,
) {
  arguments_assert(arguments, 2);
  let unknown = literals_frozen_gate_run_lambda2(
    "book_code",
    book,
    known_codes,
  );
  return unknown;
}
