# Carta Cifrada


***

## 1. Carta cifrada inspirada em cifra de César.

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto
  
	Em carta cifrada foi a minha primeira aplicação web Bootcamp. Nela o usuário poderá cifrar e decifrar textos (cartas) indicando a chave de deslocamento ## offset.
  É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de deslocamento. Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante.

Essa aplicação Web é direcionada a adultos que desejam de uma forma de escrever cartas onde somente os mesmos possam saber do conteúdo, sendo assim outras pessoas não possam ler, se tornando como uma mensagem secreta. Proporcionando momentos entre usuários decifrando mensagens ou cifrando usando certo número de deslocamento.

## 3.Processo de decisão do protótipo

 Para iniciar o projeto fiz um esboço do desenho no Figma onde colocaria campos de texto, fotos e botões. Trabalhei com HTML, CSS E JAVASCRIPT, com espaço para função de deslocamento. Fiz um campo onde usuário digita o texto e outro para aparecer campo decifrado, contém também dois botões, um cifra o outro decifra texto.
 (https://www.figma.com/file/UOqPemYH3onOl4f2CagGoT/Untitled?node-id=0%3A1)



