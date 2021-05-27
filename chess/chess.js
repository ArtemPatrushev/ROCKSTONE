'use strict';

const SIZE = 8;

const board = new Array(SIZE).fill(0).map(x => new Array(SIZE).fill(0));
let results_count = 0;

const showBoard = () => {
    for (let a = 0; a < SIZE; ++a) {
        let str = '';
        for (let b = 0; b < SIZE; ++b) {
            str += board[a][b] ? "Q " : ". ";
        };
        console.log(str);
    };
};

const tryQueen = (a, b) => {
    for (let i = 0; i < a; ++i) {
        if (board[i][b]) {
            return false;
        };
    };

    for (let i = 1; i <= a && b - i >= 0; ++i) {
        if (board[a - i][b - i]) {
            return false;
        };
    };

    for (let i = 1; i <= a && b + i < SIZE; i++) {
        if (board[a - i][b + i]) {
            return false;
        }
    };

    return true;
};

const setQueen = (a) => {
    if (a === SIZE) {
        showBoard();
        console.log("Result #", ++results_count,);
        return;
    };

    for (let i = 0; i < SIZE; ++i) {
        if (tryQueen(a, i)) {
            board[a][i] = 1;
            setQueen(a + 1);
            board[a][i] = 0;
        };
    };

    return;
};

setQueen(0);
