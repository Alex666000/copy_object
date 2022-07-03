import {
    addNewBooks,
    makeHairStyle,
    moveUser, removeBook, UCompaniesType, updateBook, updateNewCompany,
    updateUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from './copy-obj';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        hair: 32,
        // address - будет ссылкой и для user и для awesomeUser - для 2-х объектов:
        address: {
            title: 'Minsk'
        }
    }


    const awesomeUser = makeHairStyle(user, 32)


    // ожидаем:
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 32,
        // address - будет ссылкой и для user и для movedUser - для 2-х объектов:
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

// вызов функций:
    const movedUser = moveUser(user, 'Kiev')

    // ожидаем:
    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address).toBe('Kiev')
})

test('update laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 32,
        // address - будет ссылкой и для user и для movedUser - для 2-х объектов:
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

// вызов функций:
    const userCopy = updateUserLaptop(user, 'Macbook')

    // ожидаем:
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).not.toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('update js to TS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dima',
        hair: 32,
        // address - будет ссылкой и для user и для movedUser - для 2-х объектов:
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'js', 'react'],

    }

    let companies = {
        'Dima': [{id: 1, title: 'Epfffam'}, {id: 2, title: 'Incubator'}],
        'Artem': [{id: 2, title: 'Incubator'}]
    }

// вызов функций:
    const userCopy = updateNewCompany(user, 1, 'EPAM')

    // ожидаем:
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
})