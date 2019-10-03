class TicTacToe {
    constructor() {
        this.matrix = [null, null, null, null, null, null, null, null, null];
        this.currentSymbol = "x";
        this.rang = 3;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex * this.rang + columnIndex] !== null)
            return;
        this.matrix[rowIndex * this.rang + columnIndex]  = this.currentSymbol;
        if(this.currentSymbol === "x")
            this.currentSymbol = "o";
        else
            this.currentSymbol = "x";
        this.count++;
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw() === true;
    }

    getWinner() {
        var row = ""; 
        var column = "";
        var crossF = "";
        var crossB = "";
        for(let i = 0; i < this.matrix.length; i++)
        {
            if(i % this.rang === 0)
                row = "";
            row += this.matrix[i];
            if( row === "xxx" || row === "ooo")
                return row[0];
            column = this.matrix[i] + this.matrix[i + this.rang] + this.matrix[i + this.rang * 2];
            if(column === "xxx" || column === "ooo")
                return column[0];
            if(i > 0 && i % 2 === 0 && crossF.length !== this.rang)
                crossF += this.matrix[i];
            if(i % 4 === 0)
                crossB += this.matrix[i];
        }
        
        if( crossF === "xxx" || crossF === "ooo")
            return crossF[0];
        if( crossB === "xxx" || crossB === "ooo")
            return crossB[0];
        return null;
    }

    noMoreTurns() {
        return this.matrix.findIndex(x=> x === null) === -1;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex * this.rang + colIndex];
    }
}

module.exports = TicTacToe;
