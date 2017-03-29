class MetaController {
    get(req, res) {
        res.json({ description: 'calendar api', health: 'ok' });
    }
}

export default new MetaController();