class Emprendedor {
    nombre: string
    email: string|null
    password: string|null
    telefono: string
    apellido: string
    dni: number

    // el signo de pregunta ? se usa para decir que el parametro es opcional
    // el signo ! se usa para decirle que el valor que le asignas al atributo de la clase puede ser del tipo de dato que espera o null
    constructor(email: string, password: string, nombre?: string, telefono?: string, apellido?: string, dni?: number) {
        this.email = email
        this.password = password
        this.nombre = nombre!
        this.apellido = apellido!
        this.dni = dni!

    }
}

/*
nombre: string,
    email: email!.current!.value?,
    password: (password.current.value)!,
    telefono:null,
    apellido:null,
    dni:null*/
