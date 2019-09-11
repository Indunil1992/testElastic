module.exports = function() {
    this.clusters = [];

    this.clusters["clusterindunil"] = {
        host: process.env.EndPoint_redisClusterindunil,
        port: 6379,
        clusterModeEnabled: false
    };
};