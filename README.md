# MiniBlog 📝

O **MiniBlog** é uma aplicação de blog desenvolvida em **React** que permite aos usuários compartilhar momentos através de fotos e textos. O projeto utiliza o **Firebase** como Back-end as a Service (BaaS) para gerenciar autenticação, banco de dados e armazenamento de imagens em tempo real.

🔗 **[Acesse o projeto online aqui](https://Matag-e.github.io/MiniBLOG/)**

## ✨ Funcionalidades

*   **Autenticação Completa:** Cadastro e Login de usuários utilizando Firebase Authentication.
*   **Gerenciamento de Posts (CRUD):**
    *   **Criar:** Publique novos posts com imagem (URL) e conteúdo.
    *   **Ler:** Visualize posts no feed principal ou individualmente.
    *   **Editar:** Atualize o conteúdo dos seus posts existentes.
    *   **Excluir:** Remova posts através do Dashboard.
*   **Dashboard do Usuário:** Área exclusiva para gerenciar suas próprias publicações.
*   **Busca Avançada:** Pesquise posts por tags ou termos específicos.
*   **Design Responsivo:** Layout adaptável para dispositivos móveis e desktop.
*   **Dark Mode:** Interface com tema escuro para melhor conforto visual.

## 🛠️ Tecnologias Utilizadas

### Frontend
*   **React (Vite):** Biblioteca JavaScript para construção da interface.
*   **React Router DOM:** Gerenciamento de rotas e navegação SPA.
*   **CSS Modules:** Estilização componentizada e escopada.
*   **Context API:** Gerenciamento de estado global (Autenticação).
*   **Custom Hooks:** Encapsulamento de lógicas complexas (Fetch, Auth, CRUD).

### Backend (Firebase)
*   **Firebase Authentication:** Sistema de login e registro seguro.
*   **Firestore Database:** Banco de dados NoSQL em tempo real para armazenar posts e dados de usuários.

## 🚀 Como Rodar Localmente

Siga os passos abaixo para executar o projeto na sua máquina:

### Pré-requisitos
*   Node.js instalado.
*   Uma conta no Firebase e um projeto configurado.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Matag-e/MiniBLOG.git
    cd miniblog
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Firebase:**
    *   Crie um arquivo `src/firebase/config.js` (baseado no seu projeto do Firebase Console).
    *   Adicione suas credenciais (API Key, Auth Domain, Project ID, etc.).

4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```

5.  **Acesse:**
    Abra `http://localhost:5173` no seu navegador.

## 📦 Deploy

O projeto está configurado para deploy automático no GitHub Pages utilizando o pacote `gh-pages`.

```bash
npm run deploy
```

---

Desenvolvido por **Mateus Silva** como parte do curso de ReactJS.
