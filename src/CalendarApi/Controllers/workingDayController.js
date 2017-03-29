class WorkingDayController {
    async get(req, res) {

        let currentDate = new Date();
        let day = currentDate.getDay();
        let isWeekend = (day === 0 || day === 6);
        let isHoliday = false;

        if (isWeekend) {
            res.json(404);
        }
        if (isHoliday) {
            res.json(404);
        }

        res.json(200);
    }
}

export default new WorkingDayController();