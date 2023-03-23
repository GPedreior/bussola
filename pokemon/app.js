import { writeFile, readFile } from 'fs/promises'
import { get } from 'http';

const linkAPI = "https://pokeapi.co/api/v2/pokemon?limit=10";


class getData {
    async pegaPokemon() {
        const listaPokemon = await fetch(linkAPI)
        listaPokemon.json().then(pokemon => { // em listaPokemon.json estamos convertendo o resultado pra um formato json
            //console.log(pokemon.results) //- já faz aparecer o resultado.
            writeFile("pegueiOsPokemon.txt", JSON.stringify(pokemon.results, null, 2))  // printando num arquivo .txt o resultado o JSON
        })
    }
}

function main() {
    new getData().pegaPokemon()
}

main()