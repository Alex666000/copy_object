export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
// обычный user плюс свойство laptop
export  type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export  type UserWithBooksType = UserType & {
    books: Array<string>
}
export  type UCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        // модифицировали копию
        ...u,
        hair: u.hair / 2
    }
    return copy
}

export function updateNewCompany(u: UCompaniesType, id: number, companyTitle: string) {
    return (
        {
            ...u,
            companies: u.companies.map(c => c.id === id ? {...c, title: companyTitle} : c)
        }
    )
}

export function updateUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, newBooks: any) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string, newBooks: string) {
    return (
        {
            ...u,
            books: u.books.filter(b => b !== bookForDelete)
        }
    )
}

export const updateCompanyTitle2 = (companies: any,
                                    userName: string,
                                    companyId: number,
                                    newTitle: string
) => {
    return (
        {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c) }
}
    )
}

