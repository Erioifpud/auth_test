import { createConnection } from 'typeorm'

export const initDataBase = async (app) => {
  createConnection({
    type     : 'mysql',
    host     : '127.0.0.1',
    port     : 3306,
    username : 'root',
    password : 'er123456',
    database : 'auth_test',
    entities: [ __dirname + '/entity/*.ts'/*, 'dist/data/entity/*.js'*/],
    logging: ['query', 'error'],
    synchronize: true,
  }).then((connection: any) => {
    console.log('数据库连接成功')
    app.listen(4444)
    console.log('应用启动成功')
    return true
  }).catch((error: any) => {
    console.log(error)
    console.log('数据库连接异常')
    return false
  })
}
