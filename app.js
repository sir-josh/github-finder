//Init Github class
const github = new Github;
//Init UI class
const ui = new UI;

//Search input listener
document.getElementById('searchUser').addEventListener('keyup', (e) => {
    //Get user input text
    const userText = e.target.value;
    if(userText != ''){
        //Make http call to github through Github class
        github.getUser(userText)
            .then(data => {
                console.log(data);
                if(data.userProfile.message === 'Not Found'){
                    //show user not found alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    //show profile ui
                    ui.showProfile(data.userProfile);
                    //show repo ui
                    ui.showRepos(data.userRepos);
                }
            })
    }else{
        //clear the profile ui
        ui.clearProfile();
    }
})