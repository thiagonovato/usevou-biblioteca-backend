Aplicação desenvolvida para particiação do processo seletivo da USEVOU

- Esta aplicação se trata do Backend, desenvolvido em Node.JS utilizando o Express.
- Foram criados endpoints REST para consumo do serviço, entre elas:
    - a listagem de livros
    - buscar dados de um livro em específico (pelo código id)
    - salvar um novo livro
    - fazer a reserva de um livro,
    - consultar uma reserva pelo número do cartão
    - consultar uma reserva pelo número id do livro
    - devolução/baixa do livro
    - Endpoit para filtrar por categoria
    - Tela para listar todas as reservas, com a opção de acessar mais detalhes

    Pontos de melhoria
    - Integrar as mesmas informações de reserva com os livros na mesma tela
    - Trazer um badge para cada livro mostrando a disponibilidade individual separando por cor 

Esta aplicação foi implantada no Zeit, através do seguinte endereço: https://usevou-biblioteca-backend-cronrvmhow.now.sh/
O frontend desta aplicação foi implantada no Firebase Hosting, através do seguinte endereço: https://usevou-biblioteca.firebaseapp.com/


Créditos:
Autor: Thiago Novato
Email: thiago@thiagonovato.com.br
Site: thiagonovato.com.br