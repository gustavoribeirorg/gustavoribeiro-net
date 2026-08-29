---
title: Vibe Coding
date: 2026-05-16 23:58 -0300
layout: post
excerpt_separator: <!--more-->
categories: [Cotidiano]
tags: [web, reflexoes]
---
Apesar de todos os problemas e as questões que permeiam os grandes modelos de linguagem (LLM), as questões éticas e a transformação no modelo de negócios e trabalhos, a popularização da inteligência artificial (IA) também trouxe liberdade.

<!--more-->

*Vibe coding* é uma nova maneira de programar em que o usuário diz para a IA o que ele quer fazer e o LLM gera o código. O programador apenas revisa e corrige, muitas vezes através de outros comandos (prompts) para o modelo.

Eu tive duas pequenas necessidades nessa semana e encontrei soluções prontas que resolviam meu problema, mas não exatamente do jeito que eu queria. A primeira era pegar as notas de todas as minhas corridas de Uber em determinado período.

Achei um script em Python no GitHub, mas tive dificuldade para fazer as configurações necessárias para o programa acessar minha conta. Em poucos minutos, com a ajuda do Gemini, implementei uma função para fazer login pelo browser.

A outra foi com um plugin para gerenciar o Jekyll (gerador desse site) pelo Obsidian. Eu criava meus textos no VS Code, mas queria algo simples. Descobri que havia uma opção de fazer isso pelo Obsidian com um plugin.

O problema é que a ferramenta estava incompleta — talvez o desenvolvedor original só pensou no que ele realmente precisava — e senti falta de algumas funções. Abri o código fonte do plugin no Antigravity e perguntei porque o que eu que eu queria fazer não funcionava.

Em poucos segundos, tive a resposta e a sugestão para implementar. Confirmei as mudanças, testei e pronto. Funcionou. Talvez eu me contentaria com o que tinha, mas a IA me trouxe a possibilidade de adaptar a ferramenta para minha necessidade.