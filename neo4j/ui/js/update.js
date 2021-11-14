// UPDATE
// nice to have: on click out of cf, run viz.renderWithCypher(match_command); to display node before update

function space_or_comma(set_command) {
    //first time, no comma
    if(set_command.length == 4) {
        return " ";
    } else {
        return ", ";
    }
}

function space_or_and(where_command) {
    //first time, no comma
    if(where_command.length == 6) {
        return " ";
    } else {
        return "AND ";
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

    command = "";
    if(set_command.length > 4) {
        command = match_command.concat(set_command);
    }
    command = command.concat(" RETURN p");
    
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

    command = "";
    if(set_command.length > 4) {
        command = match_command.concat(set_command);
    }
    command = command.concat(" RETURN p");
    
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

    command = "";
    if(set_command.length > 4) {
        command = match_command.concat(set_command);
    }
    command = command.concat(" RETURN t");
    
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

    command = "";
    if(set_command.length > 4) {
        command = match_command.concat(set_command);
    }
    command = command.concat(" RETURN v");

    console.log(command);
    viz.renderWithCypher(command);
});

// DELETE

$("#deletePerson").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    // $("#command_type").val("default");
    // $("#node_type").val("default");

    var cf = $("#delete_cf").val();
    var first_name = $("#delete_first_name").val();
    var last_name = $("#delete_last_name").val();
    var email = $("#delete_email").val();

    var match_command = "MATCH (p:Person)";
    var where_command = " WHERE";

    if(cf != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.cf='"+cf+"'");
    }
    if(first_name != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.first_name='"+first_name+"'");
    }
    if(last_name != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.last_name='"+last_name+"'");
    }
    if(email != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.email='"+email+"'");
    }

    command = "";
    if(where_command.length > 6) {
        command = match_command.concat(where_command);
    }
    command = command.concat(" DETACH DELETE p");

    console.log(command);
    viz.renderWithCypher(command);
});

$("#deletePlace").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#delete_place_id").val();
    var name = $("#delete_place_name").val();
    var type = $("#delete_place_type").val();

    var match_command = "MATCH (p:Place)";
    var where_command = " WHERE";

    if(id != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.id='"+id+"'");
    }
    if(name != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.name='"+name+"'");
    }
    if(type != ""){
        where_command = where_command.concat(space_or_and(where_command) + "p.type='"+type+"'");
    }

    command = "";
    if(where_command.length > 6) {
        command = match_command.concat(where_command);
    }
    command = command.concat(" DETACH DELETE p");

    console.log(command);
    viz.renderWithCypher(command);
});

$("#deleteTest").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#delete_test_id").val();
    var date = $("#delete_test_date").val();
    var outcome = $("#delete_outcome_type").val();

    var match_command = "MATCH (t:Test)";
    var where_command = " WHERE";

    if(id != ""){
        where_command = where_command.concat(space_or_and(where_command) + "t.id='"+id+"'");
    }
    if(date != ""){
        where_command = where_command.concat(space_or_and(where_command) + "t.date='"+date+"'");
    }
    if(outcome != ""){
        where_command = where_command.concat(space_or_and(where_command) + "t.outcome='"+outcome+"'");
    }

    command = "";
    if(where_command.length > 6) {
        command = match_command.concat(where_command);
    }
    command = command.concat(" DETACH DELETE t");

    console.log(command);
    viz.renderWithCypher(command);
});

$("#deleteVaccine").click(function(){
    person_display.style.display="none";
    node.style.display="none";
    //$("#command_type").val("default");
    // $("#node_type").val("default");

    var id = $("#delete_vaccine_id").val();
    var date = $("#delete_vaccine_date").val();
    var name = $("#delete_vaccine_name").val();

    var match_command = "MATCH (v:Vaccine)";
    var where_command = " WHERE";

    if(id != ""){
        where_command = where_command.concat(space_or_and(where_command) + "v.id='"+id+"'");
    }
    if(date != ""){
        where_command = where_command.concat(space_or_and(where_command) + "v.date='"+date+"'");
    }
    if(name != ""){
        where_command = where_command.concat(space_or_and(where_command) + "v.name='"+name+"'");
    }

    command = "";
    if(where_command.length > 6) {
        command = match_command.concat(where_command);
    }
    command = command.concat(" DETACH DELETE v");

    console.log(command);
    viz.renderWithCypher(command);
});
