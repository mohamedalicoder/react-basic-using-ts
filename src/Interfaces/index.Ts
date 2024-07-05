export interface Iform {
    username: string
    password: string
}

export interface IformInputs{
    label:string
    type:string
    id:string
    name:keyof Iform
    
}