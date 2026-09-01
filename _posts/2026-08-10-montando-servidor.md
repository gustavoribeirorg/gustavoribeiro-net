---
title: Como hospedei esse blog em um celular antigo
date: 2026-08-10 20:58 -0300
layout: post
excerpt_separator: <!--more-->
categories: [Cotidiano]
tags: [homelab, termux, jekyll]
---

Depois da minha [publicação sobre este blog estar hospedado no meu próprio servidor]({% link _posts/2026-08-08-servidor.md %}), um Samsung J6, algumas pessoas vieram perguntar sobre o processo de configuração.

<!--more-->

Tirei muitas dúvidas com o Gemini e fiz algumas pesquisas para entender alguns conceitos, mas o processo é bem simples e direto. O Caique, membro do grupo do Manual do Usuário, foi quem me mostrou que era possível (obrigado!).

<figure>
    <img src="{{ '/assets/imagens/servidor-rodando.webp' | relative_url }}" alt="Servidor rodando">
        <figcaption>Servidor rodando</figcaption>
</figure>

O primeiro passo é ter um smartphone com Android. O meu é um simples Samsung J6. Restaurei para as configurações de fábrica e desinstalei os aplicativos possíveis de remover sem root para liberar espaço no aparelho.

Com armazenamento livre, baixei e instalei o Termux. Dá para fazer o download na Play Store, na F-Droid ou diretamente do repositório deles no GitHub.

Usar o terminal no celular é sofrível, então eu comecei instalando o pacote do OpenSSH para me conectar ao Termux pelo terminal do meu computador:

`pkg install openssh # Instalar o OpenSSh`  
`passwd # Definir uma senha`  
`ifconfig # Descobrir o IP do celular`  
(o IP do celular estará depois de _wlan0_, sendo a primeira sequência de números após _inet_)  
`sshd # Iniciar o SSH`

Para se conectar ao Termux pelo computador, é necessário que ambos estejam na mesma rede (mesmo nome do Wi-Fi).

No terminal do seu computador:

`whoami # Esse é seu nome de usuário`
`ssh USUARIO@IP -p8022`  

... e digite a senha que você definiu anteriormente.

Agora, já conectado ao seu servidor pelo terminal do seu computador:

`pkg install python # Instale o Python`  
`python -m http.server 8080 # Inicie o servidor Python`

Acesse pelo navegador do seu computador digitando o IP do servidor e a porta `8080` na barra de endereço. Ex.: `192.168.1.11:8080`

Pronto! Seu servidor já está exposto na rede local e você pode navegar pelas pastas do celular. Há inúmeros serviços e aplicações _self-hosted_ que você pode explorar.

No meu caso, eu queria disponibilizar meu blog online. Então, eu transferi os arquivos para uma pasta no servidor e usei o Cloudflare Tunnels para torná-lo acessível na internet.

Para fazer isso, você precisa criar uma conta na Cloudflare primeiro e ter um domínio, mas há a possibilidade de gerar um link aleatório para testar:

`pkg install cloudflared # Instale o cloudflared`  
`cloudflared tunnel login # Faça login na Cloudflare`

Copie o link, cole na barra de endereço do seu navegador e faça o login com seu usuário e senha da Cloudflare.

`cloudflared tunnel --url http://localhost:8080 # Gere um endereço temporário`

Copie o link que foi gerado e acesse pelo seu navegador de qualquer rede que você estiver!

Não tenho pretensões de explicar detalhadamente porque não sou _entendido do assunto_, mas pode me mandar um e-mail caso tenha alguma dúvida. No mais, eu usei bastante o Gemini para configurar e ele foi bem consistente.

Se você colocar seu servidor na rede, me mande o link para eu poder ver!
