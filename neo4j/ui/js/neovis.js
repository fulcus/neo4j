// define config car
// instantiate nodevis object
// draw

var viz;
var nodeTypes = []; 
var relTypes = [];
var findNodes = [];


function draw() {
    var config = {
        //encrypted: "ENCRYPTION_ON",
        //trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
        container_id: "viz",
        server_url: "bolt://localhost:7687",
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

    nodeTypes.push(person_display, place_display, test_display, vaccine_display);
    relTypes.push(lives_display, contact_display, visited_display, tested_display, vaccinated_display);
    findNodes.push(find_person, find_place, find_test, find_vaccine);



    for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display="none";
    }

    for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display="none";
    }

    for (var i = 0; i < findNodes.length; i++) {
        findNodes[i].style.display="none";
    }

    viz = new NeoVis.default(config);
    viz.render();
    console.log(viz);

}

function showTypeChange(){

    switch(document.getElementById("command_type").value){
        case 'node':
            rel.style.display="none";
            node.style.display="block";

            for (var i = 0; i < nodeTypes.length; i++) {
                nodeTypes[i].style.display="none";
            }
            for (var i = 0; i < relTypes.length; i++) {
                relTypes[i].style.display="none";
            }
            break;

        case 'relationship':
            node.style.display="none";    
            rel.style.display="block";

            for (var i = 0; i < nodeTypes.length; i++) {
                nodeTypes[i].style.display="none";
            }
            for (var i = 0; i < relTypes.length; i++) {
                relTypes[i].style.display="none";
            }
            break;
        }
}


function showNodeChange(){

    switch(document.getElementById("node_type").value){
        case 'person': 
            for (var i = 0; i < nodeTypes.length; i++) {
                if(nodeTypes[i]!= person_display){
                    nodeTypes[i].style.display="none";
                }
            }
            person_display.style.display="block";

            break;

        case 'place':
            for (var i = 0; i < nodeTypes.length; i++) {
                if(nodeTypes[i]!=place_display){
                    nodeTypes[i].style.display="none";
                }
            }
            place_display.style.display="block";
            break;

        case 'test':
            for (var i = 0; i < nodeTypes.length; i++) {
                if(nodeTypes[i]!=test_display){
                    nodeTypes[i].style.display="none";
                }
            }
            test_display.style.display="block";
            break;

        case 'vaccine':
            for (var i = 0; i < nodeTypes.length; i++) {
                if(nodeTypes[i]!=vaccine_display){
                    nodeTypes[i].style.display="none";
                }
            }
            vaccine_display.style.display="block";
            break;

    }
}

function showRelChange(){

    switch(document.getElementById("rel_type").value){
            case 'lives': 
                for (var i = 0; i < relTypes.length; i++) {
                    if(relTypes[i]!= lives_display){
                        relTypes[i].style.display="none";
                    }
                }
                lives_display.style.display="block";
                break;
    
            case 'contact':
                for (var i = 0; i < relTypes.length; i++) {
                    if(relTypes[i]!= contact_display){
                        relTypes[i].style.display="none";
                    }
                }
                contact_display.style.display="block";
                break;
    
            case 'visited':
                for (var i = 0; i < relTypes.length; i++) {
                    if(relTypes[i]!= visited_display){
                        relTypes[i].style.display="none";
                    }
                }
                visited_display.style.display="block";
                break;
    
            case 'tested':
                for (var i = 0; i < relTypes.length; i++) {
                    if(relTypes[i]!= tested_display){
                        relTypes[i].style.display="none";
                    }
                }
                tested_display.style.display="block";
                break;
    
            case 'vaccinated':
                for (var i = 0; i < relTypes.length; i++) {
                    if(relTypes[i]!= vaccinated_display){
                        relTypes[i].style.display="none";
                    }
                }
                vaccinated_display.style.display="block";
                break;
        }
}

function findNode(){

    switch(document.getElementById("find_node").value){
        case 'person': 
            for (var i = 0; i < findNodes.length; i++) {
                if(findNodes[i]!= person_display){
                    findNodes[i].style.display="none";
                }
            }
            find_person.style.display="block";

            break;

        case 'place':
            for (var i = 0; i < findNodes.length; i++) {
                if(findNodes[i]!= place_display){
                    findNodes[i].style.display="none";
                }
            }
            find_place.style.display="block";

            break;

        case 'test':
            for (var i = 0; i < findNodes.length; i++) {
                if(findNodes[i]!= test_display){
                    findNodes[i].style.display="none";
                }
            }
            find_test.style.display="block";
            break;

        case 'vaccine':
            for (var i = 0; i < findNodes.length; i++) {
                if(findNodes[i]!= vaccine_display){
                    findNodes[i].style.display="none";
                }
            }
            find_vaccine.style.display="block";
            break;

    }
}
