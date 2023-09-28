
// use("bdacademia");
// db.dropDatabase();
// use("bdacademia");
// db.createCollection("personal");
// db.personal.insertMany([
//     {_id:1,
//         nome:"Júlio",
//         salario:3000, 
//         alunos:[
//             {
//                 nome:"Tere",
//                 idade:28
//             },
//             {
//                 nome:"João",
//                 idade:34
//             },
//             {
//                 nome:"Pedro",
//                 idade:60
//             }
//         ]
//     },
//     {_id:2,nome:"Adriano",salario:3000,alunos:[]},
//     {_id:3,nome:"Thaina",salario:4000,alunos:[]}
// ])

// //Como apagar algum dado de uma collection
// // db.personal.drop() //Apaga uma collection
// // db.personal.find()

// db.personal.deleteMany({})


// db.createCollection("treino");

// db.treino.insertOne(
//     {
//         nome:"Quadriceps",
//         dia: "Segunda",
//         exercicios:[
//             {
//                 nome:"Agachamento Livre",
//                 serie:5,
//                 repeticoes:12,
//                 peso:100
//             },
//             {
//                 nome:"Leg 45",
//                 serie:5,
//                 repeticoes:12,
//                 peso:200
//             },
//             {
//                 nome:"Cadeira Extensora",
//                 serie:5,
//                 repeticoes:12,
//                 peso:104
//             },
//             {
//                 nome:"Agachamento Hack",
//                 serie:5,
//                 repeticoes:12,
//                 peso:80
//             }
//         ]
//     }
// )
// db.treino.insertOne(
//     {
//         nome:"Costas",
//         dia: "Terça",
//         exercicios:[
//             {
//                 nome:"Barra Fixa",
//                 serie:5,
//                 repeticoes:6,
//                 peso:20
//             },
//             {
//                 nome:"Remada Baixa",
//                 serie:4,
//                 repeticoes:15,
//                 peso:60
//             },
//             {
//                 nome:"Remada Cavalo",
//                 serie:5,
//                 repeticoes:12,
//                 peso:80
//             },
//             {
//                 nome:"Puxada Alta",
//                 serie:4,
//                 repeticoes:15,
//                 peso:80
//             }
//         ]
//     }
// )

// use("bdacademia")
// //db.treino.find({})
// //db.treino.find({nome:"Costas"})
// db.treino.find({_id:ObjectId("64f866dedd11dfac8817592d")})


// use("bdacademia")
// db.treino.updateOne(
//     {_id:ObjectId("64f866dedd11dfac8817592d")},
//     {
//         $set:{dia:"Sexta"}
//     }
// )


// use("bdacademia")
// db.treino.updateOne(
//     {_id:ObjectId("64f866dedd11dfac8817592d"),"exercicios.nome":"Barra Fixa"},
//     {
//         $set:{
//             dia:"Sexta",
//             "exercicios.$.repeticoes":8
//         }
//     }
// )



    // {
    //     "nome": "Barra Fixa",
    //     "serie": 5,
    //     "repeticoes": 6,
    //     "peso": 20
    //   },


use("bd_sorveteria");

db.createCollection("sorvete");

db.sorvete.insertMany([
    {
        sabor:"Abacaxi",
        preco_kg:10,
    },
    {
        sabor:"Nutela",
        preco_kg:40,
    },
    {
        sabor:"Morango",
        preco_kg:20,
    },
    {
        sabor:"Banana",
        preco_kg:5,
    },
    {
        sabor:"Leite Condensado",
        preco_kg:40,
    },
    {
        sabor:"Chocolate",
        preco_kg:42.5,
    },
    {
        sabor:"Flocos",
        preco_kg:52.99,
    },
    {
        sabor:"Tomate",
        preco_kg:59.99,
    },
    {
        sabor:"Floresta Ilicita",
        preco_kg:49.99,
    }
]);

use("bd_sorveteria")
// 1) Listar todos os sorvetes.

// 2) Listar os sorvetes com preco_kg < 40

// 3) Listar o id e preço do sorvete de 
// banana

// 4) Listar os sorvetes com preco_kg >=20

// 5) Listar os nomes dos sorvetes com 
// preco_kg >= 20 e < 40

// 6) Listar os nomes dos sorvetes com 
// preco_kg >10 e <=44
