import { getCollection } from '../';

export default async function getHolidays(date) {
    let isoDate = new Date(date).toISOString();
    return (await getCollection('holidays')).find({ 'date': isoDate }).toArray();
}