var guests_names;
var guests_names_display_array=[];

var guests_names_without_commas_array;

function add_guest(){
    guests_names=document.getElementById("guests_names_entered").value;
    guests_names_display_array.push(guests_names);
    console.log(guests_names_display_array);
    document.getElementById("display_names_with_commas").innerHTML = guests_names_display_array;
}

function show_names_without_commas(){
    guests_names_without_commas_array = guests_names_display_array.join(" ");
    document.getElementById("display_names_without_commas").innerHTML = guests_names_without_commas_array;
}

function sorting(){
    guests_names_display_array.sort();
    document.getElementById("sorted_display_names_without_commas").innerHTML = guests_names_display_array;
}

function search_guest(){
    var searched_name = document.getElementById("search_input").value;
    var found = 0;
    var j;
    for(j=0;j<guests_names_display_array.length;j++){
        if(searched_name==guests_names_display_array[j]){
            found=found+1;
        }
    }
    document.getElementById("name_found_times").innerHTML="name found "+ found +" time/s";
    console.log("found" +found+"time/s");
}