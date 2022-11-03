async function GetInfo()
{
    try
    {
        let user_search = document.getElementById("search").value // mojombo
        document.getElementById("user_repo").innerHTML="";
        const profile_data = await fetch("https://api.github.com/users/" + user_search);
        let Git = await profile_data.json();

        document.getElementById("Name").innerHTML = "Name: " + Git.name;
        document.getElementById("user_Name").innerHTML = "User Name: " + Git.login;
        document.getElementById("email").innerHTML = "Email: " + Git.email;
        document.getElementById("location").innerHTML = "Location: " + Git.location;
        document.getElementById("gists").innerHTML = "Gists: " + Git.public_gists;
        document.getElementById("profile_pic").src = Git.avatar_url;

        const repo_data = await fetch("https://api.github.com/users/" + user_search + "/repos");
        let repo = await repo_data.json();

        console.log(repo);

        for(let i =0; i < repo.length; i++){
            let repo_name = document.createElement("div");
            repo_name.innerHTML = repo[i].name;
            let repo_desc = document.createElement("div");
            repo_desc.innerHTML = repo[i].description;

            document.getElementById("user_repo").appendChild(repo_name);
            document.getElementById("user_repo").appendChild(repo_desc);
        }


    }
    catch(e){
        console.log(e);
    }
}