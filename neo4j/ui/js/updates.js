// on click out of cf, run viz.renderWithCypher(match_command); to display node before update
function space_or_comma(set_command) {
    //first time, no comma
    if(set_command.length == 4) {
        return " ";
    } else {
        return ", ";
    }
}

$("#findPerson").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    // $("#command_type").val("default");
    // $("#node_type").val("default");

    var cf = $("#update_cf").val();
    var first_name = $("#update_first_name").val();
    var last_name = $("#update_last_name").val();
    var email = $("#update_email").val();

    var match_command = "MATCH (p:Person{cf:'"+cf+"'})";
    var set_command = " SET";

    if(first_name != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "p.first_name='"+first_name+"'");
    }
    if(last_name != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "p.last_name='"+last_name+"'");
    }
    if(email != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "p.email='"+email+"'");
    }

    set_command = set_command.concat(" RETURN p");
    command = match_command.concat(set_command);
    console.log(command);

    viz.renderWithCypher(command);
});

$("#findPlace").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#update_place_id").val();
    var name = $("#update_place_name").val();
    var type = $("#update_place_type").val();

    var match_command = "MATCH (p:Place{id:'"+id+"'})";
    var set_command = " SET";

    if(name != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "p.name='"+name+"'");
    }
    if(type != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "p.type='"+type+"'");
    }

    set_command = set_command.concat(" RETURN p");
    command = match_command.concat(set_command);
    console.log(command);

    viz.renderWithCypher(command);
});

$("#findTest").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#update_test_id").val();
    var date = $("#update_test_date").val();
    var outcome = $("#update_outcome_type").val();

    var match_command = "MATCH (t:Test{id:'"+id+"'})";
    var set_command = " SET";

    if(date != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "t.date='"+date+"'");
    }
    if(outcome != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "t.outcome='"+outcome+"'");
    }

    set_command = set_command.concat(" RETURN t");
    command = match_command.concat(set_command);
    console.log(command);

    viz.renderWithCypher(command);
});

$("#findVaccine").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#update_vaccine_id").val();
    var date = $("#update_vaccine_date").val();
    var name = $("#update_vaccine_name").val();

    var match_command = "MATCH (v:Vaccine{id:'"+id+"'})";
    var set_command = " SET";

    if(date != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "v.date='"+date+"'");
    }
    if(name != ""){
        set_command = set_command.concat(space_or_comma(set_command) + "v.name='"+name+"'");
    }

    set_command = set_command.concat(" RETURN v");
    command = match_command.concat(set_command);
    console.log(command);

    viz.renderWithCypher(command);
});
