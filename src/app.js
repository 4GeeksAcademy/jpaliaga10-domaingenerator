/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ".com";
        let domaines = pronoun[i] + adj[j] + noun[k] + ".net";
        console.log(domain);
        console.log(domaines);
      }
    }
  }

  let all = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        all.push(pronoun[i] + adj[j] + noun[k] + ".es");
      }
    }
  }
  console.log(all);
};
