Reflexão 1.0

1. O que ficou repetitivo no codigo?

   O codigo apresenta, acoplamento excessivo. A repetições no estilo inline dificultando a identidade visual
2. Se a lanchonete tivesse 30 itens, o que aconteceria?

   Se a lanchonete tivesse 30 itens. O arquivo App.js ficaria excessivamente extenso e poluído com dados estáticos.

Reflexão 2.0

1. O codigo ficou maior ou menor?

      Em termos de contagem de linhas total, o código ficou um pouco maior, pois agora temos dois arquivos e a estrutura das props.
2. Se você mudar a cor de fundo do <ItemCardapio/>, quantos lugares precisa alterar?

      Apenas um lugar. Essa é a maior vantagem da componentização. Ao alterar o estilo dentro do arquivo ItemCardapio.jsx, todos os 5 itens renderizados no App.jsx (ou 30, se houvesse) serão atualizados instantaneamente.
3. Como os dados(nome,preço)chegaram dentro do componente?

      Os dados chegaram através de Props (Propriedades). No React, as props funcionam como argumentos de uma função.
   No App.jsx, passamos os valores como atributos: <ItemCardapio nome="X-Salada" preco="{25}"/>.
   No ItemCardapio.jsx, o componente recebe esses dados em um objeto (que desestruturamos como { nome, preco }) e os utiliza para preencher o HTML.

Reflexão 3.0

1. Por que uma variavel comum(let total=0) não utiliza a tela?

   Uma variável comum (let) armazena o valor na memória, mas o React não "monitora" as mudanças nela. Para a tela atualizar, o componente    precisa sofrer uma re-renderização, e isso só acontece quando usamos o useState. O useState avisa ao React: "O dado mudou, desenhe a interface novamente".
2. Onde foi necessario guardar o numero total, no App.jsx ou no ItemCardapio.jsx?Por que?
   Foi necessário guardar no App.jsx (Pai). Isso ocorre devido ao conceito de Estado Compartilhado
3.Como o botão(filho) consegue avisar o App(pai) que houve um clique?

   através de uma Função de Callback passada via Props. O pai envia uma função (ex: aumentarContador) para o filho como se fosse um "envelope".
