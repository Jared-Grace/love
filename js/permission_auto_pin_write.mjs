import { arguments_assert } from "./arguments_assert.mjs";
import { permission_auto_checker_fingerprint } from "./permission_auto_checker_fingerprint.mjs";
import { permission_auto_pin_path } from "./permission_auto_pin_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_to } from "./json_to.mjs";
export async function permission_auto_pin_write() {
  "Records that a person approves the auto grant check exactly as it stands now, so Claude may grant itself any function that check finds clean - until the check's code changes.";
  "Do NOT grant it, and it must never be granted by the self-grant either: it is what decides whether the self-grant may run, so approving it unasked approves every grant after it. It is on the roster of permission writers for that reason.";
  arguments_assert(arguments, 0);
  let fingerprint = await permission_auto_checker_fingerprint();
  let path = permission_auto_pin_path();
  let contents = json_to({
    fingerprint,
  });
  await file_overwrite(path, contents);
  let written = {
    path,
    fingerprint,
  };
  return written;
}
