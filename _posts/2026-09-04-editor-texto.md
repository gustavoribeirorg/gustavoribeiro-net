---
title: Fiz meu próprio editor de texto
date: 2026-09-04 12:50 -0300
layout: post
excerpt_separator: <!--more-->
categories: [Cotidiano]
tags: [técnologia, programação, homelab]
---

Uma das coisas que me impedia de escrever mais por aqui era o processo após ter o texto pronto. A primeira versão do blog era em HTML puro e eu precisava montar a página com o novo post, atualizar o índice e o feed manualmente e depois subir ao servidor. 

<!--more-->

Desde que eu migrei meu blogue para [Jekyll]({% post_url 2025-11-22-jekyll %}), as páginas são geradas de forma automática, mas preciso estar no meu próprio computador por causa do Ruby e as gems necessárias para o Jekyll rodar.

Como passo o dia no emprego, eu só consigo escrever novos textos em casa, mas, por trabalhar o tempo todo na frente do computador, muitas vezes eu não quero chegar no meu lar e sentar na frente do monitor, então eu anotava ideias no bloco de notas para escrever aos finais de semana. 

Muitas dessas ideias acabavam ficando de lado porque, quando eu podia escrever, eu já não estava mais animado com o tema ou tinha esquecido o ângulo que eu havia imaginado para o texto.

Pensando nisso, eu resolvi criar um sistema para automatizar a publicação dos textos deste blogue. Usei o Gemini para criar um editor de texto que se conecta diretamente com meu servidor e publica os posts clicando em um botão. 

Primeiro, eu fiz um programa mesmo, de instalar no computador. Depois de pronto e funcionando, eu mudei de ideia e refiz em uma versão web para eu conseguir acessar de qualquer lugar. 

Afinal, o problema era ter que estar no meu próprio computador para escrever, então a primeira versão não resolvia essa questão. Provavelmente, um desenvolvedor experiente já teria pensado nisso desde o início...

Passei a semana inteira conversando com o Gemini até chegar na versão final. Mesmo fazendo com IA, aprendi bastante coisa no processo e aproveitei pra criar uma [wiki](https://gustavoribeiro.net/wiki) com informações para eu consultar no futuro. 

Durante esse período, cunhei um novo termo: *Programação em Linguagem Natural*. Não sei se já falam isso por aí, mas foi o que senti enquanto digitava o prompt. 

Eu sei um pouco de Python e Java e senti que, ao seguir as regras e as lógicas de linguagens de programação ao escrever o prompt, consigo ter muito mais controle sobre o resultado final. 

É muito importante também saber o que você quer e como quer. Isso evita retrabalhos e correções que não existiriam se o prompt inicial estivesse completo. Quem trabalha com publicidade vai entender.

Basicamente, é um editor de textos com algumas funcionalidades extras. O backend é em Python e o front em HTML, CSS e JavaScript. Ele tem opção para adicionar imagens e as converte para webp automaticamente na hora da construção das páginas, tudo feito no meu servidor. Posso acessar a página e postar pelo meu celular por exemplo.

Fica hospedado no meu servidor com acesso direto ao meu blogue, então a página do editor só pode ser acessada com senha. Caso alguém queira usar [está disponível no GitHub](https://github.com/gustavoribeirorg/jekyll-writer).

(Esse é o primeiro post que estou fazendo na versão web após muitos testes. Espero que dê certo!)

A carinha do bicho aqui embaixo:


<figure>
    <img src="/assets/imagens/screenshot-2026-09-04-at-12-36-03-jekyll-writer.webp" alt="Jekyll Writer">
        <figcaption>Jekyll Writer: nome dado pela própria IA</figcaption>
</figure>

Obs.: acabei de notar que a hora dele está diferente da hora do computador.
