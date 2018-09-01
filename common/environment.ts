export const environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: {url: process.env.MONGO_URL || 'mongodb://localhost:27017/meat-api'}
}