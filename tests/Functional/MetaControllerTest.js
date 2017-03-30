import * as chai from 'chai';
import server from '../TestHelpers/mockServer';

const expect = chai.expect;

describe('Given a GET /meta request', () => {
    describe('When handled', () => {
        it('should return json', (done) => {
            server
                .get('/meta')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    expect(res.type)
                        .to
                        .eql('application/json');
                    done();
                });
        });

        it('should return a response body with property health value equal to ok', (done) => {
            server
                .get('/meta')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    expect(res.body.health)
                        .to
                        .eql('ok');
                    done();
                });
        });

        it('should return a response body with property key description', (done) => {
            server
                .get('/meta')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    expect(res.body.description)
                        .to
                        .eql('calendar api');
                    done();
                });
        });
    });
});