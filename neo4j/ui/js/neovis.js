// define config car
// instantiate nodevis object
// draw

var viz;

function draw() {
    var config = {
        //encrypted: "ENCRYPTION_ON",
        //trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
        container_id: "viz",
        server_url: "neo4j://localhost:7687",
        server_user: "neo4j",
        server_password: "neo4j",
        labels: {
            //"Character": "name",
            "Character": {
                "caption": "name",
                "size": "pagerank",
                "community": "community"
                //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            }
        },
        relationships: {
            "INTERACTS": {
                "thickness": "weight",
                "caption": false
            }
        },
        initial_cypher: "MATCH (n) RETURN n"
    };

    node.style.display="none";
    rel.style.display="none";

    
    person_display.style.display="none";
    place_display.style.display="none";
    test_display.style.display="none";
    vaccine_display.style.display="none";

    viz = new NeoVis.default(config);
    viz.render();
    console.log(viz);

}

function showTypeChange(){

    switch(document.getElementById("command_type").value){
        case 'node':
            rel.style.display="none";
            node.style.display="block";
            break;

        case 'relationship':
            node.style.display="none";    
            rel.style.display="block";
            break;
        }
}


function showNodeChange(){
    var node_type = document.getElementById("node_type").value;

    switch(node_type){
        case 'person': 
            place_display.style.display="none";
            test_display.style.display="none";
            vaccine_display.style.display="none";
            person_display.style.display="block";

            break;

        case 'place':
            person_display.style.display="none";
            test_display.style.display="none";
            vaccine_display.style.display="none";
            place_display.style.display="block";
            break;

        case 'test':
            person_display.style.display="none";
            place_display.style.display="none";
            vaccine_display.style.display="none";
            test_display.style.display="block";
            break;

        case 'vaccine':
            person_display.style.display="none";
            place_display.style.display="none";
            test_display.style.display="none";
            vaccine_display.style.display="block";
            break;

    }
}

function showRelChange(){
        var rel_type = document.getElementById("rel_type").value;
}
