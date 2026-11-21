package com.jesusrosetolife.alarm

import java.text.SimpleDateFormat
import java.util.Locale
import java.util.TimeZone

/** One warning: ring at ring_at_ms for the meeting that starts at start_ms, ahead_minutes before it. */
data class MeetingRing(val ring_at_ms: Long, val start_ms: Long, val ahead_minutes: Int)

/**
 * Pure: reads a start_utc like "2026-11-16T14:00:00.000Z" (what the calendar sends) as milliseconds.
 * Only the first 19 characters are read; the calendar always sends whole seconds in UTC.
 */
fun utc_iso_to_ms(text: String): Long {
    val format = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.US)
    format.timeZone = TimeZone.getTimeZone("UTC")
    format.isLenient = false
    return format.parse(text.substring(0, 19))!!.time
}

/** One meeting as the alarms file gives it: its start, and how many minutes before it to ring. */
data class MeetingWarnings(val start_ms: Long, val ahead_minutes: List<Int>)

/**
 * Pure: every warning for every meeting, soonest first. Each meeting carries its own
 * warnings. A warning whose time has already passed is left out, so a sync just before
 * a meeting still sets the warnings still to come.
 */
fun meeting_rings(meetings: List<MeetingWarnings>, now_ms: Long): List<MeetingRing> {
    val rings = ArrayList<MeetingRing>()
    for (meeting in meetings) {
        for (ahead in meeting.ahead_minutes) {
            val at = meeting.start_ms - ahead * 60_000L
            if (at > now_ms) rings.add(MeetingRing(at, meeting.start_ms, ahead))
        }
    }
    rings.sortBy { it.ring_at_ms }
    return rings
}
