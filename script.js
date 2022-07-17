// Crie um objeto que receba ao menos três propriedades sobre você.

let about = {
    nome: "Amilton Neto",
    idade: 25,
    endereço: "Fortaleza-ce",
  }
  
  console.log(about)
  
  // Adicione uma nova propriedade sem alterar seu objeto inicial.
  
  about.pet = "doguinho"
  
  console.log(about)
  
  
  // Remova uma propriedade desse objeto.
  
  delete about.idade
  console.log(about)
  
  
  //Mostre no console todas as propriedades desse objeto.
  
  console.log(about)
  
  
  // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
  //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
  //Na propriedade amigos, adicione ao menos 4 itens.
  
  let cadastro = [
  {
    nome: "Amilton",
    idade: 25,
    telefone: 85999998888,
    amigos: ["Lili", "Larissa", "Pedro", "Lucas"],
  },{
    nome: "Lucas",
    idade: 20,
    telefone: 85997998857,
    amigos: ["Lili", "Larissa", "Pedro", "Amilton"],
  },{
  
    nome: "Larissa",
    idade: 26,
    telefone: 85997998856,
    amigos: ["Lili", "Lucas", "Pedro", "Amilton"],
  },{
    
    nome: "Pedro",
    idade: 31,
    telefone: 85997998855,
    amigos: ["Lili", "Lucas", "Larissa", "Amilton"]  
  },{
  
    nome: "Carol",
    idade: 21,
    telefone: 84997998853,
    amigos: ["Lara", "Danilo", "Rafael","Julia"]
  }
  ]
  
  // Mostre no console o nome de um amigo de cada lista.
  
  console.log(cadastro[0].amigos[2])
  console.log(cadastro[1].amigos[3])
  console.log(cadastro[2].amigos[1])
  console.log(cadastro[3].amigos[2])
  console.log(cadastro[4].amigos[1])