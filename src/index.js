const start = new Date();
const hrstart = process.hrtime();
const fs = require('fs-extra');
const logger = require('../helpers/log.js');


const GroupServiceFactory = require('./services/group.js');

const arr = fs.readJsonSync('./data/data.json');

const ProcessedData = new GroupServiceFactory(arr);

const groupsToPrint = ProcessedData.computed;

fs.writeFileSync('./data/groups.json', JSON.stringify(groupsToPrint.map(({ rating, members }) => ({ rating, members: members.length }), null, 4)));

const end = new Date() - start;
const hrend = process.hrtime(hrstart);

logger(`Execution time:  ${end}`);
logger(`Execution time (hr): ${hrend[0]} ${hrend[1] / 1000000}`);
