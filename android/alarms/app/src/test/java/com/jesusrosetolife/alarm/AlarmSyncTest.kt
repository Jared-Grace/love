package com.jesusrosetolife.alarm

import org.junit.Test
import org.junit.Assert.assertEquals

/** Offline (JVM) test of the pure meeting-time logic — no device or emulator needed. */
class AlarmSyncTest {
    private val minute = 60_000L

    @Test
    fun utc_iso_reads_the_calendar_format() {
        assertEquals(1_763_301_600_000L, utc_iso_to_ms("2025-11-16T14:00:00.000Z"))
    }

    @Test
    fun each_meeting_rings_once_per_warning_soonest_first() {
        val rings = meeting_rings(
            listOf(MeetingWarnings(1000 * minute, listOf(15, 5)), MeetingWarnings(100 * minute, listOf(15, 5))), 0
        )
        assertEquals(listOf(85 * minute, 95 * minute, 985 * minute, 995 * minute), rings.map { it.ring_at_ms })
        assertEquals(listOf(15, 5, 15, 5), rings.map { it.ahead_minutes })
        assertEquals(100 * minute, rings[0].start_ms)
    }

    @Test
    fun each_meeting_uses_its_own_warnings() {
        val rings = meeting_rings(
            listOf(MeetingWarnings(1000 * minute, listOf(60, 5)), MeetingWarnings(100 * minute, listOf(10))), 0
        )
        assertEquals(listOf(90 * minute, 940 * minute, 995 * minute), rings.map { it.ring_at_ms })
    }

    @Test
    fun passed_warnings_are_left_out() {
        val rings = meeting_rings(listOf(MeetingWarnings(100 * minute, listOf(15, 5))), 90 * minute)
        assertEquals(listOf(95 * minute), rings.map { it.ring_at_ms })
    }

    @Test
    fun no_meetings_no_rings() {
        assertEquals(0, meeting_rings(listOf(), 0).size)
    }
}
