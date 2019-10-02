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
        this.matrix[rowIndex * this.rang + columnIndex]  = this.currentSymbol;
        if(this.currentSymbol === "x")
            this.currentSymbol = "o";
        else
            this.currentSymbol = "x";
        this.count++;
    }

    isFinished() {
        return this.getWinner() !== null
    }

    getWinner() {
        var row = ""; 
        var column = "";
        var crossF = "";
        var crossB = "";
        for(let i = 0; j < this.matrix.length; j++)
        {
            row += this.matrix[i];
            if( row === "xxx" || row === "ooo")
                return row[0];
            if(i !== 0 && i % 3 === 0)g
                row = "";
            if(i % 2 === 0)
                crossF = this.matrix[i];
            if(i % 4 === 0)
                crossB = this.matrix[i];
        }

        if( crossF === "xxx" || crossF === "ooo")
            return crossF[0];
        if( crossB === "xxx" || crossB === "ooo")
            return crossB[0];
        return null;
    }

    noMoreTurns() {
        return this.matrix[i].findIndex(null) > 0;
    }

    isDraw() {
        if(!this.noMoreTurns())
            return false;
        
        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
