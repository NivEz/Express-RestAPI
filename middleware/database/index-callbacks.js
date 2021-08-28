'use strict';

// const db = require('./storage.json'),

const fs = require('fs'),
    errorMessage = 'no such table';


module.exports = {
    select,
    insert,
    remove,
    update,
    patch
};


function select(tableName, id, callback) {
    _readFile(db => {
        console.log(db)
        if (!db[tableName]) {
            return {msg: errorMessage}
        }
        let itemsArr = db[tableName]
        if (id) {
            itemsArr = _searchById(itemsArr, id);
        }
        if (itemsArr.length === 0) {
            callback({msg: "Could not find item with the specified ID."})
        }

        callback(itemsArr)
    })
    console.log("xxxx")
}


function insert(tableName, newGame, callback) {
    _readFile(db => {
        if (!db[tableName]) {
            return {msg: errorMessage}
        }
        newGame.id = new Date().getTime();
        db[tableName].push(newGame)
        _writeFile(db)
        callback(newGame);
    })
}

function remove(tableName, id, callback) {
    _readFile(db => {
        if (!db[tableName]) {
            return {msg: errorMessage}
        }
        const rows = db[tableName]
        const deletedGame = _searchById(rows, id)
        db[tableName] = rows.filter(row => row.id !== id);
        _writeFile(db);
        callback(deletedGame)
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

function _readFile(callback) {
    fs.readFile(__dirname + '/db.txt',
        {encoding: 'utf8', flag: 'r'},
        (err, db) => {
            if (err) {
                return console.error(err)
            }
            else {
                callback(JSON.parse(db));
            }
        });
}

function _writeFile(dbNew) {
    dbNew = JSON.stringify(dbNew, null, 4);
    fs.writeFile(__dirname + '/db.txt', dbNew, err => {
        if (err) return console.error(err);
    })
}