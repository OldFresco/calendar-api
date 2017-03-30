import * as chai from 'chai';
import server from '../TestHelpers/mockServer';

const expect = chai.expect;

describe('Given a GET /workingday request', () => {
    describe('When handled and the date is a working day \n', () => {
        it('should return a 200 OK status code', (done) => {
            server
                .get('/workingday')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    done();
                });
        });

        it('should return json', (done) => {
            server
                .get('/workingday')
                .end((err, res) => {
                    expect(res.type)
                        .to
                        .eql('application/json');
                    done();
                });
        });
    });
});