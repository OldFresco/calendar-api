import * as chai from 'chai';
import server from '../test-helpers/server.mock';
import userMessage from '../test-helpers/data.mock'

const expect = chai.expect;

describe('Call to POST a user message at /inbox endpoint', () => {
    describe('#200', () => {
        it('should return OK status', (done) => {
            server
                .post('/inbox')
                .send(userMessage)
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
