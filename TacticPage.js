var pieces = [
    {
        position: "e1",
        piecesymbol: "\u2654",
        caputred: false,
        incheck: false,
        type: "king",
        color: "white",
        castle: true
    },

    {
        position: "d1",
        piecesymbol: "\u2655",
        captured: false,
        type: "queen",
        color: "white",
    },

    {
        position: "a1",
        piecesymbol: "\u2656",
        captured: false,
        type: "rook",
        color: "white",
        castle: true,
    },

    {
        position: "h1",
        piecesymbol: "\u2656",
        captured: false,
        type: "rook",
        color: "white",
        castle: true,
    },

    {
        position: "c1",
        piecesymbol: "\u2657",
        captured: false,
        type: "bishop",
        color: "white",
    },

    {
        position: "f1",
        piecesymbol: "\u2657",
        captured: false,
        type: "bishop",
        color: "white",
    },

    {
        position: "b1",
        piecesymbol: "\u2658",
        captured: false,
        type: "knight",
        color: "white",
    },

    {
        position: "g1",
        piecesymbol: "\u2658",
        caputred: false,
        type: "knight",
        color: "white",
    },

    {
        position: "a2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "b2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "c2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "d2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "e2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "f2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "g2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "h2",
        piecesymbol: "\u2659",
        captured: false,
        type: "pawn",
        color: "white",
        ep: false,
        moved: false,
    },

    {
        position: "e8",
        piecesymbol: "\u265A",
        caputred: false,
        incheck: false,
        type: "king",
        color: "black",
        castle: true,
    },

    {
        position: "d8",
        piecesymbol: "\u265B",
        captured: false,
        type: "queen",
        color: "black",
    },

    {
        position: "a8",
        piecesymbol: "\u265C",
        captured: false,
        type: "rook",
        color: "black",
        castle: true,
    },

    {
        position: "h8",
        piecesymbol: "\u265C",
        captured: false,
        type: "rook",
        color: "black",
        castle: true,
    },

    {
        position: "c8",
        piecesymbol: "\u265D",
        captured: false,
        type: "bishop",
        color: "black",
    },

    {
        position: "f8",
        piecesymbol: "\u265D",
        captured: false,
        type: "bishop",
        color: "black",
    },

    {
        position: "b8",
        piecesymbol: "\u265E",
        captured: false,
        type: "knight",
        color: "black",
    },

    {
        position: "g8",
        piecesymbol: "\u265E",
        caputred: false,
        type: "knight",
        color: "black",
    },

    {
        position: "a7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "b7",
        piecesymbol: "\u265F",
        captured: false,
        type: "bpawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "c7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "d7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "e7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "f7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "g7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    },

    {
        position: "h7",
        piecesymbol: "\u265F",
        captured: false,
        type: "pawn",
        color: "black",
        ep: false,
        moved: false,
    }
]


var clickedarray = [];
var whosmove = true;

function positionToArray(pos){
    file = pos[0].charCodeAt(0) - 96;
    rank = parseInt(pos[1]);
    return [file,rank];
}

function arrayToPosition(arr){
    file = String.fromCharCode(arr[0]+96)
    rank = String.fromCharCode(arr[1]+48)
    return file + rank
}

function clicked(square){
    lenar = clickedarray.length;
    if (lenar == 0 ){
        if(empty(square) == false) {
            clickedarray.push(square);
        }
        else{
            clickedarray = []
        }
    }
    else if (lenar == 1){
        clickedarray.push(square);
        if (findpiece(clickedarray[1]) != -1){
            if ((pieces[findpiece(clickedarray[0])].color == pieces[findpiece(clickedarray[1])].color) && findpiece(clickedarray[1]) != -1){
                clickedarray = [clickedarray[1]];
        }

        }
        else if (legal(clickedarray) == true){
            move(clickedarray);
            clickedarray = [];
        }
        else{
            clickedarray = [];
        }
    }


}


function empty(clickedsquare){

    if (findpiece(clickedsquare) != -1){
        if ((whosmove && pieces[i].color == "white") || (!whosmove && pieces[i].color == "black")){
            return false;
        }

    }

    return true
}


