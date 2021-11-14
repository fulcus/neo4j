

$("#submit_person").click(function(){
    var cypher = "CREATE(p:Person{first_name:'"+$("#first_name").val()+"', last_name:'"+$("#last_name").val()+"', cf:'"+$("#cf").val()+"', email:'"+$("#email").val()+"'}) RETURN p";
    viz.renderWithCypher(cypher);

    person_display.style.display="none";
    node.style.display="none";

    $("#command_type").val("default");
    $("#node_type").val("default");
    $("#first_name").val(null);
    $("#last_name").val(null);
    $("#cf").val(null);
    $("#email").val(null);

});

$("#submit_place").click(function(){
    var cypher = "CREATE(p:Place{type:'"+$("#place_type").val()+"', name:'"+$("#place_name").val()+"', id:'"+$("#place_id").val()+"'}) RETURN p";
    viz.renderWithCypher(cypher);

    place_display.style.display="none";
    node.style.display="none";

    $("#command_type").val("default");
    $("#node_type").val("default");
    $("#place_type").val("default");
    $("#place_name").val(null);
    $("#place_id").val(null);
});

$("#submit_test").click(function(){
    var cypher = "CREATE(p:Test{date:'"+$("#test_date").val()+"', outcome:'"+$("#outcome_type").val()+"'}) RETURN p";
    viz.renderWithCypher(cypher);

    test_display.style.display="none";
    node.style.display="none";

    $("#command_type").val("default");
    $("#node_type").val("default");
    $("#test_date").val(null);
    $("#outcome_type").val("default");
});

$("#submit_vaccine").click(function(){
    var cypher = "CREATE(p:Vaccine{date:'"+$("#vaccine_date").val()+"', name:'"+$("#vaccine_name").val()+"'}) RETURN p";
    viz.renderWithCypher(cypher);

    vaccine_display.style.display="none";
    node.style.display="none";

    $("#command_type").val("default");
    $("#node_type").val("default");
    $("#vaccine_date").val(null);
    $("#vaccine_name").val("default");
});

$("#submit_lives").click(function(){
    var cypher = "CREATE(p1:Person{first_name:'"+$("#first_name1").val()+"', last_name:'"+$("#last_name1").val()+"', cf:'"+$("#cf1").val()+"', email:'"+$("#email1").val()+"'})-[r:LIVES_WITH]->(p2:Person{first_name:'"+$("#first_name2").val()+"', last_name:'"+$("#last_name2").val()+"', cf:'"+$("#cf2").val()+"', email:'"+$("#email2").val()+"'}) RETURN p1,p2,r";
    viz.renderWithCypher(cypher);

    lives_display.style.display="none";
    rel.style.display="none";

    $("#command_type").val("default");
    $("#rel_type").val("default");
    $("#first_name1").val(null);
    $("#first_name2").val(null);
    $("#last_name1").val(null);
    $("#last_name2").val(null);
    $("#cf1").val(null);
    $("#cf2").val(null);
    $("#email1").val(null);
    $("#email2").val(null);
});

$("#submit_contact").click(function(){
    var cypher = "CREATE(p1:Person{first_name:'"+$("#fn_1").val()+"', last_name:'"+$("#ln_1").val()+"', cf:'"+$("#cf_1").val()+"', email:'"+$("#email_1").val()+"'})-[r:CONTACT_WITH{date:'"+$("#contact_date").val()+"', coord:'"+$("#contact_coord").val()+"'}]->(p2:Person{first_name:'"+$("#fn_2").val()+"', last_name:'"+$("#ln_2").val()+"', cf:'"+$("#cf_2").val()+"', email:'"+$("#email_2").val()+"'}) RETURN p1,p2,r";
    viz.renderWithCypher(cypher);

    contact_display.style.display="none";
    rel.style.display="none";

    $("#command_type").val("default");
    $("#rel_type").val("default");
    $("#fn_1").val(null);
    $("#fn_2").val(null);
    $("#ln_1").val(null);
    $("#ln_2").val(null);
    $("#cf_1").val(null);
    $("#cf_2").val(null);
    $("#email_1").val(null);
    $("#email_2").val(null);
    $("#contact_date").val(null);
    $("#contact_coord").val(null);
});

$("#submit_visited").click(function(){
    var cypher = "CREATE(p1:Person{first_name:'"+$("#fn").val()+"', last_name:'"+$("#ln").val()+"', cf:'"+$("#cfp").val()+"', email:'"+$("#emailp").val()+"'})-[r:VISITED{date:'"+$("#visit_date").val()+"'}]->(p2:Place{place_name:'"+$("#place_namep").val()+"', place_type:'"+$("#place_typep").val()+"'}) RETURN p1,p2,r";
    viz.renderWithCypher(cypher);

    visited_display.style.display="none";
    rel.style.display="none";

    $("#command_type").val("default");
    $("#rel_type").val("default");
    $("#fn").val(null);
    $("#ln").val(null);
    $("#cfp").val(null);
    $("#emailp").val(null);
    $("#place_typep").val("default");
    $("#place_namep").val(null);
    $("#visit_date").val(null);
});

