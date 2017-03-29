import getHolidays from '../CalendarApi.Persistence/Queries/getHolidays';

export default async function isHoliday(date) {
    const holidays = await getHolidays(date);
    return holidays.length > 0;
}