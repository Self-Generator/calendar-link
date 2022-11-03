import { DATE, TIME } from "./Validation"

// States
const text = ''
const date1 = DATE
const time1 = TIME
const date2 = DATE
const time2 = TIME
const located = ''
const details = ''
const date7 = DATE
const time7 = TIME

// Submit
export const LinkBuild = 'https://calendar.google.com/calendar/u/0/r/eventedit?' +
    'text=' + text +
    '&dates=' + date1 +
    'T' + time1 +
    '/' + date2 +
    'T' + time2 +
    '&location=' + located +
    '&details=' + details +
    '&recur=RRULE:FREQ=DAILY;INTERVAL=1;' +
    'UNTIL=' + date7 +
    'T' + time7 +
    'Z';