$("#submit_tested").click(function(){
    var cypher = "CREATE(p1:Person{first_name:'"+$("#fnq").val()+"', last_name:'"+$("#lnq").val()+"', cf:'"+$("#cfq").val()+"', email:'"+$("#emailq").val()+"'})-[r:TESTED_WITH]->(p2:Test{date:'"+$("#test_dateq").val()+"', outcome:'"+$("#outcome_typeq").val()+"'}) RETURN p1,p2,r";
    viz.renderWithCypher(cypher);

    tested_display.style.display="none";
    rel.style.display="none";

    $("#command_type").val("default");
    $("#rel_type").val("default");
    $("#fnq").val(null);
    $("#lnq").val(null);
    $("#cfq").val(null);
    $("#emailq").val(null);
    $("#test_dateq").val(null);
    $("#outcome_typeq").val("default");
});

$("#submit_vaccinated").click(function(){
    var cypher = "CREATE(p1:Person{first_name:'"+$("#fnr").val()+"', last_name:'"+$("#lnr").val()+"', cf:'"+$("#cfr").val()+"', email:'"+$("#emailr").val()+"'})-[r:VACCINATED_WITH]->(p2:Vaccine{date:'"+$("#vaccine_dater").val()+"', type:'"+$("#vaccine_typer").val()+"'}) RETURN p1,p2,r";
    viz.renderWithCypher(cypher);

    vaccinated_display.style.display="none";
    rel.style.display="none";

    $("#command_type").val("default");
    $("#rel_type").val("default");
    $("#fnr").val(null);
    $("#lnr").val(null);
    $("#cfr").val(null);
    $("#emailr").val(null);
    $("#vaccine_dater").val(null);
    $("#vaccine_typer").val("default");
});



$("#reload").click(function() {

    var cypher = $("#cypher").val();

    if (cypher.length > 3) {
        viz.renderWithCypher(cypher);
    } else {
        console.log("reload");
        viz.reload();

    }

});

$("#reset").click(function() {
    viz.renderWithCypher("MATCH(n) RETURN n");
})

$("#q1").click(function(){
    var cypher = "MATCH (t:Test{outcome:'true'})<-[r:TESTED_WITH]-(p:Person)-[v:VISITED]->(q:Place) WHERE date(t.date) >= date(v.datetime) AND date(t.date) <= date(v.datetime) + duration('P14D') RETURN q, p, v, t, r";
    viz.renderWithCypher(cypher);
})

$("#q2").click(function(){
    var cypher = "MATCH (p)-[r:LIVES_WITH]-(p1:Person)-[t:TESTED_WITH]->(t1:Test{outcome:'true'}), (t2:Test{outcome:'true'})WHERE date(t1.date) <= date(t2.date) AND date(t1.date)+duration('P10D') >= date(t2.date)AND NOT (p)-[:TESTED_WITH]->(t2)RETURN DISTINCT p,p1,r,t,t1";
    viz.renderWithCypher(cypher);
})

$("#q3").click(function(){
    var cypher = "MATCH (v:Vaccine)<-[r1:VACCINATED_WITH]-(p1:Person)-[c:CONTACT_WITH]->(p2:Person)-[r2:TESTED_WITH]->(t2:Test{outcome:'true'}), (t1:Test{outcome:'true'}) WHERE date(t1.date) >= date(t2.date) AND date(t2.date) >= date(c.date) AND date(t1.date) <= date(c.date)+duration('P14D') AND date(t2.date) <= date(c.date)+duration('P14D') AND NOT (t1)<-[:TESTED_WITH]-(p1) RETURN DISTINCT p1, p2, c, r1, v, r2, t2";
    viz.renderWithCypher(cypher);
})

$("#q4").click(function(){
    var cypher = "MATCH (t:Test{outcome:'true'})<-[r:TESTED_WITH]-(p:Person)-[v:VISITED{datetime:datetime('2021-08-15')}]->(q:Place{type:'Bar'})WHERE date(t.date) <= date(v.datetime)+duration('P14D') AND date(t.date) >= date(v.datetime)RETURN p,v,q,r,t";
    viz.renderWithCypher(cypher);
})

$("#q5").click(function(){
    var cypher = "MATCH (t1:Test{outcome:'true'})<-[j:TESTED_WITH]-(p1:Person)-[r:CONTACT_WITH]->(p2:Person)-[k:TESTED_WITH]->(t:Test{outcome:'true'}) WITH count(p2) AS c, p1 AS a, r AS contact, t AS test, p2 AS b, t1 AS test1, k AS tested, j AS tested1 WHERE c = 1 AND date(contact.date) >= date(test.date)-duration('P14D') AND date(contact.date) <= date(test.date) AND date(contact.date) <= date(test1.date) AND date(contact.date)+duration('P14D') >= date(test1.date) RETURN a, b, contact, tested, test, test1, tested1";
    viz.renderWithCypher(cypher);
})
