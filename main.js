const grid = document.querySelector(".grid")
var modal = document.querySelector(".modal")
const gridSize = 10
var mineCounter = 0
var tiles = []
console.log(tiles)
for(var rowIndex = 0; rowIndex < gridSize; rowIndex++)
{
    var row = document.createElement("div")
        row.className = "row"
    tiles.push([])
    for(var squareIndex= 0; squareIndex < gridSize; squareIndex++)
    {
        var tile = {
            hasAMine: false,
            xPos: rowIndex,
            yPos: squareIndex,
            clickListener: function clickTile(tile)
            {
                console.log(tile)
                if (this.hasAMine === true)
                {   
                    modal.hidden = false
                    console.log("MAN your so bad your so bad you little trash.")
                    this.square.className = "square mine"
                }
                else {
                    this.square.innerText = this.surroundingMines

                    if (this.surroundingMines === 0)
                    {
                        
                        console.log({rowIndex, squareIndex})
                        if( tiles[this.xPos] && tiles[this.xPos][this.yPos-1])
                        {
                            tiles[this.xPos][this.yPos-1].square.innerText = tiles[this.xPos][this.yPos-1].surroundingMines
                            if (tiles[this.xPos][this.yPos-1].surroundingMines === 0) 
                            {
                                clickTile(tiles[this.xPos][this.yPos-1])
                            }
                        }
                        if( tiles[this.xPos+1] && tiles[this.xPos+1][this.yPos])
                        {
                            tiles[this.xPos+1][this.yPos].square.innerText = tiles[this.xPos+1][this.yPos].surroundingMines
                        }
                        if( tiles[this.xPos] && tiles[this.xPos][this.yPos+1])
                        {
                            tiles[this.xPos][this.yPos+1].square.innerText = tiles[this.xPos][this.yPos+1].surroundingMines
                        }
                        if( tiles[this.xPos-1] && tiles[this.xPos-1][this.yPos])
                        {
                            tiles[this.xPos-1][this.yPos].square.innerText = tiles[this.xPos-1][this.yPos].surroundingMines
                        }
                        if( tiles[this.xPos-1] && tiles[this.xPos-1][this.yPos-1])
                        {
                            tiles[this.xPos-1][this.yPos-1].square.innerText = tiles[this.xPos-1][this.yPos-1].surroundingMines
                        }
                        if( tiles[this.xPos-1] && tiles[this.xPos-1][this.yPos+1])
                        {
                            tiles[this.xPos-1][this.yPos+1].square.innerText = tiles[this.xPos-1][this.yPos+1].surroundingMines
                        }
                        if( tiles[this.xPos+1] && tiles[this.xPos+1][this.yPos-1])
                        {
                            tiles[this.xPos+1][this.yPos-1].square.innerText = tiles[this.xPos+1][this.yPos-1].surroundingMines
                        }
                        if( tiles[this.xPos+1] && tiles[this.xPos+1][this.yPos+1] )
                        {
                            tiles[this.xPos+1][this.yPos+1].square.innerText = tiles[this.xPos+1][this.yPos+1].surroundingMines
                        }
                    }
                    console.log("you're safe... for now...")
                }
            }
        }
        tiles[rowIndex].push(tile)
        tile.square = document.createElement("div")
        tile.square.className = "square"
        if(Math.random() * 10 <= 1)
        {
            tile.hasAMine = true
        }
        tile.square.addEventListener("click", tile.clickListener.bind(tile))
        row.append(tile.square)
    }
    grid.append(row)
}
checkMines()

function checkMines()
{
    for(var checkMinesIndex = 0; checkMinesIndex < 10; checkMinesIndex++)
    {  
        for(var checkTileIndex = 0; checkTileIndex < 10; checkTileIndex++)
        {
            if(tiles[checkMinesIndex][checkTileIndex].hasAMine === false)
            {
                var nearbyMines = 0
                try {
                    if( tiles[checkMinesIndex] && tiles[checkMinesIndex][checkTileIndex-1]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex+1] && tiles[checkMinesIndex+1][checkTileIndex]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex] && tiles[checkMinesIndex][checkTileIndex+1]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex-1] && tiles[checkMinesIndex-1][checkTileIndex]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex-1] && tiles[checkMinesIndex-1][checkTileIndex-1]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex-1] && tiles[checkMinesIndex-1][checkTileIndex+1]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex+1] && tiles[checkMinesIndex+1][checkTileIndex-1]?.hasAMine=== true)
                    {
                        nearbyMines++
                    }
                    if( tiles[checkMinesIndex+1] && tiles[checkMinesIndex+1][checkTileIndex+1]?.hasAMine=== true )
                    {
                        nearbyMines++
                    }
                } catch (error) {
                    console.error(error)
                }
                tiles[checkMinesIndex][checkTileIndex].surroundingMines = nearbyMines


            }   
        }
    }

}