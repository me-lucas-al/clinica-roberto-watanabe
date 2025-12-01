# 🌿 Clínica Holística Roberto Watanabe

Site e sistema de gestão para a **Clínica Holística Roberto Watanabe**, localizada em Bragança Paulista. O projeto oferece uma plataforma para apresentação de terapias, agendamento de consultas e gestão de usuários.

## 🚀 Tecnologias Utilizadas

### Front-end

  - **React** (Vite)
  - **Style Modules (CSS)** (Estilização)
  - **React Router** (Navegação)
  - **React Hook Form** (Gerenciamento de formulários)
  - **Axios** (Requisições HTTP)
  - **React Toastify** (Notificações)

### Back-end

  - **Python**
  - **Flask** (Framework Web)
  - **SQLAlchemy** (ORM)
  - **PyMySQL** (Driver de Banco de Dados)
  - **MySQL** (Banco de Dados - hospedado no Railway)

-----

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos

  - Node.js instalado
  - Python instalado
  - Banco de dados MySQL (local ou remoto/Railway)

### 1\. Configurando o Back-end

1.  Navegue até a pasta do servidor:

    ```bash
    cd backend
    ```

2.  Crie e ative um ambiente virtual:

    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\Activate.ps1

    # Linux/Mac
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  Instale as dependências:

    ```bash
    pip install -r requirements.txt
    ```

4.  Configure as variáveis de ambiente:

      - Crie um arquivo `.env` na pasta `backend` ou `backend/models`.
      - Adicione a string de conexão do banco:
        ```env
        MYSQL_PUBLIC_URL="mysql+pymysql://usuario:senha@host:porta/nome_do_banco"
        ```

5.  Execute o servidor:

    ```bash
    python app.py
    ```

    *O servidor rodará em `http://localhost:5000`.*

### 2\. Configurando o Front-end

1.  Navegue até a pasta do cliente (em outro terminal):

    ```bash
    cd frontend
    ```

2.  Instale as dependências:

    ```bash
    npm install
    # ou
    pnpm install
    ```

3.  Execute o projeto:

    ```bash
    npm run dev
    # ou
    pnpm dev
    ```

    *O site estará acessível em `http://localhost:5173` (ou porta similar).*

-----

## 🔗 Rotas da API (Endpoints)

Abaixo estão listadas as rotas disponíveis no Back-end.

### 👤 Usuários (`/routes/users.py`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/register` | Cadastra um novo usuário (Cliente, Terapeuta ou Admin). |
| `POST` | `/api/login` | Autentica o usuário e retorna os dados de sessão. |
| `GET` | `/api/user/<user_id>` | Retorna os dados de um usuário específico pelo ID. |
| `GET` | `/api/users` | Retorna uma lista com todos os usuários cadastrados. |

### 📅 Agendamentos (`/routes/agendamentos.py`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/criar-agendamento` | Cria um novo agendamento vinculado a um usuário e terapia. |
| `GET` | `/api/agendamentos/<user_id>` | Retorna o histórico de agendamentos de um usuário específico. |

### ☯️ Terapias (`/routes/terapias.py`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/criar-terapia` | Cria uma nova terapia no catálogo. |
| `GET` | `/api/terapias` | Lista todas as terapias disponíveis. |
| `GET` | `/api/terapia/<terapia_id>` | Retorna detalhes de uma terapia específica. |

### 📝 Histórico do Paciente (`/routes/historico.py`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/criar-historico` | Registra um histórico clínico/diagnóstico para um paciente. |
| `GET` | `/api/historico/<user_id>` | Busca o histórico clínico de um usuário específico. |

-----

## 📂 Estrutura de Pastas

  - **backend/**: Contém a API Flask, modelos do banco de dados e rotas.
      - `models/`: Definição das tabelas (Usuario, Terapia, Agendamento, etc.).
      - `routes/`: Lógica de cada endpoint separada por contexto.
  - **frontend/**: Aplicação React.
      - `src/components/`: Componentes reutilizáveis (Navbar, Modal, Footer).
      - `src/pages/`: Páginas principais (Home, Login, Cadastro, Perfil).
      - `src/context/`: Gerenciamento de estado global (UserContext, ModalContext).

-----

## 👥 Scripts Úteis (Backend)

Na pasta `backend`, foram criados scripts auxiliares para manutenção do banco de dados (exigem configuração de conexão):
  - `seed.py`: Popula o banco de dados com as terapias iniciais.
