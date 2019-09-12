module.exports = function() {
    this.clusters = [];

    this.clusters["internal-cluster"] = {
        host: "internal-cluster.y6jiqb.clustercfg.use1.cache.amazonaws.com",
        port: 6379,
        clusterModeEnabled: true
    };
};