const {sum, fetchData, requestData, testAsyncWait} = require('../app');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

// const testAxiosCallback = () => {
//     fetchData((_data) => {
//         const data = {one: 1};
//         data['two'] = 2;
//         expect(data).toEqual({one: 1, two: 3});
//     })
// }
// test('Test axios get data & using callback', testAxiosCallback);

const testPromise = () => {
    return expect(requestData()).resolves.toMatchObject({ "a": 1 });
}
test('Test Promise', testPromise);

const testAsyncAwait = async () => {
    const data = await testAsyncWait();
    expect(data).toMatchObject({ "a": 2 });
}
test('Test Async Await', testAsyncAwait);

// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 3});
//   });