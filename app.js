require('dotenv').config();

const express = require('express');

//Підключаємо конфігурацію
const server = require("./api/server.js");
const {port, host} = require("./configuration");
const {connectDB} = require("./utils/db.js");

//Коннектимось до БД
connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once("open", startApp);

function startApp(){
    server.startServer(port, host);
} 