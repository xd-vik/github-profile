function success() {
    document.getElementById("op").innerHTML = "";
    if (document.getElementById("user").value === "") {
      document.getElementById("getdata").disabled = true;
    } else {
      document.getElementById("getdata").disabled = false;
    }
  }

  function funCall() {
    var userName = document.getElementById("user").value;
    const requestUrl = "https://api.github.com/users/" + userName;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        var pic = data.avatar_url;
        if (typeof data.id === "number") {
          var DATASuser =
            '<p style="color: rgb(20, 90, 20);"> Sucessfully Fetched Data of : ' + userName + '</p>' +
            "<br>" +
            '<div style=" text-align: center;" > Profile Picture </div>' +
            "<br>" +
            ' <img style="width: 150px; border-radius: 50%;" src=' +
            pic +
            "<br>" +
            "<br>" +
            "Name : " +
            data.name +
            "<br>" +
            "user id : " +
            data.id +
            "<br>" +
            "Followers : " +
            data.followers +
            "<br>" +
            "Following : " +
            data.following +
            "<br>" +
            "bio : " +
            data.bio +
            "<br>" +
            "Twitter Username : " +
            data.twitter_username +
            "<br>" +
            "website : " +
            data.blog +
            "<br>" +
            "Location : " +
            data.location +
            "<br>" +
            "public Repositories : " +
            data.public_repos +
            "<br>" +
            "public gists : " +
            data.public_gists +
            "<br>" +
            '<p style="margin-top:10px; font-size: 15px; font-style: italic; font-weight: 400; color: #9a9a9a;" >Made with 🖤 by <a style="text-decoration: none;" href="https://www.instagram.com/the.vivekkushwaha/">Vik</a></p>' +
            '<div onclick="fetchagain()" class="buttonn fetchagain">Fetch Again</div>';
        } else {
          var DATASuser =
            ' <div style=" text-align: center; padding: 5px 5px; background:#FFCCBA; color:red; height: 80px; width: 250px;"><i class="ico">&#9747;</i> Error ! No Data Found  <p onclick="fetchagain()" class="buttonn fetchagain ">Fetch Again</p> </div>';
            
        }
        document.getElementById("op").innerHTML = DATASuser;
        document.getElementById("op").style.visibility = "visible";
        document.getElementById("user").value = "";
        var x = document.getElementById("SearchBox");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    };
    xhr.send();
  }

  function reset() {
    document.getElementById("user").value = "";
    document.getElementById("op").innerHTML = "";
    success();
  }
  function fetchagain(){
      window.location.reload();
  }

let countEl = document.getElementById("count");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/https://vikdevjs.github.io/profilefetch//bbf1ce50-23e3-11ee-be56-0242ac120002/?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }
