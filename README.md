📂 Arquitetura de Diretórios: Projeto Vizinho Virtual

Este guia descreve a finalidade de cada pasta no ecossistema Frontend do projeto. Seguimos o princípio da Clean Architecture, onde a lógica de negócio (cérebro) é separada da interface visual (casca).

🏗️ Estrutura Geral (Pasta src/)

O diretório src é o coração do projeto. Abaixo está o detalhamento de cada subdiretório:

1. 📂 core/ (O Cérebro da Aplicação)

Esta é a pasta mais importante. Ela contém toda a lógica que não depende do visual. Se mudarmos de React para React Native amanhã, o conteúdo desta pasta permanece quase idêntico.

api/: Centraliza a comunicação com o Backend Spring Boot.

O que colocar aqui: Instância do Axios e os Interceptors. É aqui que o Token JWT é injetado automaticamente em cada requisição.

hooks/: Gerencia a sincronização de dados e cache.

O que colocar aqui: Custom Hooks do React Query. Exemplo: useItems.js (para buscar furadeiras) ou useAuth.js (para login).

schemas/: Define os "contratos" e as regras de ouro.

O que colocar aqui: Validações do Zod. Ex: Quantos números tem um CPF, se o e-mail é válido ou se o preço é positivo.

store/: A memória global do aplicativo.

O que colocar aqui: Lógica do Zustand. Guarda quem é o usuário logado e se ele tem permissão de Admin.

2. 📂 components/ (Biblioteca de UI)

Contém os blocos de construção visuais criados com Tamagui.

Atoms: Componentes menores e indivisíveis (Botões, Inputs puros, Badges).

Molecules: Combinação de átomos (Um campo de busca com botão, um Card de item).

Forms: Componentes de formulário já conectados ao React Hook Form.

3. 📂 screens/ (Telas e Páginas)

Aqui é onde as peças se encaixam. Uma "Screen" busca dados no core/hooks, utiliza a memória do core/store e renderiza os components na tela.

Exemplo: A tela LoginScreen chama o formulário da pasta components e o hook de autenticação da pasta core.

4. 📂 theme/ (Identidade Visual)

Centraliza a "personalidade" do Vizinho Virtual.

O que colocar aqui: Configuração do Tamagui (tamagui.config.js).

Aqui definimos as cores oficiais: Ouro (#e3b23c) e Sálvia (#9caf88), além da fonte Cormorant Garamond.

5. 📂 utils/ (Ferramentas Auxiliares)

Funções puras que facilitam tarefas repetitivas.

O que colocar aqui: Formatadores de moeda (R$), máscaras de CPF/Telefone e cálculos de datas para o período de aluguel.

🔄 Fluxo de Trabalho Sugerido

Para manter o projeto organizado, siga esta ordem ao criar uma nova funcionalidade:

Validar: Defina as regras no core/schemas (Zod).

Buscar: Crie a chamada da API no core/hooks (React Query).

Desenhar: Crie os componentes visuais em components (Tamagui).

Montar: Junte tudo em uma tela dentro de screens.

Documentação Técnica v1.0 • Engenharia de Software 2026
