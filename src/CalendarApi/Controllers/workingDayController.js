import isWeekend from '../../CalendarApi.ApplicationServices/isWeekend';

class WorkingDayController {
    async get(req, res) {

        const currentDate = new Date();
        let isHoliday = false;

        if (isWeekend(currentDate)) {
            res.json(404);
        }
        if (isHoliday) {
            res.json(404);
        }

        res.json(200);
    }
}

export default new WorkingDayController();