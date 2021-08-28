'use strict';

// const db = require('./storage.json'),

const fs = require('fs').promises,
    errorMessage = 'no such table';


module.exports = {
    select,
    insert,
    remove,
    update,
    patch
};

// The implementation commented below used for a local storage on this JS file.
// function select(tableName, id) {
//     if (!db[tableName]) {
//         return {msg: errorMessage}
//     }
//     // we parse the table so the user wouldn't be able to edit the data with the cursor
//     let itemsArr = JSON.parse(JSON.stringify(db[tableName]))
//     if (id) {
//         itemsArr = _searchById(itemsArr, id);
//     }
//     if (itemsArr.length === 0) {
//         return {msg: "Could not find item with the specified ID."}
//     }
//     return itemsArr;
// }


async function select(tableName, id) {
    const db = await _readFile()
    if (!db[tableName]) {
        return {msg: errorMessage}
    }
    let itemsArr = db[tableName]
    if (id) {
        itemsArr = _searchById(itemsArr, id);
    }
    if (itemsArr.length === 0) {
        return {msg: "Could not find item with the specified ID."}
    }
    return itemsArr;

}


async function insert(tableName, newGame) {
    const db = await _readFile()
    if (!db[tableName]) {
        return {msg: errorMessage}
    }
    newGame.id = new Date().getTime();
    db[tableName].push(newGame)
    _writeFile(db)
    return newGame
}


function remove(tableName, id) {
    return _readFile()
        .then(db => {
            if (!db[tableName]) {
                return {msg: errorMessage}
            }
            const rows = db[tableName]
            const deletedGame = _searchById(rows, id)
            db[tableName] = rows.filter(row => row.id !== id);
            return _writeFile(db)
                .then(() => {
                    console.log("deleted game: ", deletedGame)
                    return deletedGame
                })
                .catch(e => console.log(e))
        })
}

function update(tableName, id, fieldsToUpdate) {
    if (!db[tableName]) {
        return {msg: errorMessage}
    }
    const rows = db[tableName];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === id) {
            //rows[i] = fieldsToUpdate;
            Object.assign(rows[i], fieldsToUpdate);
            return {msg: rows}
            //return ;
        }
    }
}

function patch(tableName, id, fieldToUpdate) {
    if (!db[tableName]) {
        return {msg: errorMessage}
    }
    const rows = db[tableName];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === id) {
            //rows[i] = fieldsToUpdate;
            //Object.keys(rows[i])[0] = fieldToUpdate
            const key = Object.keys(fieldToUpdate)[0]
            Object.assign(rows[i], fieldToUpdate)
            return {msg: rows}
            //return ;
        }
    }
}

function _searchById(arr, id) {
    return arr.filter(item => item.id === id);
}

async function _readFile() {
    let db = [];
    try {
        db = await fs.readFile(__dirname + '/db.txt',
            {encoding: 'utf8', flag: 'r'})
        db = JSON.parse(db)
    } catch (e) {
        console.log(e)
    }
    return db;

}

function _writeFile(dbNew) {
    try {
        dbNew = JSON.stringify(dbNew, null, 4);
        fs.writeFile(__dirname + '/db.txt', dbNew)
    } catch (e) {
        console.log(e)
        //return e
    }
}