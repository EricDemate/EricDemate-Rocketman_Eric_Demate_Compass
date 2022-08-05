/*Neste miniprojeto iremos criar um objeto de 
postagem que deverá conter as seguintes informações
-Titulo
-Mensagem
-Autor
-Visualizações 
-Comentários
            (autor, mensagem)
estaAoVivo
Este miniprojeto foi realizado com o auxilio 
https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=12029s

*/

var postagem = {
    titulo: 'Mini Projeto 13',
    mensagem: 'Curso Javascript Completo 2020',
    autor: 'Jhonatan de Souza',
    visualizacoes: 8,
    comentarios: [
        { autor: 'Eric L Demate', mensagem: 'Curso muito bom!' },
        { autor: 'Petrus Z Demate', mensagem: 'Aprendi muito com este curso!' }
    ],
    estaAoVivo: true
}

console.log(postagem);