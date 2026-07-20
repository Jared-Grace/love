package com.jesusrosetolife.alarm

import org.junit.Test
import org.junit.Assert.assertEquals
import java.util.Calendar

/** Offline (JVM) test of the pure alarm logic — no device or emulator needed. */
class AlarmSyncTest {
    @Test
    fun days_to_calendar_maps_weekday_names() {
        assertEquals(
            arrayListOf(Calendar.MONDAY, Calendar.FRIDAY, Calendar.SUNDAY),
            days_to_calendar(listOf("mon", "fri", "sun"))
        )
    }

    @Test
    fun days_to_calendar_empty_is_empty() {
        assertEquals(ArrayList<Int>(), days_to_calendar(listOf()))
    }
}
