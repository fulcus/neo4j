var viz;
var nodeTypes = [];
var relTypes = [];
var findNodes = [];
var deleteNodes = [];

window.addEventListener("load", async () => {
  var config = {
    //encrypted: "ENCRYPTION_ON",
    //trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
    container_id: "viz",
    server_url: "neo4j://localhost:7687",
    server_user: "neo4j",
    server_password: "neo4j",
    labels: {
      //"Character": "name",
      Character: {
        caption: "name",
        size: "pagerank",
        community: "community",
        //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
      },
    },
    relationships: {
      INTERACTS: {
        thickness: "weight",
        caption: false,
      },
    },
    initial_cypher: "MATCH (n) RETURN n",
  };

  node.style.display = "none";
  rel.style.display = "none";

  nodeTypes.push(person_display, place_display, test_display, vaccine_display);
  relTypes.push(
    lives_display,
    contact_display,
    visited_display,
    tested_display,
    vaccinated_display
  );
  findNodes.push(find_person, find_place, find_test, find_vaccine);
  deleteNodes.push(delete_person, delete_place, delete_test, delete_vaccine);

  for (var i = 0; i < nodeTypes.length; i++) {
    nodeTypes[i].style.display = "none";
  }
  for (var i = 0; i < relTypes.length; i++) {
    relTypes[i].style.display = "none";
  }
  for (var i = 0; i < findNodes.length; i++) {
    findNodes[i].style.display = "none";
  }
  for (var i = 0; i < deleteNodes.length; i++) {
    deleteNodes[i].style.display = "none";
  }

  viz = new NeoVis.default(config);
  viz.render();
  console.log(viz);
});

function showTypeChange() {
  switch (document.getElementById("command_type").value) {
    case "node":
      rel.style.display = "none";
      node.style.display = "block";

      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      break;

    case "relationship":
      node.style.display = "none";
      rel.style.display = "block";

      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      break;
  }
}

function showNodeChange() {
  switch (document.getElementById("node_type").value) {
    case "person":
      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      person_display.style.display = "block";

      break;

    case "place":
      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      place_display.style.display = "block";
      break;

    case "test":
      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      test_display.style.display = "block";
      break;

    case "vaccine":
      for (var i = 0; i < nodeTypes.length; i++) {
        nodeTypes[i].style.display = "none";
      }
      vaccine_display.style.display = "block";
      break;
  }
}

function showRelChange() {
  switch (document.getElementById("rel_type").value) {
    case "lives":
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      lives_display.style.display = "block";
      break;

    case "contact":
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      contact_display.style.display = "block";
      break;

    case "visited":
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      visited_display.style.display = "block";
      break;

    case "tested":
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      tested_display.style.display = "block";
      break;

    case "vaccinated":
      for (var i = 0; i < relTypes.length; i++) {
        relTypes[i].style.display = "none";
      }
      vaccinated_display.style.display = "block";
      break;
  }
}

function findNode() {
  switch (document.getElementById("find_node").value) {
    case "person":
      for (var i = 0; i < findNodes.length; i++) {
        findNodes[i].style.display = "none";
      }
      find_person.style.display = "block";
      break;

    case "place":
      for (var i = 0; i < findNodes.length; i++) {
        findNodes[i].style.display = "none";
      }
      find_place.style.display = "block";
      break;

    case "test":
      for (var i = 0; i < findNodes.length; i++) {
        findNodes[i].style.display = "none";
      }
      find_test.style.display = "block";
      break;

    case "vaccine":
      for (var i = 0; i < findNodes.length; i++) {
        findNodes[i].style.display = "none";
      }
      find_vaccine.style.display = "block";
      break;
  }
}

function deleteNode() {
  switch (document.getElementById("delete_node").value) {
    case "person":
      for (var i = 0; i < findNodes.length; i++) {
        deleteNodes[i].style.display = "none";
      }
      delete_person.style.display = "block";
      break;

    case "place":
      for (var i = 0; i < findNodes.length; i++) {
        deleteNodes[i].style.display = "none";
      }
      delete_place.style.display = "block";
      break;

    case "test":
      for (var i = 0; i < findNodes.length; i++) {
        deleteNodes[i].style.display = "none";
      }
      delete_test.style.display = "block";
      break;

    case "vaccine":
      for (var i = 0; i < findNodes.length; i++) {
        deleteNodes[i].style.display = "none";
      }
      delete_vaccine.style.display = "block";
      break;
  }
}

function openCommands() {
  if (document.getElementById("commands-container").style.display == "block") {
    document.getElementById("commands-container").style.display = "none";
  } else {
    document.getElementById("commands-container").style.display = "block";
  }
}

function openCypher() {
  if (document.getElementById("cypher-container").style.display == "block") {
    document.getElementById("cypher-container").style.display = "none";
  } else {
    document.getElementById("cypher-container").style.display = "block";
  }
}

function openQueries() {
  if (document.getElementById("queries-container").style.display == "block") {
    document.getElementById("queries-container").style.display = "none";
  } else {
    document.getElementById("queries-container").style.display = "block";
  }
}
