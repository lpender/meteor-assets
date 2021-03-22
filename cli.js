#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const runCode = require("./meteor-assets");


let questions = [
    {
        type: 'input',
        name: 'sourceAndroidIcon',
        message: "Image icon android:"
    },
    {
        type: 'input',
        name: 'sourceIosIcon',
        message: "Image icon ios:",
    },
    {
        type: 'input',
        name: 'sourceAndroidSplash',
        message: "Image splash android:",
    },
    {
        type: 'input',
        name: 'sourceIosSplash',
        message: "Image splash ios:",
    },
    {
        type: 'input',
        name: 'dir',
        message: "Directory:",
    }]

let questionsUniqueFile = [
    {
        type: 'input',
        name: 'sourceFile',
        message: "File to be used in all assets:",
    },
    {
        type: 'input',
        name: 'dir',
        message: "Directory:",
    }]

program.version('1.0.0');

program
    .option('-f, --file', 'use only one source image for all generated images.')

program.command('gen').description('generate assets').action(() => {
    if (!program.file) {
        inquirer.prompt(questions).then((answers) => {
            runCode.run(answers);
        })
    } else {
        inquirer.prompt(questionsUniqueFile).then((answers) => {
            runCode.run(answers);
        })
    }
})

program.parse(process.argv);




