import Client from "./database"

export type Book = {
    id: Number,
    title: string,
    total_pages: Number,
    author: string,
    type: string,
    summary:string;
};
    

export class BookStore {
    async index(): Promise<Book[]> {
        try {
            const conn = await Client.connect()
            const sql = "SELECT * FROM book"

            const result = await conn.query(sql)

            conn.release()

            return result.rows
          } catch(err) {
            throw new Error(`Cannot get books. Error: ${err}`)
        }
    }
}