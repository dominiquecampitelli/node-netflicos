# Netflicos

Servidor para buscar informações de filmes e séries usando o serviço do <a href="https://www.themoviedb.org/documentation/api?language=pt-BR" target="_blank">TheMovieDB</a>.

---

## No terminal

Para rodar a aplicação acesse o terminal e dê os seguintes comandos em sequência:

-   echo "APP_URL=http://localhost/:
    PORT=3000
    NODE_ENV=development
    TMDB_KEY=**INSIRA SUA API_KEY AQUI**
    TMDB_API=https://api.themoviedb.org/3
    MONGO_DB=mongodb+srv://**INSIRA O NOME DE USUÁRIO DO SEU BANCO**:**SENHA DO BANCO**@cluster0.cysbx.mongodb.net/netflicos?retryWrites=true&w=majority" >> .env
-   yarn
-   yarn start
