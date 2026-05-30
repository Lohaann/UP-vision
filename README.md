# UP Vision - Glow Up Digital Landing Page

Landing page completa para o método Glow Up Digital, criada por Lucas.

## 🚀 Como Começar

### Requisitos
- Node.js 14.0 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Lohaann/UP-vision.git
cd UP-vision

# Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório `UP-vision`
4. Vercel vai detectar automaticamente que é Next.js
5. Clique em "Deploy"

Seu site estará online em minutos! 🎉

### Netlify

1. Conecte seu repositório GitHub em [netlify.com](https://netlify.com)
2. Configure o comando de build: `npm run build`
3. Diretório de publicação: `.next`
4. Deploy automático a cada push!

## 📁 Estrutura do Projeto

```
UP-vision/
├── pages/
│   ├── _app.js           # App component
│   └── index.js          # Landing page
├── styles/
│   └── globals.css       # Global styles
├── public/               # Arquivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Tecnologias

- **Next.js** - Framework React
- **Tailwind CSS** - Styling
- **JavaScript** - Linguagem

## 📝 Personalizações

Para customizar a landing page:

1. Edite `pages/index.js` para alterar conteúdo
2. Modifique cores em `tailwind.config.js`
3. Adicione mais seções conforme necessário

## 📄 Licença

Todos os direitos reservados © 2026 UP Vision

## 👤 Criador

Criado por **Lucas**
