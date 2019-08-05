const axios = require('axios');
const request = require('request');
const sum = (a, b) => {
    return a + b;
}

const fetchData = (callback) => {
    axios.get('http://localhost:8081/data')
        .then(function (response) {
            // handle success
            if(callback) {
                callback(response.data);
            }
        })
        .catch(function (error) {
            // handle error
            if(callback) {
                callback(error);
            }
        })
        .finally(function () {
            // always executed
            if(callback) {
                callback({});
            }
        });
    
}

const requestData = () => {
    var options = {
        url: 'http://localhost:8081/data',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

const testAsyncWait = async () => {
    try {
        const data = await axios.get('http://localhost:8081/data');
        return data.data;
    } catch (error) {
        return error;
    }
}

module.exports = {
    sum,
    fetchData,
    requestData,
    testAsyncWait
};