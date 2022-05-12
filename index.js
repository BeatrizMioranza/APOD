$("#video").hide()
$("#imgApi").hide()

$("#btnData").click(function () {
    const data = $("#inputData").val();
    $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=ischRMqt8CkpjD7jsQ24FQIPenxUJPHbuD3wi5E9&date=${data}`,
    success: function (resultado) {
      console.log(resultado);
      tratar(resultado)
      valida (resultado)
    },
    error: function (erro) {
      console.log(erro);
    },
  });
});

// Validar foto/vídeo
function valida (resultado){
  if (resultado.media_type == 'image'){
    $("#imgApi").attr("src",resultado.url).show();
    $("#video").hide()
  }  else { (resultado.media_type == 'video')
    $("#video").attr("src", resultado.url).show();
    $("#imgApi").hide()
  }
}

function tratar(resultado){
    $("#day").text(resultado.date);
    $("#titulo").text(resultado.title);
    $("#explicacao").text(resultado.explanation);
}

