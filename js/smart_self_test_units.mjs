import { arguments_assert } from "./arguments_assert.mjs";
import { smart_unit_name } from "./smart_unit_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function smart_self_test_units() {
  arguments_assert(arguments, 0);
  ("Every system unit whose journal is a record of some drive in this machine having been made to read itself.");
  ("There is more than one of them because the watching daemon will not test every kind of drive. It orders tests on the spinning drive and never once on the solid-state drive beside it - and not because that drive refuses, since the same tool run by hand starts a test on it and the drive completes it without error. The daemon's scheduling directive simply has no support for that kind of drive, which its manual says by labelling every other directive as reaching it and labelling that one nowhere. So the solid-state drive is tested by a timer of its own, and the record of what that timer did lives under the timer's name rather than under the daemon's.");
  ("Written down in one place because the check that reads these records and the machine that writes them have to agree about the name, and a name spelled separately at each end is a name the two ends can come to disagree about while both look healthy - the check goes quiet rather than red, because a unit nobody writes to has an empty journal and an empty journal is exactly what a missing test looks like.");
  ("Spelled the short way, without the kind on the end, because that is the form the log is asked for elsewhere here and one shape is easier to hold than two.");
  let daemon = smart_unit_name();
  let timer = text_frozen("nvme-selftest");
  let units = [daemon, timer];
  return units;
}
