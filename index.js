$("#btnData").click(function () {
    const data = $("#inputData").val();
    $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=ischRMqt8CkpjD7jsQ24FQIPenxUJPHbuD3wi5E9&date=${data}`,
    success: function (resultado) {
    //   console.log(resultado);
      tratar(resultado)
    },
    error: function (erro) {
      console.log(erro);
    },
  });
});

function tratar(resultado){
    console.log(resultado.date);
    console.log(resultado.explanation);
    console.log(resultado.hdurl);
    console.log(resultado.title);

}