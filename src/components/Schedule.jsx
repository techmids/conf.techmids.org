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

// Component to render a single session cell in the combined view
const SessionCell = ({ slot, isHappening }) => {
    if (!slot) {
        return <td className="px-3 py-2 text-sm text-gray-400">-</td>;
    }

    const cellClass = isHappening ? "px-3 py-2 text-sm bg-brand-400" : "px-3 py-2 text-sm";

    if (slot.session) {
        const speakerId = slot.session[0];
        const speaker = Sessions[speakerId];
        return (
            <td className={cellClass}>
                <Link href={`/speakers/${speakerId}`} className="block">
                    <div className="font-semibold text-brand-900">{speaker?.name || slot.name}</div>
                    <div className="text-brand-700 mt-1">{slot.description || speaker?.talkTitle}</div>
                </Link>
            </td>
        );
    }

    return (
        <td className={cellClass}>
            <div className="font-semibold text-brand-900">{slot.name || 'TBC'}</div>
            <div className="text-brand-700 mt-1">{slot.description || 'TBC'}</div>
        </td>
    );
};

// The original "stacked" view for a single day/track
function StackedScheduleView({ day, parsedDate, today, timeIrl }) {
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
                    {day.timeSlots.map((timeSlot) => (
                        <tr
                            key={`${timeSlot.start}${timeSlot.name}`}
                            className={isCurrentTimeSlot(timeSlot, parsedDate, today, timeIrl) ? "flex items-center bg-brand-400 justify-between" : "flex items-center justify-between"}
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
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function CombinedScheduleView({ parsedDate, today, timeIrl }) {
    const screen1 = schedule.screen1?.day1;
    const screen2 = schedule.screen2?.day1;
    const screen3 = schedule.screen3?.day1;

    if (!screen1 && !screen2 && !screen3) return null;

    const timeSlotMap = new Map();
    [screen1, screen2, screen3].forEach((screen, index) => {
        screen?.timeSlots.forEach((slot) => {
            const key = `${slot.start}-${slot.end}`;
            if (!timeSlotMap.has(key)) {
                timeSlotMap.set(key, { start: slot.start, end: slot.end, screen1: null, screen2: null, screen3: null });
            }
            timeSlotMap.get(key)[`screen${index + 1}`] = slot;
        });
    });

    const timeSlots = Array.from(timeSlotMap.values()).sort((a, b) => {
        const timeA = moment(`${parsedDate} ${a.start.replace(/[a-zA-Z]/g, '')}:00`);
        const timeB = moment(`${parsedDate} ${b.start.replace(/[a-zA-Z]/g, '')}:00`);
        return timeA.unix() - timeB.unix();
    });

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
                            const isSameAcrossAll = areSlotsSame(slot.screen1, slot.screen2) && areSlotsSame(slot.screen1, slot.screen3) && slot.screen1;

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
                                                <SessionCell slot={slot.screen3} isHappening={isCurrentTimeSlot(slot.screen3, parsedDate, today, timeIrl)} />
                                            </td>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2">
                                                <div className="font-bold md:hidden px-3 pt-2">Screen 2</div>
                                                <SessionCell slot={slot.screen2} isHappening={isCurrentTimeSlot(slot.screen2, parsedDate, today, timeIrl)} />
                                            </td>
                                            <td className="block md:table-cell px-0 md:px-3 py-0 md:py-2">
                                                <div className="font-bold md:hidden px-3 pt-2">Screen 1</div>
                                                <SessionCell slot={slot.screen1} isHappening={isCurrentTimeSlot(slot.screen1, parsedDate, today, timeIrl)} />
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

// Main component with toggle logic
export function Schedule() {
    const [view, setView] = useState('stacked'); // 'stacked' or 'combined'
    const [today, setToday] = useState('');
    const [timeIrl, setTimeIrl] = useState(0);

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

    const buttonBaseClass = "px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500";
    const activeClass = "bg-brand-800 text-white";
    const inactiveClass = "bg-white text-brand-700 hover:bg-brand-50";

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
            <div className="flex flex-col mx-auto">
                <div className="flex flex-wrap items-center mb-4">
                    <p className="font-display text-4xl font-medium text-brand-800 sm:text-7xl">Schedule</p>
                    <p className="w-full mt-4 font-display text-2xl text-brand-900">
                        Your day will be composed of 30-40 minute sessions including plenty of time to chat, network and move between talks.
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
                            className={`${buttonBaseClass} rounded-l-none -ml-px ${view === 'combined' ? activeClass : inactiveClass}`}
                        >
                            Combined
                        </button>
                    </span>
                </div>

                <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 sm:m-8">
                    {view === 'stacked' ? (
                        Object.keys(schedule).map((track) =>
                            Object.keys(schedule[track]).map((day) => (
                                <StackedScheduleView
                                    key={`${track}-${day}`}
                                    day={schedule[track][day]}
                                    parsedDate={parsedDate}
                                    today={today}
                                    timeIrl={timeIrl}
                                />
                            ))
                        )
                    ) : (
                        <CombinedScheduleView parsedDate={parsedDate} today={today} timeIrl={timeIrl} />
                    )}
                </div>
            </div>
        </div>
    );
}
