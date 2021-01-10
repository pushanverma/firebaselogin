var mainApp ={};

{function(){
var firebase =app_firebase;
var uid =null; 
app_firebase.auth().onAuthStateChanged(function(user)
{
    if(user)
    {
        uid =user.uid;
    }
    else
    {
        uid=null;
        window.location.replace("login.html");
    }
});

function logOut()
{
    app_firebase.auth().signOut();
}

mainApp.logOut =logOut;
})()
