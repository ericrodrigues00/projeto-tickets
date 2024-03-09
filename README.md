# ParmeJó 2023 - Controle de Ingressos 🎫

Projeto realizado para o evento "ParmeJó 2023" organizado pela unidade da Bethel Church de Jundiaí - SP, com o objetivo de controlar e validar os ingressos emitidos para o evento.

## Tabela de Conteúdos 📋

- [Deploy](#deploy)
- [Tutorial](#como-executar-localmente)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Capturas de Tela](#capturas-de-tela)
- [Equipe](#equipe)

## Como executar localmente 

Este guia fornece instruções passo a passo para instalar as dependências e executar o projeto. Certifique-se de seguir estas etapas cuidadosamente para configurar corretamente o ambiente de desenvolvimento.

### Passo 1: Navegar até a pasta "backend"

Abra o terminal e navegue até a pasta "backend" do projeto:

```bash
cd backend
```

### Passo 2: Instalar as dependências do backend

Dentro da pasta "backend", execute o seguinte comando para instalar as dependências do backend (assegure-se de que você possui o Node.js instalado):

```bash
npm install
```


### Passo 3: Executar o servidor backend
Ainda dentro da pasta "backend", execute o seguinte comando para iniciar o servidor:

```bash
node server.js
```

### Passo 4: Abrir um novo terminal na pasta raiz do projeto
Abra um novo terminal na pasta raiz do projeto. Você pode usar um novo terminal ou uma nova guia no terminal atual.

### Passo 5: Instalar as dependências do projeto
Dentro da pasta raiz do projeto, execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

### Passo 6: Executar o projeto
Agora que todas as dependências estão instaladas, execute o projeto com o seguinte comando:

```bash
npm start
```

## Deploy 🚀

O site está disponível para ser testado em: [https://qrcodegen-eztickets.vercel.app](https://qrcodegen-eztickets.vercel.app)

## Tecnologias Utilizadas 💻

- MongoDB 
- Express 
- React 
- Node.js 

## Funcionalidades ⚙️

✅ Registro de Ingressos: Criamos uma solução que permite o registro eficiente de novos ingressos em nosso banco de dados. Cada ingresso é associado ao nome do titular e seu e-mail de contato, gerando um QR code único que é automaticamente enviado para o e-mail registrado. 📧🔐

✅ Escaneamento de Ingressos: Implementamos um leitor de QR codes e a lógica de validação dos ingressos escaneados, garantindo uma entrada rápida e segura no evento. 📱👮‍♂️

✅ Lista de Ingressos: Desenvolvemos uma funcionalidade que permite a visualização de todos os ingressos registrados até o momento. Os usuários podem filtrar a lista por nome ou identificar os ingressos não utilizados. 📋🔍

✅ Validação Manual: Para flexibilidade adicional, oferecemos a validação manual dos ingressos por meio de um ID exclusivo associado a cada um deles, garantindo verificações confiáveis. 🧾✅

## Equipe 👨‍💻

Este projeto foi realizado por:

- Eric Rodrigues de Oliveira ([GitHub](https://github.com/ericrodrigues00))
- João Vinicius Castro ([GitHub](https://github.com/akastroo))
- Mauro Sales Dias Ramos ([GitHub](https://github.com/maurosdr))
- Marco Schweitzer ([GitHub](https://github.com/MarcoSchwepps))
