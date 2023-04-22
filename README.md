## YouTube to MP3 App - Frontend
YT2MP3 é um app para converter video do youtube para MP3.
Esse app é constituido por duas partes: Backend e Frontend conectados por **Socket.io**.

### Frontend

O frontend foi construido com [Next.js](https://nextjs.org/), um frameork React.

### *Status*
Atualmente o projeto funciona se estiver rodando em conjunto com o projeto em backend. Necessita de uma refatoração de código e adição de algumas funcionalidades.

### *Demostração*
O exemplo online do projeto pode ser acessado clicando aqui, o código frontend estar hospedado em ____ e o projeto backend em ___.

![Alt ou título da imagem](/example/prtsc.jpg)

### *Rodar localmente*
Siga os passos a seguir para rodar o projeto localmente:

Clone o repositorio **backend**, navegue ate a raiz do projeto e execute a linha de comando para instalar os pacotes npm de acordo com o seu gerenciador de pacotes preferido.

- **npm**: `npm i`
- **pnpm**: `pnpm i`
- **yarn**: `yarn add`

Apos a instalação dos pacotes, execute o comando corresponde a seu gerenciador para executar o projeto.

- **npm**: `npm run dev`
- **pnpm**: `pnpm dev`
- **yarn**: `yarn dev`

Siga o mesmo passos agora para o projeto **frontend**.
O projeto backend estar configurado para executar na porta :3000 caso esteja livre. Se isso não for possivel ele irar iniciar em outra porta e será necessario que o arquivo ENV seja editado para atualizar essa alteração.
### *Tecnlogias*
O lado frontend necessitou das sequintes tecnlogias para ser completado em pleno funcionamento:

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Socket.io](https://socket.io/)
- [TypeScript](https://www.typescriptlang.org/)

## ToDo
- [ ] Refatoração
- [ ] Animações
- [ ] Criar Toast independente
- [ ] Manipulação de Erros