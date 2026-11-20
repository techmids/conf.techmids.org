import { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { Sessions } from '../../speakers';
import { Schedule as schedule } from '../../schedule';
import { EVENT } from '../../event';

// Helper function to check if a time slot is currently active
const isCurrentTimeSlot = (slot, parsedDate, today, timeIrl) => {
    if (!slot || !slot.start || !slot.end) return false;
    // Extracts time like "9:00" from "9:00am"
    const extractTime = (timeStr) => timeStr.replace(/[a-zA-Z]/g, '');
    const startTime = moment(`${parsedDate} ${extractTime(slot.start)}:00`).unix();
    const endTime = moment(`${parsedDate} ${extractTime(slot.end)}:00`).unix();
    
    return (
        timeIrl >= startTime &&
        timeIrl < endTime + 5 * 60 && // Add 5 minutes buffer
        moment(parsedDate).date() === parseInt(today, 10)
    );
};

// Picks are kept in this browser only (the site has no server).
const PICKS_KEY = `techmids:picks:${EVENT.isoDate}`;
const ROOMS = [
    ['screen3', 'Screen 3'],
    ['screen2', 'Screen 2'],
    ['screen1', 'Screen 1'],
];

// A talk is known by its speaker id, so a pick survives a talk moving room or time.
const talkId = (slot, room) => (slot.session ? slot.session[0] : `${room}@${slot.start}`);

const areSlotsSame = (slotA, slotB) => {
    if (!slotA || !slotB) return false;
    if (slotA.session && slotB.session) {
        return slotA.session[0] === slotB.session[0];
    }
    if (!slotA.session && !slotB.session) {
        return slotA.name === slotB.name;
    }
    return false;
};

// One row per time slot across the three screens. A row where the screens differ
// is one the attendee chooses in, and lists its talks under `options`.
const buildRows = (parsedDate) => {
    const timeSlotMap = new Map();
    ROOMS.forEach(([room]) => {
        schedule[room]?.day1?.timeSlots.forEach((slot) => {
            const key = `${slot.start}-${slot.end}`;
            if (!timeSlotMap.has(key)) {
                timeSlotMap.set(key, { key, start: slot.start, end: slot.end, screen1: null, screen2: null, screen3: null });
            }
            timeSlotMap.get(key)[room] = slot;
        });
    });

    const toUnix = (time) => moment(`${parsedDate} ${time.replace(/[a-zA-Z]/g, '')}:00`).unix();

    return Array.from(timeSlotMap.values())
        .sort((a, b) => toUnix(a.start) - toUnix(b.start))
        .map((row) => {
            const shared = Boolean(row.screen1) && areSlotsSame(row.screen1, row.screen2) && areSlotsSame(row.screen1, row.screen3);
            const options = shared
                ? []
                : ROOMS.filter(([room]) => row[room]).map(([room, label]) => ({
                      room,
                      label,
                      slot: row[room],
                      id: talkId(row[room], room),
                  }));
            return { ...row, shared, options };
        });
};

// How one talk stands in its slot: picked, or passed over because another talk in the slot is picked
const pickState = (row, room, picks) => {
    const option = row?.options.find((o) => o.room === room);
    if (!option) return null;
    const picked = picks.includes(option.id);
    const passedOver = !picked && row.options.some((o) => picks.includes(o.id));
    return { option, picked, passedOver };
};

// Passed-over talks are greyed out but stay clickable, so a pick can be switched in one tap
const pickTone = (state) => (state?.picked ? ' bg-brand-100' : state?.passedOver ? ' opacity-50 grayscale' : '');

const PickButton = ({ picked, onClick }) => (
    <button
        type="button"
        aria-pressed={picked}
        onClick={onClick}
        className={`mt-2 inline-flex items-center rounded-md border px-2 py-1 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            picked ? 'border-black bg-black text-brand' : 'border-brand-700 bg-white text-brand-900 hover:bg-brand-100'
        }`}
    >
        {picked ? '✓ Picked' : 'Pick'}
    </button>
);

// Shown instead of the button where picks can't be changed (someone else's shared day)
const PickedMark = () => (
    <span className="mt-2 inline-flex items-center rounded-md border border-black bg-black px-2 py-1 text-xs font-bold text-brand">✓ Picked</span>
);

// Component to render a single session cell in the combined view
const SessionCell = ({ slot, isHappening, pick }) => {
    if (!slot) {
        return <td className="px-3 py-2 text-sm text-gray-400">-</td>;
    }

    const cellClass = `${isHappening ? "px-3 py-2 text-sm bg-brand-400" : "px-3 py-2 text-sm"}${pickTone(pick)}`;

    if (slot.session) {
        const speakerId = slot.session[0];
        const speaker = Sessions[speakerId];
        return (
            <td className={cellClass}>
                <Link href={`/speakers/${speakerId}`} className="block">
                    <div className="font-semibold text-brand-900">{speaker?.name || slot.name}</div>
                    <div className="text-brand-700 mt-1">{slot.description || speaker?.talkTitle}</div>
                </Link>
                {pick && (pick.onToggle ? <PickButton picked={pick.picked} onClick={pick.onToggle} /> : pick.picked && <PickedMark />)}
            </td>
        );
    }

    return (
        <td className={cellClass}>
            <div className="font-semibold text-brand-900">{slot.name || 'TBC'}</div>
            <div className="text-brand-700 mt-1">{slot.description || 'TBC'}</div>
            {pick && (pick.onToggle ? <PickButton picked={pick.picked} onClick={pick.onToggle} /> : pick.picked && <PickedMark />)}
        </td>
    );
};

// The original "stacked" view for a single day/track
function StackedScheduleView({ day, room, rows, picks, onToggle, parsedDate, today, timeIrl }) {
    return (
        <div id="schedule" className="w-full mt-8 sm:-mx-8">
            <div className="sm:flex-auto">
                <h1 className="font-display text-4xl font-medium tracking-tighter text-brand-800 sm:text-5xl">
                    {day.timeOfDay}
                </h1>
                <p className="mb-6 mt-2 text-md font-display font-bold sm:text-2xl tracking-tight text-brand-900">
                    {day.summary}
                </p>
            </div>
            <table className="w-full divide-y divide-brand-700 table-auto">
                <thead></thead>
                <tbody className="divide-y divide-brand-700 bg-white">
                    {day.timeSlots.map((timeSlot) => {
                        const row = rows.find((r) => r.key === `${timeSlot.start}-${timeSlot.end}`);
                        const state = pickState(row, room, picks);
                        return (
                        <tr
                            key={`${timeSlot.start}${timeSlot.name}`}
                            className={`${isCurrentTimeSlot(timeSlot, parsedDate, today, timeIrl) ? "flex items-center bg-brand-400 justify-between" : "flex items-center justify-between"}${pickTone(state)}`}
                        >
                            {timeSlot.session ? (
                                <>
                                    <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-brand-900 sm:w-[200px]">
                                        <Link href={`/speakers/${timeSlot.session[0]}`}>{timeSlot.start} - {timeSlot.end}</Link>
                                    </td>
                                    <td className="flex-col speaker hidden px-3 text-sm font-display sm:text-lg tracking-tight text-brand-800 w-1/2 sm:w-[250px] md:flex items-center">
                                        {timeSlot.session.map((speakerId) => (
                                            <div className="w-full flex items-center" key={speakerId}>
                                                <Link href={`/speakers/${speakerId}`}>
                                                    <Image className="inline-block h-10 w-10 rounded-full mr-2" src={Sessions[speakerId].image} alt={Sessions[speakerId].name} style={{ objectFit: 'cover' }} />
                                                </Link>
                                                <Link href={`/speakers/${speakerId}`}>{timeSlot.name || Sessions[speakerId].name}</Link>
                                            </div>
                                        ))}
                                    </td>
                                    <td className="summary font-semibold text-sm sm:text-md tracking-tight text-brand-700 w-1/2 sm:w-[400px]">
                                        <Link href={`/speakers/${timeSlot.session[0]}`}>{timeSlot.description || Sessions[timeSlot.session[0]]?.talkTitle}</Link>
                                        {state && (
                                            <div>
                                                {onToggle ? (
                                                    <PickButton picked={state.picked} onClick={() => onToggle(row, state.option.id)} />
                                                ) : (
                                                    state.picked && <PickedMark />
                                                )}
                                            </div>
                                        )}
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-brand-900 sm:w-[200px]">
                                        {timeSlot.start} - {timeSlot.end}
                                    </td>
                                    <td className="speaker hidden whitespace-nowrap px-3 text-sm font-display sm:text-lg tracking-tight text-brand-800 w-1/2 sm:w-[250px] md:table-cell">
                                        {timeSlot?.name ?? 'TBC'}
                                    </td>
                                    <td className="summary font-semibold text-sm sm:text-md tracking-tight text-brand-900 w-1/2 sm:w-[400px]">
                                        {timeSlot?.description ?? 'TBC'}
                                        {state && (
                                            <div>
                                                {onToggle ? (
                                                    <PickButton picked={state.picked} onClick={() => onToggle(row, state.option.id)} />
                                                ) : (
                                                    state.picked && <PickedMark />
                                                )}
                                            </div>
                                        )}
                                    </td>
                                </>
                            )}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

function CombinedScheduleView({ rows, parsedDate, today, timeIrl, picks, onToggle }) {
    if (!rows.length) return null;
    const timeSlots = rows;

    return (
        <div className="w-full mt-8 sm:-mx-8">
            <div className="overflow-x-auto">
                <table className="w-full divide-y divide-brand-700 table-auto">
                    <thead className="bg-brand-100 hidden md:table-header-group">
                        <tr>
                            <th className="px-3 py-2 text-left text-sm font-display font-bold text-brand-900">Time</th>
                            <th className="px-3 py-2 text-left text-sm font-display font-bold text-brand-900">Screen 3</th>
                            <th className="px-3 py-2 text-left text-sm font-display font-bold text-brand-900">Screen 2</th>
                            <th className="px-3 py-2 text-left text-sm font-display font-bold text-brand-900">Screen 1</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-700 bg-white">
                        {timeSlots.map((slot, index) => {
                            const isRowActive = isCurrentTimeSlot(slot.screen3 || slot.screen2 || slot.screen1, parsedDate, today, timeIrl);
                            const isSameAcrossAll = slot.shared;
                            const pickFor = (room) => {
                                const state = pickState(slot, room, picks);
                                if (!state) return undefined;
                                return { ...state, onToggle: onToggle && (() => onToggle(slot, state.option.id)) };
                            };

                            return (
                                <tr key={index} className={`block md:table-row border-b md:border-b-0 border-brand-700 mb-4 md:mb-0 rounded-lg md:rounded-none shadow-md md:shadow-none ${isRowActive ? "bg-brand-200" : ""}`}>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm font-display font-bold text-brand-900 block md:table-cell">
                                        <span className="font-bold md:hidden">Time: </span>{slot.start} - {slot.end}
                                    </td>
                                    {isSameAcrossAll ? (
                                        <>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2 md:col-span-3" colSpan="3">
                                                <div className="font-bold md:hidden px-3 pt-2">All Screens</div>
                                                <SessionCell slot={slot.screen1} isHappening={isCurrentTimeSlot(slot.screen1, parsedDate, today, timeIrl)} />
                                            </td>
                                            <td className="hidden"></td>
                                            <td className="hidden"></td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2">
                                                <div className="font-bold md:hidden px-3 pt-2">Screen 3</div>
                                                <SessionCell slot={slot.screen3} isHappening={isCurrentTimeSlot(slot.screen3, parsedDate, today, timeIrl)} pick={pickFor('screen3')} />
                                            </td>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2">
                                                <div className="font-bold md:hidden px-3 pt-2">Screen 2</div>
                                                <SessionCell slot={slot.screen2} isHappening={isCurrentTimeSlot(slot.screen2, parsedDate, today, timeIrl)} pick={pickFor('screen2')} />
                                            </td>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2">
                                                <div className="font-bold md:hidden px-3 pt-2">Screen 1</div>
                                                <SessionCell slot={slot.screen1} isHappening={isCurrentTimeSlot(slot.screen1, parsedDate, today, timeIrl)} pick={pickFor('screen1')} />
                                            </td>
                                        </>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// One talk as a card: used for a picked talk and for the choices in an unpicked slot
const TalkCard = ({ option, picked, passedOver, onToggle }) => {
    const { slot, label, id } = option;
    const speaker = slot.session ? Sessions[slot.session[0]] : null;
    const title = slot.description || speaker?.talkTitle || 'TBC';
    const who = speaker ? `${speaker.name}${speaker.jobTitle ? ` · ${speaker.jobTitle}` : ''}` : slot.name;

    return (
        <div className={`flex items-start gap-3 rounded-lg border p-3 ${picked ? 'border-black bg-brand-100' : 'border-brand-700 bg-white'}${passedOver ? ' opacity-50 grayscale' : ''}`}>
            {speaker?.image && (
                <Image className="h-12 w-12 flex-none rounded-full" src={speaker.image} alt="" style={{ objectFit: 'cover' }} />
            )}
            <div className="min-w-0 flex-1">
                <div className="text-xs font-bold uppercase tracking-wide text-brand-700">{label}</div>
                <div className="font-semibold text-brand-900">
                    {slot.session ? <Link href={`/speakers/${slot.session[0]}`}>{title}</Link> : title}
                </div>
                <div className="text-sm text-brand-800">{who}</div>
            </div>
            {onToggle && (
                <div className="flex-none">
                    <PickButton picked={picked} onClick={() => onToggle(id)} />
                </div>
            )}
        </div>
    );
};

// The attendee's own running order: their pick in each slot, or the choices where they haven't picked
function MyDayView({ rows, parsedDate, today, timeIrl, picks, onToggle }) {
    const [changing, setChanging] = useState(null);

    return (
        <div className="w-full mt-4 max-w-3xl">
            <ol className="space-y-4">
                {rows.map((row) => {
                    const active = isCurrentTimeSlot(row, parsedDate, today, timeIrl);
                    const time = (
                        <div className="font-display text-sm font-bold text-brand-900">
                            {row.start} - {row.end}
                            {active && <span className="ml-2 rounded bg-black px-2 py-0.5 text-xs text-brand">Now</span>}
                        </div>
                    );

                    if (row.shared) {
                        return (
                            <li key={row.key} className={`rounded-lg px-3 py-2 ${active ? 'bg-brand-200' : 'bg-brand-100'}`}>
                                {time}
                                <div className="text-sm text-brand-800">
                                    <span className="font-semibold">{row.screen1.name}</span>
                                    {row.screen1.description ? ` · ${row.screen1.description}` : ''}
                                </div>
                            </li>
                        );
                    }

                    const picked = row.options.find((o) => picks.includes(o.id));
                    const showChoices = !picked || changing === row.key;

                    return (
                        <li key={row.key} className={`rounded-lg px-3 py-2 ${active ? 'bg-brand-200' : ''}`}>
                            <div className="mb-2 flex items-center justify-between">
                                {time}
                                {!picked && <span className="text-xs font-bold uppercase tracking-wide text-brand-700">Pick one</span>}
                                {picked && onToggle && (
                                    <button
                                        type="button"
                                        className="text-sm font-semibold text-brand-900 underline"
                                        onClick={() => setChanging(changing === row.key ? null : row.key)}
                                    >
                                        {changing === row.key ? 'Done' : 'Change'}
                                    </button>
                                )}
                            </div>
                            <div className="space-y-2">
                                {showChoices ? (
                                    row.options.map((option) => (
                                        <TalkCard
                                            key={option.id}
                                            option={option}
                                            picked={picked?.id === option.id}
                                            passedOver={Boolean(picked) && picked.id !== option.id}
                                            onToggle={
                                                onToggle &&
                                                ((id) => {
                                                    onToggle(row, id);
                                                    setChanging(null);
                                                })
                                            }
                                        />
                                    ))
                                ) : (
                                    <TalkCard option={picked} picked />
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

const readSavedPicks = () => {
    try {
        const saved = JSON.parse(window.localStorage.getItem(PICKS_KEY));
        return Array.isArray(saved) ? saved.filter((id) => typeof id === 'string') : [];
    } catch {
        return [];
    }
};

// A share link carries the picks after the #, so they never reach a server
const readSharedPicks = () => {
    const match = window.location.hash.match(/^#picks=(.*)$/);
    if (!match) return null;
    try {
        return match[1].split(',').filter(Boolean).map(decodeURIComponent);
    } catch {
        return null;
    }
};

// Main component with toggle logic
export function Schedule() {
    const [view, setView] = useState('stacked'); // 'stacked' or 'combined'
    const [today, setToday] = useState('');
    const [timeIrl, setTimeIrl] = useState(0);
    const [picks, setPicks] = useState([]);
    const [sharedPicks, setSharedPicks] = useState(null); // someone else's picks, from a share link
    const [canSave, setCanSave] = useState(false);
    const [shareNote, setShareNote] = useState('');

    // Picks are read after the page loads: the exported HTML is the same for everyone
    useEffect(() => {
        setPicks(readSavedPicks());
        setCanSave(true);
        const showShared = () => {
            const shared = readSharedPicks();
            if (shared) {
                setSharedPicks(shared);
                setView('myday');
            }
        };
        showShared();
        // A share link opened while already on the page changes only the #
        window.addEventListener('hashchange', showShared);
        return () => window.removeEventListener('hashchange', showShared);
    }, []);

    useEffect(() => {
        if (!canSave) return;
        try {
            window.localStorage.setItem(PICKS_KEY, JSON.stringify(picks));
        } catch {
            // Private browsing or storage full: picks last until the page closes
        }
    }, [picks, canSave]);

    useEffect(() => {
        let timeoutId;
        const logDate = () => {
            const currentDate = new Date();
            setToday(String(currentDate.getDate()));
            setTimeIrl(Math.floor(currentDate.getTime() / 1000));
            timeoutId = setTimeout(logDate, 20000);
        };
        logDate();
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const parsedDate = moment(EVENT.date, 'Do MMMM YYYY').format('MM/DD/YYYY');

    const rows = buildRows(parsedDate);
    const pickable = rows.filter((row) => !row.shared);
    const allIds = pickable.flatMap((row) => row.options.map((o) => o.id));
    // Ignore picks for talks no longer on the schedule
    const shownPicks = (sharedPicks ?? picks).filter((id) => allIds.includes(id));
    const pickedCount = pickable.filter((row) => row.options.some((o) => shownPicks.includes(o.id))).length;

    // One pick per slot: picking a talk replaces the slot's pick, picking it again clears it
    const togglePick = (row, id) => {
        const slotIds = row.options.map((o) => o.id);
        setPicks((current) => {
            const rest = current.filter((p) => !slotIds.includes(p));
            return current.includes(id) ? rest : [...rest, id];
        });
    };
    const onToggle = sharedPicks ? undefined : togglePick;

    const clearHash = () => window.history.replaceState(null, '', window.location.pathname + window.location.search);
    const showMine = () => {
        setSharedPicks(null);
        clearHash();
    };
    const saveShared = () => {
        setPicks(shownPicks);
        showMine();
    };

    const share = async () => {
        const url = `${window.location.origin}${window.location.pathname}#picks=${shownPicks.map(encodeURIComponent).join(',')}`;
        try {
            if (navigator.share) {
                await navigator.share({ title: `My ${EVENT.edition} picks`, url });
                return;
            }
            await navigator.clipboard.writeText(url);
            setShareNote('Link copied');
        } catch (error) {
            if (error?.name === 'AbortError') return; // share sheet dismissed
            setShareNote(url);
        }
    };

    const buttonBaseClass = "px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 shadow-md";
    const activeClass = "bg-black text-brand";
    const inactiveClass = "bg-white text-black hover:bg-brand-100";

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
            <div className="flex flex-col mx-auto">
                <div className="flex flex-wrap items-center mb-4">
                    <h1 className="font-display text-4xl font-medium text-brand-800 sm:text-7xl" id="schedule">Schedule</h1>
                    <p className="w-full mt-4 font-display text-2xl text-brand-900">
                        Your day will be composed of 30-45 minute sessions including plenty of time to chat, network and move between talks.
                    </p>
                </div>

                <div className="flex justify-end mb-4">
                    <span className="isolate inline-flex rounded-md shadow-sm">
                        <button
                            type="button"
                            onClick={() => setView('stacked')}
                            className={`${buttonBaseClass} rounded-r-none ${view === 'stacked' ? activeClass : inactiveClass}`}
                        >
                            Stacked
                        </button>
                        <button
                            type="button"
                            onClick={() => setView('combined')}
                            className={`${buttonBaseClass} rounded-none -ml-px ${view === 'combined' ? activeClass : inactiveClass}`}
                        >
                            Combined
                        </button>
                        <button
                            type="button"
                            onClick={() => setView('myday')}
                            className={`${buttonBaseClass} rounded-l-none -ml-px ${view === 'myday' ? activeClass : inactiveClass}`}
                        >
                            My day {pickedCount}/{pickable.length}
                        </button>
                    </span>
                </div>

                <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 sm:m-8">
                    {sharedPicks && (
                        <div className="w-full max-w-3xl rounded-lg border border-black bg-brand-100 p-3 text-sm text-brand-900">
                            <p className="font-semibold">You are looking at picks someone shared with you.</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                <button type="button" onClick={saveShared} className={`${buttonBaseClass} ${activeClass}`}>
                                    Save as my picks
                                </button>
                                <button type="button" onClick={showMine} className={`${buttonBaseClass} ${inactiveClass}`}>
                                    Back to my picks
                                </button>
                            </div>
                        </div>
                    )}
                    {view === 'stacked' &&
                        Object.keys(schedule).map((track) =>
                            Object.keys(schedule[track]).map((day) => (
                                <StackedScheduleView
                                    key={`${track}-${day}`}
                                    day={schedule[track][day]}
                                    room={track}
                                    rows={rows}
                                    picks={shownPicks}
                                    onToggle={onToggle}
                                    parsedDate={parsedDate}
                                    today={today}
                                    timeIrl={timeIrl}
                                />
                            ))
                        )}
                    {view === 'combined' && (
                        <CombinedScheduleView
                            rows={rows}
                            parsedDate={parsedDate}
                            today={today}
                            timeIrl={timeIrl}
                            picks={shownPicks}
                            onToggle={onToggle}
                        />
                    )}
                    {view === 'myday' && (
                        <MyDayView
                            rows={rows}
                            parsedDate={parsedDate}
                            today={today}
                            timeIrl={timeIrl}
                            picks={shownPicks}
                            onToggle={onToggle}
                        />
                    )}
                    {!sharedPicks && (
                        <div className="mt-6 w-full max-w-3xl text-sm text-brand-900">
                            <div className="flex flex-wrap items-center gap-2">
                                <button
                                    type="button"
                                    onClick={share}
                                    disabled={!shownPicks.length}
                                    className={`${buttonBaseClass} ${inactiveClass} disabled:opacity-50`}
                                >
                                    Share my picks
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPicks([]);
                                        setShareNote('');
                                    }}
                                    disabled={!shownPicks.length}
                                    className={`${buttonBaseClass} ${inactiveClass} disabled:opacity-50`}
                                >
                                    Clear picks
                                </button>
                                <span role="status" className="break-all">{shareNote}</span>
                            </div>
                            <p className="mt-3">Your picks are saved on this device only. Nothing is sent anywhere.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
