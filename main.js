class hero{
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar(){
    let weapon = ''
    if(this.tipo == 'mago'){
      weapon = 'magia'
    } else if(this.tipo == 'guerreiro'){
      weapon = 'espada'
    } else if (this.tipo == 'monge'){
      weapon = 'artes marciais'
    } else if(this.tipo == 'ninja'){
      weapon = 'shuriken'
    } else {
      weapon = 'arma padrão'
    }
    return console.log(`O ${this.tipo} atacou usando ${weapon}`)
  }
}

let hero1 = new hero('Naruto', 19, 'ninja')
let hero2 = new hero('Fly', 19, 'guerreiro')
let hero3 = new hero('Merlin', 19, 'mago')
let hero4 = new hero('Pay mei', 19, 'monge')
let hero5 = new hero('Sasuke', 19, 'policial')

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
hero5.atacar()