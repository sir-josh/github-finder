class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary mt-2 mt-sm-0">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success mt-2 mt-sm-0">Followers: ${user.followers}</span>
                    <span class="badge badge-info mt-2 mt-sm-0">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    //Display repos in UI
    showRepos(reposArray){
        let output = '';
        reposArray.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-info mt-2 mt-sm-0">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success mt-2 mt-sm-0">Forks: ${repo.forks_count}</span> 
                        </div> 
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    //Show alert message
    showAlert(msg, className){
        //First clear any current alert message before showing another one
        this.clearAlert();

        //create a div element
        const div = document.createElement('div');
        //Add neccessary classes to the div
        div.className = className;
        //Add the text content inside the div
        div.appendChild(document.createTextNode(msg));
        //Get a parent element and child element
        const searchContainer = document.querySelector('.searchContainer');
        const childContainer = document.querySelector('.search');
        //Insert the alert div between the parent and child element
        searchContainer.insertBefore(div, childContainer);
        //Timeout the alert to disappear after 2 seconds
        setTimeout(() => {
            this.clearAlert();
        },2000);
    }
    
    //Clear profile in UI
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}