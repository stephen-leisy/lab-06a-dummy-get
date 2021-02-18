const { app } = require('../app.js');
const { albums } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should respond with all albums',

    async (done) => {
        const expectation = {

            results: albums
        };

        const response = await request.get('/albums');
        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });

it('should respond with Sun-ra',



    async (done) => {
        const expectation = {

            results: {
                id: 1,
                name: 'Sun Ra: Space Is The Place',
                image: 'sun-ra.png',
                description: "an excellent introduction to Sun Ra's vast and free-form jazz catalog",
                category: 'jazz',
                price: 20,
                instock: true
            }
        };


        const response = await request.get('/albums/1');


        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });