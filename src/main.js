class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat',
            description: 'Plataforma de educação em tecnologia',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat',
        });
        console.log(this.repositories);
    }

}

const MeuApp = new App();
