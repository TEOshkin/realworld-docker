//Підключаємо конфігурацію
const {port, host} = require("./configuration");
const {connectDB} = require("./helpers/db.js");

//Коннектимось до БД
connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once("open", startServer);

//При успішному з'єднанні запускаємо сервер
function startServer(){
    app.listen(port, () => {
        console.log(`Server is running on ${host}:${port}`)
    })
}