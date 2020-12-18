$(document).ready(function(){
    
    for (i=1; i<5;i++){
        var agregarcontenido = document.createElement("tr");
    var cadena="";
        cadena +="<td>nombren </td><td>correon </td>";
        cadena +="<td> <button class='btnaccion1' id='a"+ i +"'>accion1 </button>";
        cadena +="<td> <button class='btnaccion2' id='b"+ i +"'>accion2 </button>";
        agregarcontenido.innerHTML = cadena;
        document.getElementById("secioncontenido").appendChild(agregarcontenido);
        $("#a" + i).on("click", function(event){
            var id = $(this).closest(".btnaccion1").attr("id");
            alert("El id selecionado es " + id);
        });
        $("#b" + i).on("click", function(event){
            var id = $(this).closest(".btnaccion2").attr("id");
            alert("El id selecionado es " + id);
        });
    }
});