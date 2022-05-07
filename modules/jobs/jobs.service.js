const mssqlcon = require('../../dbconnection');
const mssql = require('mssql');
class jobsService {
    async getJobs(req, res) {
      try {

         const conn = await mssqlcon.getConnection();
         const result = await conn.request().query('select * from jobs');
         res.send(result.recordset);

      }
      catch (error) {
         console.log(error);
      }
    }

    async addJobs(req, res) {
      try {
         var prod = req.body;
         const conn = await mssqlcon.getConnection();
         const output = await conn.request()
         .input("contact_person", mssql.NVarChar, prod.contact_person)
         .input("contact_phone", mssql.NVarChar, prod.contact_phone)
         .input("contact_email", mssql.NVarChar, prod.contact_email)
         .input("job_title", mssql.NVarChar, prod.job_title)
         .input("job_type", mssql.NVarChar, prod.job_type)
         .input("job_contents", mssql.NVarChar, prod.job_contents)
         .input("is_approved", mssql.Bit, 0)
         .input("is_valid", mssql.Bit, 1)
         .input("created_by", mssql.VarChar, "Victor Leung")
         .input("created_datetime", mssql.DateTime, new Date())
         .input("modified_by", mssql.VarChar, "Victor Leung")
         .input("modified_datetime", mssql.DateTime, new Date())
         .query(`
            INSERT INTO 
               [dbo].[jobs] 
            (
               [contact_person],
               [contact_phone],
               [contact_email],
               [job_title],
               [job_type],
               [job_contents],
               [is_approved],
               [is_valid],
               [created_by],
               [created_datetime],
               [modified_by],
               [modified_datetime]
            ) VALUES ( 
               @contact_person, 
               @contact_phone, 
               @contact_email, 
               @job_title, 
               @job_type, 
               @job_contents, 
               @is_approved, 
               @is_valid, 
               @created_by,  
               @created_datetime,  
               @modified_by,  
               @modified_datetime
            )`
               );

         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
    }

}
module.exports = new jobsService();