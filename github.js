class Github{
    constructor() {
        this.client_id ='f5a5c8af6cf926b5e643';
        this.client_secret = '81492d5bcdf75ebc6f61b6d5ae5c2aae215f6d96';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const userProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userReposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userProfile = await userProfileResponse.json();
        const userRepos = await userReposResponse.json();
        return {
            userProfile, //OR userProfile: userProfile
            userRepos
        }
    }
}