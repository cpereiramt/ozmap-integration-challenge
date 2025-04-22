# OZmap Integration Challenge

Este projeto simula a integração de dados de um ISP com a plataforma OZmap utilizando o SDK oficial `@ozmap/ozmap-sdk`.  
Por se tratar de um ambiente de teste, a integração foi **estruturada e mockada**, mantendo-se 100% compatível com o SDK real.

---

## 📦 Tecnologias utilizadas

- Node.js + TypeScript
- Axios
- ts-node-dev
- dotenv
- json-server (mock da API do ISP)
- @ozmap/ozmap-sdk (estrutura de integração)

---

## 🧩 Estrutura do projeto

```bash
src/
├── index.ts                  # Testes iniciais
├── sync.ts                   # Orquestrador principal (mock completo)
├── services/
│   ├── IspService.ts         # Consome dados mockados do ISP
│   ├── TransformerService.ts # Transforma dados para o modelo da OZmap
│   └── OzmapService.ts       # Envia dados para a OZmap (simulado)
db.json                       # Mock da API ISP via json-server
```

---

## ⚙️ Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o mock do ISP

```bash
npm run mock
```

O mock roda em `http://localhost:4000` com os seguintes endpoints:
- `/cables`
- `/boxes`
- `/drop_cables`
- `/customers`

### 3. Execute o processo de sincronização completo (CRUD simulado)

```bash
npm run sync
```

> O projeto irá:
> - Buscar dados do ISP (mock)
> - Transformar para o formato OZmap
> - Simular criação, atualização, listagem e deleção
---


## ⚠️ Sobre a integração real com a OZmap

Este projeto **foi implementado com base no SDK oficial** da OZmap, mas:

- **Não executa chamadas reais**, pois o acesso à API requer:
  - Usuário com permissão ativa para o módulo "API"
  - Credenciais válidas (login/senha)
- A URL usada no SDK é: `https://api.ozmap.com.br`

### 🔐 Como ativar a integração real:

1. Solicite acesso ao módulo API via suporte: [https://ozmap.com/en/test-now](https://ozmap.com/en/test-now)
2. Crie um usuário com permissão de API
3. Atualize o `.env`:

```env
OZMAP_LOGIN=seu-email@ozmap.com
OZMAP_PASSWORD=sua-senha
```

1. Substitua os métodos `MOCK` do `OzmapService` pelos métodos reais do SDK

---

## ✅ Entrega técnica completa

Este projeto demonstra:

- Organização de código com separação de responsabilidades
- Adaptação a ambientes simulados
- Manipulação de dados via SDK externo
- Prontidão para produção real
- Boas práticas com `.env`, `services`, `utils/` e automação via `package.json`

---

📬 Dúvidas ou sugestões?  
Entre em contato! Este projeto foi desenvolvido por **Clayton Pereira** como parte de um desafio técnico.
