
  var i = 0;
  var text = "This platform is made for the timepass of the champions of NIT Kurukshetra whose castle is chakradhar bahawan and the birds who are willing to join this kingdom.This platform will provide to you all the information regarding this hostel from basic to every important notification is shared by the residents themselves.In the gossip coener you can chat with the students of chakaradhar bhawan about any query or any doubt ,you can post your blogs and images and any other information regarding the institute.Enjoy this make platform your skills and share it with your friends.";
  var speed = 15; 

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
