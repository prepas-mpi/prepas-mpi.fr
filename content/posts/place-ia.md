---
title: La place de l'IA en MP2I/MPI
slug: place-ia
date: 2026-08-20T17:41:11+02:00
summary: Cette page regroupe des informations et conseils sur comment utiliser l'intelligence artificielle en MP2I et MPI.
tags:
  - lycéens
  - préparationnaires
categories:
  - Ressources
---

Cette page regroupe des informations sur l'utilisation de l'IA en MP2I et en MPI, en recoupant des informations d'[une discussion](https://discord.com/channels/872138069594214410/1536317927694012436) sur le discord. Elle est destinée aussi bien à des préparationnaires qu'à des lycéens.

{{< admonition warning "Disclaimer" true >}}
L'objectif est ici de discuter de l'utilité et des utilisations possibles de l'intelligence artificielle en MP2I/MPI de façon objective et dans aucun cas de descendre l'un ou l'autre des opinions.
{{< /admonition >}}

{{< admonition quote "Les dangers de l'IA en une phrase" false >}}
Les outils d’IA sont devenus incontournables dans votre apprentissage. Je suis sûr que vous
les utilisez tous, et pas forcément en mal. En revanche, faites attention à un schéma que j’ai
vu apparaître dans quelques expériences de suivi d’élèves en MP2I/MPI : de très bons élèves
se servent de l’IA en se disant “je sais le faire, c’est pour aller plus vite”. C’est effectivement
pratique : flemme d’écrire un tri, flemme d’écrire une boucle sur chacune des lettres du fichier,
flemme de me rappeler comment on écrit un thread en C, flemme de retrouver la preuve précise
qu’un tri est en 𝑂(𝑛 log 𝑛), la commande exacte de compilation OCaml/C, etc.
{{< right >}} *Clément Rouvroy, ENS Ulm, (2026)* {{< /right >}}
{{< /admonition >}}
## Utilisations

### En cours

Il va de soi qu'utiliser l'intelligence artificielle en cours n'est pas utile, le professeur étant déjà là pour expliquer et avancer son cours.

En TD, l'intérêt est minime car le professeur est normalement là si vous avez besoin d'aide.

En TP, notamment d'info, c'est le moment où l'IA pourrait être la plus "utile" au lycée, cependant c'est aussi l'occasion de prendre de mauvaises habitudes que de l'utiliser à ce moment là :

