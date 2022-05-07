const mssqlcon = require('../../dbconnection');
class jobsMSSql { 
   async getJobs() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from jobs');
    return res.recordset;
  }

  async addJobs(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("product_name", prod.product_name)
    .input("product_price", prod.product_price)
    .input("product_description", prod.product_description)
    .input("product_qty", prod.product_qty)
    .execute("addProduct");
    return res;
 }

}
module.exports = new jobsMSSql();