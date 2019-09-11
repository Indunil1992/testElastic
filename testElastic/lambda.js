let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used
    redis.type({
        clusterIdentifier: 'clusterindunil',
        params: ['1']
    }, function (error, response, redisClient) {
        if (error) {
            console.log("errorrr");
             console.log(error);
            callback(error);
        } else {
             console.log("redisClient");
             console.log(redisClient);
            //redisClient.quit();
        }
    });

    callback(null, { "message": "Successfully executed" });
}