{{< admonition quote "Utiliser l'IA en TP d'info" false >}}
 Je déconseille très fortement l'utilisation d'une IA en TP... en partie pour la raison qui est donnée ici pour déconseiller l'IA pour faire ses exos de maths : ça va vous donner du code qui a de bonnes chances de ne pas du tout respecter les usages de la prépa et d'être hors programme (arithmétique des pointeurs en C, programmation impérative en OCaml ou au contraire avec des fold partout alors que ce n'est pas nécessaire...). 
{{< right >}} *Mme. Le Gluher, professeure au lycée Descartes, (2026)* {{< /right >}}
{{< /admonition >}}

### Chez soi

Il est beaucoup plus tentant d'utiliser l'intelligence artificielle chez soi, et cela semble aussi plus justifié car après tout chez soi il n'y a personne pour nous aider, sauf peut-être des gens de la classe par messages.

{{< admonition quote "Continuer les TP d'info à la maison" false >}}
Les IA sont très bonnes par exemple pour vérifier un texte que vous avez écrit, corriger les fautes d'orthographe et rendre le texte plus fluide. Cela peut être utile notamment en TIPE. De même en TIPE, elles peuvent être utiles pour vous si vous n'avez pas dit des choses qui sont fausses. En TP d'informatique, elles peuvent aussi être très efficaces pour lire votre code et signaler des erreurs.
{{< right >}} *M. Fayard, (2026)* {{< /right >}}
{{< /admonition >}}

Créer du contenu d'entraînement chez soi à l'aide de l'IA est... facile, mais la question est plutôt : "est-ce que le contenu créé est adapté ?" ou "n'y avait-t-il pas déjà des ressources disponibles en ligne ?"
 
{{< admonition quote "Utiliser l'IA pour la correction / création de contenu" false >}}
Le risque de remplacer la recherche par la consultation de corrigés.
Pour progresser, il est essentiel de passer du temps à chercher : rester bloqué sur un exercice, essayer différentes pistes, constater que certaines ne fonctionnent pas et comprendre pourquoi. Ce travail de recherche fait pleinement partie de l’apprentissage. Or, lorsqu’un corrigé détaillé est disponible immédiatement, la tentation est grande de l’obtenir dès que l’on rencontre une difficulté. L’élève peut alors multiplier les exercices et les corrigés sans consacrer suffisamment de temps à la recherche personnelle. Il risque ainsi de remplacer un travail intellectuel difficile mais formateur par une forme de bachotage de corrigés, beaucoup moins utile.
{{< right >}} *M. Fayard, (2026)* {{< /right >}}
Tu verras en prépa que la quantité d’exercices proposée par les professeurs est déjà bien trop conséquente pour parvenir à tous les résoudre. Si tu y arrives, ce sera déjà très bien.
{{< right >}} *Antoine, Eurecom 2A, (2026)* {{< /right >}}
{{< /admonition >}}

{{< admonition warning "Les erreurs de l'IA" true >}}
Si jamais vous utilisez l'IA pour travailler, il est probable que les LLM vous donnent une solution qui "fonctionne" (quand ils ne divaguent pas) sur le papier mais dépassant le programme de prépa.
Par exemple, si vous l'utilisez pour l'informatique, elle pourrait vous suggérer d'utiliser des [VLA](https://en.wikipedia.org/wiki/Variable-length_array), ce qui est strictement interdit en prépa. Si vous l'utilisez, portez donc beaucoup d'attention au contenu généré.
{{< /admonition >}}

## Problèmes de l'IA

### L'IA, ou la fin de l'apprentissage

{{< admonition quote "L'IA, ou le risque de tout déléguer" false >}}
Il y a très probablement de bonnes utilisations possibles de l'IA pour apprendre, mais je vois plus de risques que de bénéfices, surtout qu'une  partie conséquente des élèves qui rentrent en prépa n'ont pas encore eu besoin de beaucoup travailler pour avoir des bons résultats. Et avoir sous la main un outil capable de faire le travail à sa place risque de pousser à déléguer, au lieu de mettre en place des méthodes de travail qui vous conviennent et permettent d'être efficace. 
{{< right >}} *Gaspard, ENS Rennes, (2026)* {{< /right >}}
{{< /admonition >}}


{{< admonition quote "L'IA, ou l'impression d'apprendre" false >}}
En ce qui concerne "obtenir des nouveaux exercices pour s'entraîner" comme j'ai pu le lire, attention à ce que faire un exercice ne se transforme pas trop vite en "lire le corrigé en diagonale et vite après avoir réfléchi un tout petit peu pour pouvoir en faire un de plus". La tentation du nombre peut être grande, mais c'est important de laisser du temps à la recherche et à la réflexion. Quitte à ce qu'elle soit collective, mais ça demande parfois un peu plus d'organisation. Et c'est pas impossible que l'utilisation de LLMs pousse un peu dans la direction de "j'ai lu, donc j'ai fait, et donc j'en lis pleeiiin pour en avoir fait plein". Des fois ça peut suffire, mais je dirais que souvent pas.
{{< right >}} *M. Savitzky, professeur au lycée Descartes, (2026)* {{< /right >}}
{{< /admonition >}}

### Protection des données

À moins d'utiliser une IA locale (ex : via ollama ou programme similaire), discuter avec un LLM c'est accepter qu'il s'entraine sur ce qu'on lui donne et que les entreprises derrière ces chatbots collectent tout ce qu'on dit.

Le problème disparait dans le cas où vous utilisez de l'IA locale, mais encore faut-il avoir le matériel nécessaire pour la faire tourner, les modèles grossisant très vite en taille.

### Conscience par rapport à l'environnement

L'IA consomme... et énormément, tant de l'électricité que de l'eau.

Par exemple pour l'électricité : [Google a signé un accord pour utiliser des petits réacteurs nucléaires aux US](https://www.bbc.com/news/articles/c748gn94k95o) ou [Elon Musk utilise des groupes électrogènes pour Colossus](https://www.theguardian.com/technology/2026/jan/15/elon-musk-xai-datacenter-memphis).

Pour l'eau : [Article de l'ONU sur la consommation des data centers IA](https://news.un.org/en/story/2026/06/1167658).

Utiliser une IA locale est aussi meilleur pour l'environnement, car (à priori) votre ordinateur ne consomme pas d'eau pour refroidir. 
