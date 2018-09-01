const users = [
    {name: 'Iron Man', email: 'ironman@gmail.com'},
    {name: 'Hulk', email: 'hulk@gmail.com'}
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users);
    }
}