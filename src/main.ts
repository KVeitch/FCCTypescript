type ID = string
type PopulatTag = string

interface UserInterface {
  id: ID
  name: string,
  surname: string,
  age?: number,
}



const user: UserInterface | null = null


const user2: UserInterface = {
  name: 'Jack',
  surname: 'Smith'
}


let unionUsage: number | string = '1'

let errorMessage: string | null = null

