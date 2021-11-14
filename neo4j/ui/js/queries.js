


$("#submit_person").click(function(){
    var cypher = "CREATE(p:Person{first_name:'"+$("#first_name").val()+"', last_name:'"+$("#last_name").val()+"', cf:'"+$("#cf").val()+"', email:'"+$("#email").val()+"'}) RETURN p";
    viz.renderWithCypher(cypher);

    person_display.style.display="none";
    node.style.display="none";

    $("#command_type").val("default");
    $("#node_type").val("default");
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
