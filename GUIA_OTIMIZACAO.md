# Guia Rápido: Otimização Automática de Imagens

Você adicionou um script no seu projeto para tratar facilmente novas imagens sempre que quiser. Com ele, você não precisará nunca mais se preocupar em converter `.HEIC`, se as imagens estão acima de 1MB, ou se possuem acentos/espaços nos nomes.

## Como funciona?
O script `scripts/otimizar_imagens.py` vai vasculhar automaticamente toda a sua pasta `assets/`.
Para cada imagem (`.jpg`, `.png`, `.heic`):
1. **Normaliza o nome:** Troca espaços e acentos por caracteres limpos (ex: `ação.png` vira `acao.webp`).
2. **Converte para WebP e restringe o tamanho:** Limita o tamanho de cada arquivo a 1 MB, diminuindo a qualidade se necessário, preservando o máximo possível de visual.
3. **Pula imagens já processadas:** Ele verifica se o arquivo `.webp` correspondente já existe, então não converte novamente as antigas.
4. **Atualiza os links automaticamente:** Se você referenciou uma nova imagem dentro dos seus arquivos HTML, Markdown ou CSS, ele vai renomear o `.png` ou `.heic` lá para o `.webp` sozinho!
5. **Esconde os originais:** O script automaticamente adiciona os arquivos `.HEIC`, `.JPG` etc no `.gitignore` para o seu site continuar leve no GitHub.

## Passo a Passo

Sempre que você criar um novo post ou adicionar novas imagens na pasta `assets/`, basta seguir estes passos:

1. Salve ou arraste suas fotos originais (mesmo que sejam HEIC direto do iPhone) para alguma pasta dentro de `assets/` (como `assets/imagens/`).
2. Adicione os links delas normalmente no seu código/markdown (se quiser).
3. Abra o seu Terminal na pasta do projeto e rode o comando:
   ```bash
   python3 scripts/otimizar_imagens.py
   ```
4. Aguarde o Terminal avisar que acabou.

Pronto! Todas as imagens novas foram transformadas para o formato `.webp`, seus códigos foram atualizados e o projeto está pronto para ir ao ar.
