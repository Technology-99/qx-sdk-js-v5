import QxSdk from "./main.js";

console.log("读取环境变量 accessKeyId 和 accessKeySecret", process.env.ACCESS_KEY_ID);

const qxSdk = new QxSdk({
    accessKeyId: process.env.ACCESS_KEY_ID,
    accessKeySecret: process.env.ACCESS_KEY_SECRET,
    endpoint: process.envENDPOINT,
});