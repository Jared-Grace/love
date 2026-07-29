import { assert_message } from "./assert_message.mjs";
import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
export function g_clock_sky_phase_check() {
  "deterministic REGRESSION check of the full-day clock→phase mapping. Every anchor hour hits its phase (0→4 night, 6→5 sunrise, 9→6, 12→7, 15→8, 18→9 sunset, 24→10 night). NIGHT is a fast ramp then a plateau, not a linear ramp: darkness reaches ~90% (near phase 10) fast after sunset — 18:30 is already past 9.5, 19:00 past 9.9 — then plateaus so 21:00 is still near-full-dark (>9.9); symmetrically 3:00 AM is still deep-dark (<4.1) and only lightens fast before sunrise. out-of-range clamps. run: node scripts/ai.mjs g_clock_sky_phase_check";
  assert_message(equal(g_clock_sky_phase(0), 4), "0:00 → night (4)");
  assert_message(equal(g_clock_sky_phase(6), 5), "6:00 → sunrise (5)");
  assert_message(equal(g_clock_sky_phase(9), 6), "9:00 → morning (6)");
  assert_message(equal(g_clock_sky_phase(12), 7), "12:00 → noon (7)");
  assert_message(equal(g_clock_sky_phase(15), 8), "15:00 → afternoon (8)");
  assert_message(equal(g_clock_sky_phase(18), 9), "18:00 → sunset (9)");
  assert_message(equal(g_clock_sky_phase(24), 10), "24:00 → night (10)");
  assert_message(
    greater_than(g_clock_sky_phase(18.5), 9.5),
    "18:30 → past 9.5 (fast dark after sunset)",
  );
  assert_message(
    greater_than(g_clock_sky_phase(19), 9.9),
    "19:00 → past 9.9 (~90% dark by 7 PM)",
  );
  assert_message(
    greater_than(g_clock_sky_phase(21), 9.9),
    "21:00 → still >9.9 (deep-night plateau, not linear 9.5)",
  );
  assert_message(
    less_than(g_clock_sky_phase(3), 4.1),
    "3:00 → still <4.1 (deep-dark pre-dawn plateau, not linear 4.5)",
  );
  assert_message(
    equal(g_clock_sky_phase(-5), 4),
    "before 0 clamps → night (4)",
  );
  assert_message(
    equal(g_clock_sky_phase(30), 10),
    "after 24 clamps → night (10)",
  );
  return {
    ok: true,
  };
}
