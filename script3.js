
  var i = 0;
  var text = "This platform is made for the welfare of the students of NIT Kurukshetra and the students who are willing to join nit kkr.This platform will provide to you all the information regarding this institute from basic to every important notification is shared by the student themselves.In the gossip coener you can chat with the students of nit kkr about any query or any doubt ,you can post your blogs and images and any other information regarding the institute.Enjoy this make platform your skills and share it with your friends and other relatives.";
  var speed = 35; 

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
