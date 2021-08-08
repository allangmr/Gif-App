import getGifs from "../../helpers/getGifs";

describe('Test in getGifs.js', () => {
    test('should return 10 elements', async() => {
        const gifs = await getGifs('Dog');
        expect(gifs.length).toBe(12);
    });

    test('should return 0 elements', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});