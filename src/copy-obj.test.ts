import {UserType} from './copy-obj';

function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u
    }
    // модифицировали копию
    copy.hair = power / 2
    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }


     const awesomeUser = hairdresser(user, 32)
    // ожидаем:
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)


})