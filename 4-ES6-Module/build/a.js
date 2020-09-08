'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var person = {
    name: 'Tom',
    age: 20
};

function changeName() {
    person.name = 'new name';
}

var info = exports.info = {
    person: person,
    changeName: changeName
};