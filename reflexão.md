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
