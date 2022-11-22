import axios from 'axios';
import chalk from "chalk";

const id = process.argv[2];

const title = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(function (json) { return json.data.title });


const promise = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(function (json) {
        const comp = json.data.completed;
        if (comp === true) { console.log(chalk.green(title)) }
        else { console.log(chalk.red(title)) }
    });
