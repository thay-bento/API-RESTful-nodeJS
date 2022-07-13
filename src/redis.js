const Redis = require("ioredis")

   
    const redis = new Redis({
        host: process.env.REDIS_HOST || "localhost",
        port: process.env.REDIS_HOST || 6379,
        keyPrefix: "cache:"

    });

    async function getAll(){
        const keys = await redis.keys('*')
        return keys
   }
    async function get(key){
        const value = await redis.get(key)
        return value ? JSON.parse(value) : null;
    }

    function set(key, value){
        return redis.set(key, JSON.stringify(value));
    }

    
    function del(key){
        return redis.del(key);
    }

   

module.exports = { //exporta as funções
    set,
    get,
    del
}

