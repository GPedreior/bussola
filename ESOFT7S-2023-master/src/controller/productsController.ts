import { Request, Response} from 'express'
import { writeFile, readFile } from 'fs/promises'

class productsController {
    public async createList(req: Request, res: Response) {
        try {
            writeFile('products.json', JSON.stringify(req.body, null, 2))

        }
        catch(err) {
            console.error('erro na escrita', err)
        }
        return res.status(201).send()
    }
}

export default new productsController()