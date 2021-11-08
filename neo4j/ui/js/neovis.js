// define config car
// instantiate nodevis object
// draw

var viz;

function draw() {
    var config = {
        encrypted: "ENCRYPTION_OFF",
        container_id: "viz",
        server_url: "bolt://6e1205c9.databases.neo4j.io",
        server_user: "neo4j",
        server_password: "Sewg53RImYM_5SAI0QA4DYOs7iOsHIMVcSmgCe9YuSE",
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

    viz = new NeoVis.default(config);
    viz.render();
    console.log(viz);

}
