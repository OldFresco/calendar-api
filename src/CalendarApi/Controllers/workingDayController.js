import isWeekend from '../../CalendarApi.ApplicationServices/isWeekend';
import isHoliday from '../../CalendarApi.ApplicationServices/isHoliday'

class WorkingDayController {
    /**
     * Get whether today is a working day
     * returns 200 OK if today is a working day, 404 if it is not
     */
    async get(req, res) {
        const currentDate = new Date();

        if (isWeekend(currentDate)) {
            res.sendStatus(404);
        }
        if (await isHoliday(currentDate)) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    }
}

export default new WorkingDayController();