function legal(clickedarray){
    piece = findpiece(clickedarray[0]);
    if (ischeck(clickedarray,piece.color) == true){
        return false;
    }
    start = positionToArray(clickedarray[0]);
    end = positionToArray(clickedarray[1]);
    if (start == end){
        return false
    }

    switch(pieces[piece].type){
        case "king":
            if (Math.abs(start[1]-end[1]) > 1){
                return false;
            }
            if (Math.abs(start[0]-end[0] > 1)){
                if (checkcastling(clickedarray) == true){
                    return true;
                }
                else{
                    return false;
                }
            }
            return true;

            break;

        case "queen":
            return orthogonal() || diagonal();
            break;

        case "rook":
            function orthogonal() {
                if (start[0] != end[0] && start[1] != end[1]) {
                    return false
                } else if (start[0] == end[0]) {
                    if (start[1] > end [1]) {
                        temp = end[1]
                        end[1] = start[1]
                        start[1] = temp
                    }
                    for (j = start[1] + 1; j < end[1]; j++) {
                        if (findpiece(arrayToPosition([start[0], j])) != -1) {
                            return false
                        }

                    }
                } else {
                    if (start[0] > end [0]) {
                        temp = end[0]
                        end[0] = start[0]
                        start[0] = temp
                    }
                    for (j = start[0] + 1; j < end[0]; j++) {
                        if (findpiece(arrayToPosition([j, start[1]])) != -1) {
                            return false
                        }
                    }
                }
                return true;
            }
            return orthogonal()
            break;

        case "bishop":
            function diagonal() {
                k1 = Math.abs(start[0] - end[0])
                k2 = Math.abs(start[1] - end[1])
                if (k1 == k2) {
                    if (start[0] - end[0] == k1 && start[1] - end[1] == k1) {
                        for (i = 1; i < start[0] - end[0]; i++) {
                            if (findpiece(arrayToPosition([start[0] + i, start[1] + i])) != -1) {
                                return false
                            }
                        }
                    } else if (start[0] - end[0] == k1 && start[1] - end[1] == -k1) {
                        for (i = 1; i < start[0] - end[0]; i++) {
                            if (findpiece(arrayToPosition([start[0] - i, start[1] + i])) != -1) {
                                return false
                            }

                        }
                    } else if (start[0] - end[0] == -k1 && start[1] - end[1] == k1) {
                        for (i = 1; i < start[1] - end [1]; i++) {
                            if (findpiece(arrayToPosition(start[0] + i, start[1] - i)) != -1) {
                                return false
                            }

                        }
                    } else if (start[0] - end[0] == -k1 && start[1] - end[1] == -k1) {
                        for (i = 1; i < Math.abs(start[0] - end[0]); i++) {
                            if (findpiece(arrayToPosition(start[0] + i, start[1] + i)) != -1) {
                                return false
                            }
                        }
                    }
                }
                else {
                    return false
                }
                return true;
            }
            return diagonal()
            break;

        case "knight":
            k1 = Math.abs(start[0]-end[0])
            k2 = Math.abs(start[1]-end[1])
            if (k1 == 1 && k2 == 2){
                return true;
            }
            else if (k2 == 1 && k1 == 2){
                return true;
            }
            else{
                return false
            }
            break;

        default:
            return true;
            break;
    }
}


function move(clickedarray){
    index = findpiece(clickedarray[0]);
    pieces[index].position = clickedarray[1];
    notation = pieces[index].piecesymbol + pieces[index].position
    console.log(notation)
    whosmove = !whosmove;
}

function findpiece(square){
    for (i = 0; i < pieces.length; i ++){
        if (square == pieces[i].position){
            return i
        }
    }
    return -1;
}

function checkcastling(clickedarray){
    return false;
}

function ischeck(clickedarray,color){
    return false;
}

clicked("e2")
clicked("e4")
clicked("e7")
clicked("e6")
clicked("d1")
clicked("f3")


