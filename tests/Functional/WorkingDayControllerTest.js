import * as chai from 'chai';
import server from '../TestHelpers/mockServer';

const expect = chai.expect;

describe('Given a GET / request', () => {
    describe('When handled and the date is a working day', () => {
        it('should return a 200 OK status code', (done) => {
            server
                .get('/')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    done();
                });
        });
    });
});