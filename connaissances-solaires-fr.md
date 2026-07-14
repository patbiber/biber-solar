# Connaissances Solarteur & Technique du Bâtiment ☀️ 👷

**Photovoltaïque, solaire thermique, pompes à chaleur et besoins énergétiques du bâtiment**
Référence de planification pour la Suisse (canton de Zurich) · eConnect · Patrick Biber, Solarteur STFW

> Remarque : les images référencées (`![...]`) se trouvent dans le même dépôt. Les normes suisses (NIN/OIBT, SIA) s'appliquent ; à adapter aux prescriptions locales ailleurs.

---

## 1. Sécurité au travail

### 1.1 Les 5 règles de sécurité (SUVA 84042)

Pour tout travail hors tension sur des installations électriques, appliquer systématiquement :

1. **Déclencher** – mettre hors tension toutes les parties concernées (disjoncteurs, retirer les fusibles, interrupteur principal omnipolaire).
2. **Assurer contre le réenclenchement** – verrouiller les appareils de commutation, emporter les cartouches de fusibles, poser des panneaux d'interdiction.
3. **Vérifier l'absence de tension** – par une personne qualifiée, avec un testeur de tension bipolaire.
4. **Mettre à la terre et court-circuiter** – d'abord la terre, puis la liaison (visible depuis le poste de travail). Non requis < 1000 V (exception : lignes aériennes).
5. **Protéger les parties voisines sous tension** – < 1000 V : nappes isolantes, gaines, pièces moulées ; > 1000 V : en plus barrières, cordes, panneaux d'avertissement. EPI : casque avec écran facial, vêtements ajustés, gants.

### 1.2 Effets du courant électrique sur l'homme

| Intensité | Effet |
| --- | --- |
| 0,005 mA | Perceptible avec la langue |
| 1 mA | Seuil de perception : picotements |
| 15 mA | Seuil de crampe : limite de lâcher, crampes musculaires |
| 50 mA | Seuil de danger : crampes respiratoires, fibrillation ventriculaire |
| 80 mA | Seuil mortel |

Objectifs de protection : courant de contact faible, tension de contact faible, durée de l'état dangereux courte.

Dangers : passage du courant dans le corps, arc électrique, matériaux en fusion, incendie, accidents secondaires (chutes d'échelle/d'échafaudage).

### 1.3 Protection contre les chutes

- **Protection collective avant protection individuelle** (garde-corps avant harnais).
- Protection antichute dès **2 m** du bord du toit ; échafaudage dès 2 m de hauteur et 2 jours-homme.
- Travaux < 2 jours-homme : échelle jusqu'à 3 m, au-delà EPI antichute (EPIaC) ou échafaudage.
- **EPIaC :** harnais (EN 361), longe avec absorbeur d'énergie (EN 355), antichute, dispositifs d'ancrage, connecteurs (EN 362), système EN 363, casque avec jugulaire.
- Admis uniquement si la protection collective est impossible, les utilisateurs formés, l'équipement contrôlé et un **concept de sauvetage** en place.
- Bases légales (CH) : LTr, OPA (art. 3 et 11), directive CFST 6512, normes EN.

### 1.4 Prévention : principe STOP

**S**ubstitution → mesures **T**echniques → mesures **O**rganisationnelles → mesures **P**ersonnelles.

Chaque jour d'absence coûte à l'entreprise 600–1000 CHF. Bases légales : LAA (assurance-accidents, sécurité au travail), LTr (temps de travail/repos, protection de la santé), LSPro (sécurité des produits). La **CFST** coordonne ; les organes d'exécution sont les cantons et la Suva, avec le SECO et des organisations spécialisées.

---

## 2. Bases de physique

### 2.1 Unités et conversions

- 1 Ws = 1 J · 1 kWh = 3'600'000 J = 3600 kJ = 3,6 MJ
- kWh = MJ / 3,6
- 1 cal = 4,187 J · 1 CV = 735 W
- 1 kg équivalent pétrole = 41,868 MJ = 10'000 kcal = 11,63 kWh
- 1 kg équivalent charbon = 0,7 kg EP = 29,3 MJ = 8,14 kWh
- 100 Pa = 1 mbar · 10'000 Pa = 0,1 bar · 10 m CE = 1 bar

### 2.2 Cinématique et force

- Accélération $a = (v_{fin} - v_{début}) / t$ [m/s²] · pesanteur $g$ = 9,81 m/s²
- $v = s/t$ · $t = s/v$
- Force $F = m \cdot a$ [N]
- Masse $m = V \cdot \rho = Q / (c \cdot \Delta T \cdot \eta)$ [kg]

### 2.3 Travail et puissance

- Puissance $P = W / t = F \cdot v$ [W]
- Travail $W = P \cdot t$ [J, Ws, Nm, kWh]
- Travail mécanique $W = F \cdot s = m \cdot g \cdot h$
- Travail électrique $W = U \cdot I \cdot t \cdot \cos\varphi$ (en pratique : kWh)
- Coût = $W \cdot$ tarif

### 2.4 Puissance électrique

- Courant continu / charge ohmique : $P = U \cdot I = U^2 / R = I^2 \cdot R$
- Alternatif monophasé : $P = U \cdot I \cdot \cos\varphi$
- Triphasé : $P = \sqrt{3} \cdot U \cdot I \cdot \cos\varphi$
- Facteur de puissance $\cos\varphi = P / S$ · courant continu : $\cos\varphi = 1$

### 2.5 Rendement

$\eta = utile / fourni = P_{sortie}/P_{entrée} = W_{sortie}/W_{entrée} = \eta_1 \cdot \eta_2 \cdot \dots \cdot \eta_n$

Exemple : 0,92 · 0,93 · 0,80 = 0,684 → 68 %. Rendement = 1 − pertes.

Chaîne énergétique : **énergie primaire** (ressource brute) → **énergie secondaire** (diesel, électricité) → **énergie finale** (à la prise / devant la porte) → **énergie utile** (énergie à la roue, chaleur du sèche-cheveux).

### 2.6 Surfaces

- Triangle : $A = (l \cdot h)/2$
- Cercle : $A = (d^2 \cdot \pi)/4 = r^2 \cdot \pi$ · $r = \sqrt{A/\pi}$ · $d = 2r$

---

## 3. Électrotechnique

### 3.1 Types de courant

🔋 Courant continu DC (−) · 🔌 Courant alternatif AC (~)

### 3.2 Loi d'Ohm

- Tension $U = R \cdot I = P/I = \sqrt{P \cdot R}$ [V]
- Courant $I = U/R = P/U = \sqrt{P/R}$ [A]
- Résistance $R = U/I = P/I^2 = U^2/P = (\rho \cdot l)/A$ [Ω]
- Conductance $G = 1/R$ [S]

### 3.3 Calcul des conducteurs et chute de tension

- Longueur du conducteur $l$ = 2 × longueur du tracé (aller-retour)
- $\rho_{Cu} = 0{,}0175\ \Omega\,mm^2/m$ · conductivité $\gamma = 1/\rho$
- Section $A = r^2 \cdot \pi$ [mm²]
- Chute de tension $\Delta U = 2 \cdot (\rho \cdot l \cdot I)/A$ [V]
- **NIN : max. 4 % entre le coffret d'introduction et le récepteur** (9,2 V à 230 V)
- Pertes en ligne $P_v = I^2 \cdot R_L$

### 3.4 Intensité admissible (valeurs indicatives)

| Courant [A] | Section [mm²] |
| --- | --- |
| 16 | 1,5 / 2,5 |
| 20 | 4 |
| 25 | 6 |
| 32 | 8 |
| 40 | 10 |
| 63 | 16 |
| 80 | 25 |
| 100 | 35 |
| 160 | 70 |
| 200 | 95 |

Pratique : 2,5 mm² → 16 A · 4 mm² → 20 A · 6 mm² → 25 A · 10 mm² → 40 A. Mise à terre : 10 mm² sans paratonnerre, sinon 16 mm². Modes de pose (capacité) : A1 en tube dans paroi isolée < B1 en tube sur paroi bois < F à l'air libre.

Exemple de puissance de raccordement : 40 A × 230 V × 3 phases = 27,6 kVA → max. ~27,6 kWc de PV au raccordement.

### 3.5 Montage en série et en parallèle

Série : $I_{tot} = I_1 = I_2$ · $U_{tot} = U_1 + U_2$ · $R_{tot} = R_1 + R_2$
Parallèle : $I_{tot} = I_1 + I_2$ · $U_{tot} = U_1 = U_2$ · $1/R_{tot} = 1/R_1 + 1/R_2$

### 3.6 Courant triphasé

- **Étoile :** $I = I_p$, $U = \sqrt{3} \cdot U_p$ (230 V → 400 V)
- **Triangle :** $U = U_p$, $I = \sqrt{3} \cdot I_p$
- Réseau : 1×230 V / 3×400 V, 50 Hz

### 3.7 Mesures de protection (NIN)

- **Protection principale :** tension de contact max. AC 50 V (25 V pour jouets, laboratoires etc.), DC 120 V (60 V). Couvrir/isoler les parties actives.
- **Protection en cas de défaut :** TBTS/SELV (aucune liaison au conducteur de protection, ≤ 50 V AC / ≤ 120 V DC), TBTP/PELV (point de séparation sûr vers PE), FELV (pas de séparation sûre).
- **1 Protection contre les surcharges :** déclenchement thermique (bilame) → fusibles, disjoncteurs, relais thermiques.
- **2 Protection contre les courts-circuits :** déclenchement électromagnétique → fusibles, disjoncteurs.
- **3 Protection différentielle :** DDR/FI, mesure du courant de somme. Protection des personnes 30 mA (10 mA), des biens 300 mA.
- **4 Protection contre les arcs de défaut :** AFDD dans les environnements critiques.
- **5 Sélectivité :** seul le dispositif immédiatement en amont du défaut doit déclencher.

Classes de protection et indices IP : voir ![Schutzklasse](Schutzklasse.png), ![IP](IP_Schutzarten.png).

### 3.8 Organes de protection

- **Fusible :** point de rupture fond sous l'effet thermique ; sable de quartz comme extincteur d'arc.
- **Disjoncteur de ligne :** thermique (surcharge) + magnétique (court-circuit), réarmable.
  - Type B : 3–5 × I_N (chauffage, cuisinière, chauffe-eau)
  - Type C : 5–10 × I_N (moteurs, forts courants d'enclenchement)
  - Type D : 10–20 × I_N (démarrage difficile)
  - Classe de limitation d'énergie 3 = meilleure limitation du courant de court-circuit.
- **DDR :** compare les courants L1, L2, L3, N ; déclenche si la différence dépasse le courant différentiel assigné.
- **AFDD :** un microprocesseur détecte les signatures d'arc.

### 3.9 Code couleur des fusibles (Diazed)

2 A rose · 4 A brun · 6 A vert · 10 A rouge · 13 A noir · 16 A gris · 20 A bleu · 25 A jaune · 32 A violet · 35/40 A noir · 50 A blanc · 63 A cuivre · 80 A argent · 100 A rouge

---

## 4. Photovoltaïque

### 4.1 La cellule solaire

Cellule Si cristalline : deux couches dopées différemment. **Couche n** côté lumière (phosphore, 5 électrons de valence → électrons libres), en dessous la **couche p** (bore, 3 électrons de valence → trous). Un champ électrique à la jonction sépare les charges libérées par la lumière. Face arrière : contact pleine surface (pâte Al/Ag) ; face avant : grille de contact + couche antireflet (nitrure de silicium / dioxyde de titane).

Cellule typique : $U_{OC}$ ≈ 0,60–0,70 V, $I_{SC}$ ≈ 10–11 A (courant continu).

Types de cellules : cristallines (mono/poly, wafers ~200 µm), couches minces, nanostructurées.

**À retenir : le courant dépend de l'irradiance, la tension de la température.** ![Courbe IUP](IUP_Kurve.png)

### 4.2 Conditions d'essai

- **STC :** 25 °C cellule, 1000 W/m², AM 1,5
- **NOCT :** 20 °C ambiant, ~45 °C cellule, 800 W/m², AM 1,5, vent 1 m/s

### 4.3 Irradiation et orientation

- Irradiation globale Plateau suisse ≈ **1100 kWh/m²·a** ; instantané jusqu'à 1000 W/m² (haute montagne jusqu'à 1500 W/m²). À AM 1,5, max. ~835 W/m² direct, le reste diffus.
- Optimisation du rendement : sud, inclinaison ~15–35° (optimum CH ≈ 35° sud).
- Optimisation de l'autoconsommation : est–ouest, 10–20°.
- Espacement des rangées (toit plat, pas d'ombrage mutuel le 21.12, hauteur du soleil ~19°) :
  $R = (\sin\alpha / \tan\beta + \cos\alpha) \cdot L$ — règle rapide : espacement ≈ 3 × hauteur du bord de module. ![Espacement](Reihenabstand.png)
- Cartes : sonnendach.ch, solargis.com, everywhere.solar

### 4.4 Modules demi-cellules et ombrage

Module demi-cellules : 3 diodes bypass, chaque double-string haut/bas en parallèle. Si la moitié inférieure est ombragée, les strings supérieurs continuent → 50 % de puissance (un module pleines cellules s'effondrerait). Dans un string de modules : si < 50 % des modules sont ombragés (p. ex. moitié inférieure), les modules non ombragés déterminent la puissance ; les modules ombragés sont contournés par les diodes. ![Ombrage](verschattung_und_verschaltung_Halbzellen.jpg)

### 4.5 Types d'onduleurs

| Type | Usage | Caractéristiques |
| --- | --- | --- |
| Micro-onduleur | très petites installations (balcon) | monophasé (asymétrie max. 3,6 kVA), MPP par module, cher |
| Onduleur string | petites installations | 1 tracker MPP, mono- ou triphasé |
| Onduleur multi-string | moyennes–grandes | plusieurs trackers MPP, idéal est/ouest, le plus répandu |
| Onduleur string + optimiseurs | petites–grandes | MPP au niveau module, idéal en cas d'ombrage, plus d'électronique/service |
| Onduleur central | grandes centrales | plusieurs trackers, coffrets DC, souvent injection MT via transformateur |

### 4.6 Dimensionnement de l'onduleur (selon NIN 2020)

Critères : $I_{SC}$, $U_{OC}$, $P_{MPP}$, $I_{MPP}$, $U_{MPP}$, facteur de forme, η, cos φ, nombre de trackers MPP, réseau 230/400 V 50 Hz, altitude. Un tracker MPP = une seule orientation. **Les données du fabricant sont contraignantes.**

Étapes :

1. Vérifier la **puissance DC maximale**.
2. **Tension à vide maximale** — ne doit jamais dépasser la tension d'entrée max. de l'onduleur :
   - Variante 1 (coefficient de température, typ. $kT_{UOC} ≈ −0{,}32\ \%/K$) :
     $UOC_{max} = UOC_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
   - Variante 2 (facteur de correction NIN) : $UOC_{max} = UOC_{STC} \cdot kT_{NIN} \cdot n$
   - $T_{min}$ selon NIN 2020 : < 800 m et inclinaison < 15° : **0 °C** ; < 800 m et > 15° : **−5 °C** ; 800–1500 m : **−15 °C** ; > 1500 m : **−25 °C**
   - $kT_{NIN}$ : < 800 m : **1,15** ; 800–1500 m : **1,20** ; > 1500 m : **1,25**
3. Vérifier la **tension d'entrée minimale** (tension de démarrage).
4. **Tension MPP minimale :** $UMPP_{min} = UMPP_{STC} \cdot (1 + (75 - 25) \cdot kT_{UOC}/100) \cdot n$ (T_max = 75 °C)
5. **Tension MPP maximale :** $UMPP_{max} = UMPP_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
6. **Courant de court-circuit maximal :** $I_{SCmax} = I_{SC,STC} \cdot 1{,}25$ (correction de température $kT_{ISC} ≈ +0{,}03\ \%/K$ souvent négligeable)

Nombre minimal de modules : $n = U_{min} / U_{MPP,module}$ · courant de service max. : $I_{DCmax} = I_{DC,module} \cdot 1{,}25$

**Fenêtre MPP :** tension de string trop basse (câbles longs, températures élevées, strings courts) → l'onduleur ne peut pas suivre le MPP. Trop haute (basses températures, strings longs) → risque de surtension, à éviter absolument. Courant/puissance trop élevés (trop de strings parallèles, surdimensionnement) → écrêtage. ![Fenêtre MPP](MPP_Bereich.png)

### 4.7 Fusibles de string

- $I_{max} = I_{SC,module} \cdot 1{,}25$ doit être inférieur au courant inverse maximal $I_{inv} = I_{SC,module} \cdot 1{,}25 \cdot (n-1)$
- Calibre : $1{,}5 \cdot I_{SC} < I_N < 2{,}4 \cdot I_{SC}$
- Tenue en tension : $U_{fusible} > 1{,}2 \cdot UOC_{string}$
- Nécessaires dès que $I_{inv}$ dépasse la tenue au courant inverse des modules (plusieurs strings en parallèle). Un module seul supporte un court-circuit permanent.

### 4.8 Coffret de raccordement générateur (GAK)

1. Parafoudre · 2. Interrupteur principal DC · 3. Surveillance de string · 4. Fusibles/diodes de string ![GAK](GAK.png)

Schémas : ![Site isolé](Inselschema.png) ![Raccordé au réseau](Netzgekoppelt.png) ![Schéma](Schema_PV.png)

### 4.9 Protection foudre et surtensions

- LPS selon le principe de la cage de Faraday ; la liaison équipotentielle élève le potentiel du bâtiment → pas de courants de compensation destructeurs. Liaison au point central de terre → prise de terre du bâtiment.
- Conducteur de terre 16 mm², 10 mm² sans LPS. LPS existant : raccorder le PV par le chemin le plus court, jamais en travers du chemin des avalanches de toit. Jamais de descentes parallèles à l'égout ; fixation tous les 1 m. Objets > 2 m² à relier.
- Attention à la corrosion galvanique (série électrochimique) : **utiliser une borne en acier inoxydable comme neutralisateur.** ![Corrosion](Kontaktkorrosion_Mat_Blitzschutz.png)

| Classe LPS | Maillage | Rayon sphère fictive | Espacement descentes | Bâtiments |
| --- | --- | --- | --- | --- |
| 1 | 5×5 m | 20 m | 10 m | centres de calcul, zones Ex |
| 2 | 10×10 m | 30 m | 10 m | > 300 personnes, bâtiments élevés, hôpitaux, musées |
| 3 | 15×15 m | 45 m | 20 m | hôtels, grands bâtiments avec ateliers/poussière |

**Types de parafoudres SPD** (au coffret d'introduction HAK (AC) / GAK (DC), max. 30 m de l'entrée du bâtiment, relié à la terre) :

- Type 1 : protection foudre, Cu 16 mm², $U_{rés}$ ≈ 4 kV (si LPS présent)
- Type 2 : protection des appareils, Cu 10 mm², $U_{rés}$ ≈ 2,5 kV (sans LPS)
- Type 3 : protection fine, $U_{rés}$ ≈ 1,5 kV (serveurs etc.)

Séparer physiquement les lignes DC protégées et non protégées (au moins une cloison dans le canal). Sources de surtension : foudre, surtensions industrielles, ESD, NEMP.

### 4.10 Stockage par batteries

Grandeurs : contenu/densité énergétique, puissance, SOC, BMS, optimisation de l'autoconsommation. Généralement lithium-ion.

- **NMC :** 150–220 Wh/kg, mobilité électrique, moins stable thermiquement, cobalt cher et problématique.
- **LFP (LiFePO4) :** 90–120 Wh/kg, très stable, difficilement inflammable, moins cher, sans matières premières critiques (Huawei, Sonnen, BYD).

Pratique : la puissance de charge maximale n'est atteinte que si la tension nominale de la batterie est suffisante (ex. Fronius Symo GEN24 plus, entrée batterie 22 A).

### 4.11 Optimisation et monitoring

Adapter la consommation à la production, piloter les charges, stocker (batterie, charge uni-/bidirectionnelle), partager la production (**RCP, RCP virtuel, CEL** en Suisse). Composants : gestion des charges (SolarLog, Loxone, Solarmanager, SMA, Fronius Ohmpilot), comptage au point de raccordement.

### 4.12 Procédure d'autorisation PV (Suisse)

1. Demande / annonce de construire
2. **TAG** – demande de raccordement technique (modification > 3,7 kW)
3. **IA** – annonce d'installation (avant l'achèvement, OIBT art. 7 ou 9)
4. Commande du compteur (si pas de smart meter)
5. **MPP** – protocole de mesure et d'essai après l'installation (base du SiNa)
6. **SiNa** – rapport de sécurité (à l'achèvement, périodique, en cas de modification)
7. Contrôle de réception externe (validation MPP/SiNa)
8. **Pronovo :** demander la garantie d'origine et la rétribution unique (RU/EIV)

### 4.13 Maintenance et fin de vie

- **Inspection :** messages d'erreur/mises à jour de l'onduleur, parafoudre après orage, contrôle visuel (fixation, modules, couverture, raccordements), contrôle du rendement ; éventuellement thermographie, mesure de strings.
- **Entretien :** réparations nécessaires.
- **Amélioration :** nettoyage des modules, suppression des sources d'ombrage, pose de pare-neige.
- **Signalisation pompiers :** couper d'abord la charge AC (l'onduleur s'arrête), puis le DC ; les générateurs DC restent sous tension de jour.
- **Recyclage :** SENS eRecycling avec taxes anticipées ; les modules ne contiennent pas de polluants notables.

---

## 5. Toiture

### 5.1 Formes de toit et planification

Toits à deux pans, monopente, en croupe, demi-croupe, mansardé, en pavillon, conique, en bulbe, en sheds, plat, en dôme, en berceau. Termes : lucarne, égout, faîte, rive, arêtier. ![Parties du toit](Dachteile.png)

Planification PV : relevé sur place · âge/état/durée de vie restante · composition (sous-toiture, bande d'étanchéité à clous, sondage) · **contrôle statique par un ingénieur, confirmation écrite.** Pare-neige obligatoire si la zone en dessous est accessible au public (responsabilité du propriétaire).

### 5.2 Composition du toit (extérieur → intérieur)

1. **Couverture/lattage :** résistant aux UV, incombustible, étanche à l'eau de ruissellement. Tuiles (ZH souvent largeur 215 mm), fibrociment (amiante jusqu'en 1992 !), tôle (joint debout, à listons, trapézoïdale, sandwich, Kalzip), solaire (intégré).
2. **Contre-lattage / ventilation** (SIA 232/1) : réduction locale max. 50 % de la section ; pour PV intégré contre-latte min. 60 mm ou un échelon plus haut ; les grilles de ventilation réduisent jusqu'à 50 %. Sur sous-toiture en lés, fixation obligatoirement étanchée par bandes/joints à clous. Profondeur de vissage : 8 × diamètre. ![Contre-lattage](Konterlattung.png)
3. **Sous-toiture** (obligatoire pour toits isolés/habités, SIA 232) : étanche à la pluie et ouverte à la diffusion ; « 3 mois exposable aux intempéries ».
   - **Sollicitation normale** (≥ 20°) : étanche à l'eau de ruissellement ; plaques ou lés simplement recouverts ; joints à clous recommandés.
   - **Sollicitation accrue** (≥ 18°) : étanche à l'eau stagnante jusqu'à 50 mm ; recouvrements collés ; relevés ≥ 50 mm.
   - **Sollicitation extraordinaire** (≥ 15°) : étanche à l'eau stagnante > 50 mm et à la pression ; lés soudés à l'air chaud ou par solvant.
4. **Isolation thermique :** U < 0,2 W/m²K, neuf 0,17 W/m²K → 140–240 mm selon λ (laine minérale, fibre de bois, PUR, cellulose).
5. **Frein-vapeur :** côté chaud, sert d'étanchéité à l'air ; les traversées (p. ex. conduites solaires) doivent être raccordées de façon étanche à l'air, combler les vides ; valeur SD [m].
6. Voligeage, 7. chevrons.

### 5.3 Géométrie du toit incliné

- Distance au faîte (pour que la construction ne dépasse pas) : $distance = hauteur_{construction} / \tan(pente)$
- $l_{toit} = l_{plan} / \cos\Theta$ · $l_{plan} = l_{toit} \cdot \cos\Theta$

### 5.4 Toit plat

Protéger l'étanchéité (feutre de protection). Toitures végétalisées : meilleure rétention, plus d'entretien ; consoles lestées ≥ 50 cm ; sous le PV, gravier de préférence au substrat. Pente min. 1,5 %. Composition type : gravier – étanchéité – isolation – frein-vapeur – béton. Étanchéités : PYE, TPO, PVC, EPDM, résine liquide.

### 5.5 Façade et fixation

Façade : consoles à 45–75° améliorent le rendement par rapport à 90°, uniquement avec fonction d'auvent. Fixation : systèmes à pinces (simple/rails croisés, pince quart), systèmes à insertion, intégré en toiture (en écailles, drainant en rigole ou avec tôle de finition ; attention à la ventilation arrière). Traversées : les tubes électriques doivent être étanches (convection/condensation).

Dilatation thermique : aluminium 2,4 · acier 1,2 · cuivre 1,7 · verre 0,5 · PRV 5–15 mm/(m·100 K).

---

## 6. Thermique et hydraulique

### 6.1 Quantité de chaleur et puissance

- Chaleur $Q = m \cdot c \cdot \Delta\theta = s \cdot m = r \cdot m$ [kJ]
- $m = Q/(c \cdot \Delta\theta)$ · $\Delta\theta = Q/(m \cdot c)$ · $c = Q/(m \cdot \Delta\theta)$
- Puissance thermique $\Phi = Q/t$ [kW] · 1 kW = 1 kJ/s = 3600 kJ/h
- Capacité thermique massique : eau 4,187 · glace 2,09 · vapeur 1,872 [kJ/(kg·K)]
- Enthalpie de fusion de l'eau $s$ ≈ 334 kJ/kg · enthalpie de vaporisation $r$ ≈ 2256 kJ/kg

### 6.2 Pouvoir calorifique inférieur et supérieur

- $Q = m \cdot H_i$ · pouvoir calorifique supérieur $H_s = H_i + Q_{condensat}$
- Mazout extra-léger : 42,9 MJ/kg · gaz naturel : ~37 MJ/m³ ≈ 10,3 kWh/m³
- 1 kg de mazout ≈ 1,19 l · 1 m³ de gaz ≈ 0,93 l de mazout
- Les NOx endommagent la couche d'ozone (réduits par recirculation des gaz) ; le CO2 renforce l'effet de serre. ![Pouvoirs calorifiques](Brennwert.png)

### 6.3 Transmission thermique

- $\dot Q = U \cdot A \cdot (T_i - T_e)$
- $U = 1/(1/h_i + d_1/\lambda_1 + \dots + d_n/\lambda_n + 1/h_e)$ [W/m²K]
- $R_{si} = 0{,}125$ m²K/W · $R_{se} = 0{,}04$ m²K/W · éléments enterrés : $R_{se} = 0$
- Besoin de puissance d'un local : $\dot Q = \dot Q_{TR} + \dot Q_{LR} - \dot Q_{IR}$ (transmission + ventilation − apports internes)
- Valeurs λ : voir [LambdaWerteWaremedurchgangswerte.pdf](LambdaWerteWaremedurchgangswerte.pdf)

### 6.4 Qualité de l'eau de chauffage

pH 8,3–9,5 (avec aluminium < 8,5) · dureté < 0,1 mol/m³ (< 1 °fH, < 0,56 °dH) · pas de gaz libres.

### 6.5 Dilatation et vase d'expansion (chauffage)

- $\Delta V = m \cdot (v_2 - v_1)$ [dm³] ; anomalie de densité : l'eau est la plus dense à 4 °C (1 kg/dm³). ![Dilatation de l'eau](AusdehnungWasser.png)
- Pression de gonflage $p_v$ [bar] = hauteur statique/10 + 0,3
- Volume nominal : $V_N = V_A \cdot f \cdot x$ ($V_A$ contenance de l'installation, $f$ facteur de dilatation thermique, $x$ facteur de majoration). ![Facteur](Thermische_Ausdehnungsfaktor.png)

### 6.6 Courbe de chauffe et limite de chauffage

- Pente $S = \Delta T_{départ} / \Delta T_{extérieur}$
- Limite de chauffage : +15 °C (mauvaise isolation), +12 °C (bonne isolation)

### 6.7 Loi des mélanges

- $Q_{tot} = Q_1 + Q_2$
- $T_m = (m_1 c_1 T_1 + m_2 c_2 T_2)/(m_1 c_1 + m_2 c_2)$
- Eau froide : $m_1 = m_2 (T_2 - T_m)/(T_m - T_1)$ · eau chaude : $m_2 = m_1 (T_m - T_1)/(T_2 - T_m)$ ![Croix de mélange](mischkeuz.png)

### 6.8 Débits et pertes de charge

- $\Phi = \dot m \cdot c \cdot \Delta T$ [kW] · $\dot m = (\Phi \cdot 3600)/(c \cdot \Delta T)$ [kg/h]
- $\dot V = A \cdot w$ · $w = \dot V / A$
- Perte de charge : $\Delta p = \Sigma (R \cdot l + Z)$ ; valeur guide de prédimensionnement **50 Pa/m**. ![Pertes par frottement](Reibungsverlust.jpeg)
- Dilatation linéaire : $\Delta l = l_0 \cdot \alpha \cdot \Delta\vartheta$

Dimensions des tubes et débit max. :

| Tube fileté | DN | Ø ext. [mm] | Débit max. [l/s] |
| --- | --- | --- | --- |
| 3/8" | 10 | 17,2 | 0,33 |
| 1/2" | 15 | 21,3 | 0,83 |
| 3/4" | 20 | 26,9 | 1,33 |
| 1" | 25 | 33,7 | 2,50 |
| 1 1/4" | 32 | 42,4 | 3,83 |
| 1 1/2" | 40 | 48,3 | 5,00 |
| 2" | 50 | 60,3 | 8,33 |
| 2 1/2" | 65 | 76,1 | 13,33 |

### 6.9 Accumulateur d'eau chaude sanitaire (ECS)

Systèmes : points de puisage individuels, alimentation individuelle ou centrale ; chauffe-eau instantanés ou à accumulation, systèmes à échangeur à plaques. **Les chauffe-eau électriques à accumulation purs ne sont plus admis dans les bâtiments habités toute l'année (loi sur l'énergie).**

$V_{SP} = V_B + V_V + V_{LA} + V_Z + V_{KW}$

- $V_B$ besoin en ECS (tableau : taille du logement/personnes/confort)
- $V_V$ pertes de l'installation : ≤ 200 l → 15 % ; ≤ 500 l → 8 % ; ≤ 1000 l → 6 % ; ≥ 1000 l → 5 % de $V_B$
- $V_{LA}$ pertes de puisage des conduites individuelles : maison indiv. 20 %, immeuble 10–15 %
- $V_Z$ zone de mélange : 10–20 % · $V_{KW}$ zone d'eau froide : 5–10 %

---

## 7. Solaire thermique

### 7.1 Surface de capteurs

- Règle rapide : 1,5 m² par personne ; irradiance 600–1000 W/m² ; inclinaison optimale 40–60° (accent hiver), 25–35° (été), le plus souvent 45° sud.
- Surface de capteurs $A_K = (Q_{ECS} \cdot \alpha)/q$ [m²]
- Besoin annuel $Q_{ECS} = (m \cdot c \cdot \Delta T \cdot 365)/3600$ [kWh/a], $m$ = 50 l/pers·j × 1,2 (+ 20 % de pertes)
- Rendement utile $q$ : Plateau maison indiv. 500 / immeuble 650 · Alpes 650 / 900 [kWh/(m²·a)]
- Taux de couverture $\alpha$ : maison indiv. 0,45–0,65 (→ 0,55) · immeuble 0,30–0,50
- Couverture annuelle approximative : SD = surface × rendement annuel (~400 kWh/m²·a en préchauffage) / besoin de chaleur.

### 7.2 Accumulateur solaire

$V_{SP} = A_K \cdot V_S + V_Z$ avec $V_Z = V_B \cdot f$

- $V_S$ volume de préchauffage solaire 30–60 l/m²
- $V_B$ volume de disponibilité 50 l/personne
- $f$ : gaz/mazout 0,5 × besoin journalier · **pompe à chaleur/électrique 1,0 × besoin journalier** ![Tampon ST](ST_Puffer_approx.png)

### 7.3 Échangeur de chaleur

- Dès ~6 m² de capteurs ou en rénovation : échangeur externe obligatoire.
- $A_{EC} = (A_K \cdot \dot q_K)/(k \cdot \Delta T)$ avec $\dot q_K$ ≈ 650 W/m², $\Delta T$ départ/retour ≈ 10 K
- Bilan $Q_{cédé} = Q_{reçu}$ ; c pour l'eau d'un côté, pour l'eau glycolée de l'autre.

### 7.4 Conduite solaire et circulateur

- Vitesse du glycol 0,6–1,0 m/s, optimum 0,7 m/s. High-flow : 30–40 l/(m²·h).
- Débit $\dot V = A_K \cdot V_s$ (débit spécifique selon le type de capteur)
- Perte de charge : $\Delta p_{tot} = (\Delta p_{capt} + \Delta p_{EC} + \Delta p_{cond}) \cdot f$, avec $\Delta p_{cond} = l \cdot (Pa/m) \cdot 1{,}2$ (+20 % pour les raccords), correction glycol $f$ = 1,2
- Hauteur manométrique [m CE] = $\Delta p_{tot}$ [Pa] / (1000 · 9,81)

### 7.5 Pressions et vase d'expansion

- Pression de remplissage = pression de service = hauteur statique/10 + 0,3 bar + 0,5 bar
- Pression de gonflage = hauteur statique/10 + 0,3 bar
- Volume de dilatation $V_{ex} = V_{sys} \cdot e \cdot x$ ; $V_{sys} = (V_{capt} + V_{circuit}) \cdot 2$ ; $V_{cond} = r^2\pi \cdot 2l$
- Volume nominal minimal : $V_n = V_{ex} \cdot (P_E + 1)/(P_E - P_V)$ avec $P_E$ = pression soupape/1,3, $P_V$ = hauteur statique/10 + 0,3 ![Coefficient](ST_ausdehnungskoeffizient.jpeg)

---

## 8. Pompes à chaleur

### 8.1 Indicateurs

- **COP** $= \dot Q_h / P_{abs}$ : rapport restitution/absorption **en un point de fonctionnement fixe**. Plus l'écart de température source→puits est faible, plus le COP est élevé. *Lire les fiches techniques au bon point de fonctionnement (température de départ/de source), pas au maximum.*
- **COPA/JAZ** $= Q_a / E_a$ : chaleur restituée / électricité absorbée **sur une année**, valeurs mesurées.
- Électricité annuelle $E_a = Q_a / COPA$ · chaleur environnementale $Q_{a,src} = Q_a - E_a$ · $\dot Q_h = P_{el} + \dot Q_{src}$

Processus : évaporation ($Q_0$) + électricité ($P_{el}$) = condensation ($Q_C$). Pressostats haute/basse pression pour la sécurité. Fluides naturels : faible GWP, faible ODP, bonnes propriétés thermodynamiques. ![log ph](WP_log_ph.jpeg)

### 8.2 Sources de chaleur

- **Eau :** eaux de surface (rivière, lac, mer), eaux souterraines/de source/de puits/profondes, rejets thermiques (eau de refroidissement, eaux usées), eau en circuit (chauffage à distance, eau de process)
- **Sol :** sondes géothermiques, forages profonds, capteurs horizontaux
- **Air :** air extérieur, air extrait, rejets de process/de personnes

### 8.3 Sondes géothermiques (SGV)

- Longueur : $L_{SGV} = Q_a \cdot (1 - 1/COPA) / q_{spéc}$ ou $\dot Q_{SGV} / \dot q_{par\,m}$
- Puissance d'extraction ≈ 0,035 kW/m · énergie d'extraction ≈ 70 kWh/(m·a) · max. ~250 m
- Espacements : 7–8 m entre sondes (min. 5 m). **Canton de Zurich (AWEL) :** 6 m entre sondes, 3 m de la limite de parcelle, 2 m des bâtiments.
- Viser un écoulement turbulent dans les tubes, sinon la température de source baisse d'~1,5 K.
- **Ne pas oublier l'eau chaude sanitaire dans le dimensionnement.**
- Eau souterraine : $\dot m = \dot Q_K \cdot 3600 / (c \cdot (t_{entrée} - t_{sortie}))$ [kg/h]

### 8.4 Configurations air/eau

Types de bruit : aérien, solidien, d'écoulement.

| Installation | Avantages | Inconvénients |
| --- | --- | --- |
| Intérieure | quasi pas de bruit extérieur, pas de hors-gel nécessaire | place pour gaines d'air, risque de court-circuit d'air, travaux |
| Extérieure | peu de place intérieure, ouvertures simples | bruit, permis de construire, risque de gel des conduites, pertes |
| Split | peu de place, économique | bruit, permis, efficacité moindre, plus de fluide frigorigène → entretien/étanchéité, durée de vie réduite |

### 8.5 Modes de fonctionnement

| Mode | Description | Complément | Usage |
| --- | --- | --- | --- |
| Monovalent | PAC couvre 100 % | – | constructions neuves bien isolées |
| Mono-énergétique | PAC + corps de chauffe électrique pour les pointes | résistance | standard maison indiv. CH/DE |
| Bivalent-parallèle | PAC + fossile, simultanés | chaudière mazout/gaz | rénovations, charges élevées |
| Bivalent-alternatif | PAC jusqu'au point de bivalence, puis fossile seul | chaudière mazout/gaz | régions froides, bâtiments anciens |
| Multivalent | plusieurs systèmes | PAC + ST + gaz | grands bâtiments, réseaux |

### 8.6 SG Ready

Système à deux fils avec 4 états : 1) blocage (heures de verrouillage), 2) fonctionnement normal, 3) recommandation d'enclenchement (le régulateur PAC décide), 4) ordre de démarrage avec paramètres prédéfinis. La recommandation laisse le dernier mot à la PAC (pas de marche forcée avec accumulateur plein), mais sans planification prévisionnelle.

### 8.7 Dimensionnement à partir de la consommation (rénovation)

$\dot Q_H$ = consommation [litres de mazout] / diviseur → besoin de puissance à la température de dimensionnement [kW] :

| Situation | avec ECS (chaudière toute l'année) | sans ECS (électrique) |
| --- | --- | --- |
| Plateau | / 300 | / 265 |
| > 800 m | / 330 | / 295 |

Ou via les heures à pleine charge : $\Phi_{HL} = (consommation \cdot H_s \cdot \eta)/t_{pleine}$ ![Heures pleine charge](Vollaststunden.png)

Contrôle par la puissance spécifique $\Phi_{HL} = KW \cdot SRE$ :

| Type de bâtiment | W/m² |
| --- | --- |
| Habitations à isolation conventionnelle | 50–70 |
| Habitations existantes bien isolées | 40–50 |
| Constructions neuves selon prescriptions actuelles | 30–40 |
| Bâtiments de services conventionnels | 60–80 |

Neuf : SIA 384.201 ou dérivation de SIA 380/1 plus majorations. Calculateur : https://biber.solar/heat-pump-calculator/

### 8.8 Besoin énergétique annuel (méthode des degrés-jours)

Besoin [kWh] = (charge thermique / 28) · 16 · DJC

- 28 K : dimensionnement −8 °C ↔ local 20 °C · 16 h de fonctionnement journalier · DJC : degrés-jours de chauffage du site
- Neuf : charge = surface × W/m² ; plus ~250 W/personne pour l'ECS.

Exemple, maison de 140 m² à Zurich, 4 personnes : charge 140 × 35 = 4,9 kW ; ECS 4 × 250 W = 1 kW ; DJC Zurich ≈ 3267 → besoin ≈ ((4,9+1)/28) · 16 · 3267 ≈ **11'000–12'000 kWh/a**.

Puissance électrique : $P_{el} = \dot Q_{PAC} / COP$ (attention aux heures de verrouillage du distributeur).

---

## 9. Énergie, réseau et climat (Suisse)

### 9.1 Formes d'énergie

Chimique, cinétique, électrique, thermique, rayonnement, potentielle, rotation, nucléaire. L'énergie se conserve. Exemple centrale à charbon : chimique → thermique → cinétique → électrique.

### 9.2 Consommation électrique des ménages

Moyenne CH sans PAC/VE ≈ 5000 kWh/a. 2 personnes : appartement 2750 / maison 3550 kWh/a · 1 personne : 2200 / 2700 · 4 personnes : 3850 / 5200. Consommation totale CH ≈ 65 TWh/a, production ≈ 67 TWh/a (surtout hydraulique et nucléaire ; nouvelles renouvelables en croissance, RE hors hydraulique 2022 ≈ 7,7 TWh).

### 9.3 Niveaux de réseau

| Niveau | Centrales | Consommateurs | Tension |
| --- | --- | --- | --- |
| 1 réseau de transport | pompage-turbinage, nucléaire, hydraulique | industrie lourde, CFF | 220/380 kV |
| 3 réseaux suprarégionaux | hydraulique | industrie | 36–220 kV |
| 5 réseaux régionaux | thermique | bâtiments de services | 1–36 kV |
| 7 réseaux locaux | éolien, PV, biogaz | bureaux, habitat | 400/230 V |

(Niveaux 2, 4, 6 = transformation)

### 9.4 Avantages / inconvénients des renouvelables

- **PV :** + installation simple, bon marché (~0,13 CHF/Wc modules), exploitation sans émissions · − production diurne seulement, rendement limité, dépendance de la Chine.
- **Solaire thermique :** + rendement de capteur élevé (~60 % à ΔT 40 K), bien stockable · − installation plus exigeante, chaleur uniquement.
- **Éolien :** + produit aussi la nuit, forte puissance · − acceptation, paysage.
- **Hydraulique :** + démarrage autonome (black start), stockable, pilotable · − impact sur l'écosystème.
- **Biomasse :** + valorisation des déchets, base-load · − investissements, technique complexe, étanchéité (gaz à effet de serre).

### 9.5 Le soleil

Fusion H → He, $E = mc^2$, $c = 2{,}998 \cdot 10^8$ m/s. Distance 150 mio km, **constante solaire 1367 W/m²**, référence STC 1000 W/m².

### 9.6 Effet de serre et politique climatique

- CO2 : 2024 ≈ 427 ppm (préindustriel ~280 ppm, +>50 %). Réchauffement global ≈ +1,2–1,3 °C ; certains mois de 2024 > +1,5 °C. Suisse ≈ +2,8 °C. Effet de serre naturel : +33 K (−18 °C → +15 °C).
- Émissions CH imports compris ≈ 13 t CO2eq/hab ; en 2022, émissions intérieures −24 % vs 1990. Parts : 33 % transports, 23 % bâtiments, 23 % industrie, 21 % agriculture/déchets/gaz synthétiques.
- Conséquences : événements extrêmes, niveau des mers, extinction d'espèces, risques sanitaires, migrations. Points de bascule : irréversibles, rétroactions positives (albédo arctique, permafrost).
- **Paris 2015 :** nettement sous 2 °C, si possible 1,5 °C ; soutien aux pays pauvres ; pas de sanctions.
- **Stratégie énergétique 2050 :** efficacité, développement des renouvelables, zéro net 2050 (2030 : −50 % vs 1990), sortie du nucléaire, supplément réseau 2,3 ct., Programme Bâtiments, taxe CO2 (1/3 population, 1/3 économie/AVS, 1/3 Programme Bâtiments).
- **Loi sur l'énergie (votation 9.6.2024) :** objectifs RE 35 TWh en 2035, 45 TWh en 2050 ; obligation solaire dès 300 m² de surface bâtie ; **CEL** communautés électriques locales (même zone et niveau de réseau, proximité, puissance min. ~20 % de la puissance raccordée, smart meters). Objectif de consommation : −43 % par habitant d'ici 2035, −53 % d'ici 2050 (base 2000).

---

## 10. Prescriptions, normes, subventions (Suisse)

### 10.1 Hiérarchie

- **Lois** obligatoires : LEne, prescriptions cantonales (MoPEC : part d'autoproduction pour le neuf, min. 10 % RE au remplacement du chauffage, CECB, valeurs U limites).
- **Ordonnances** obligatoires : OIBT (RS 734.27), ordonnance sur le courant fort (734.2), OMBT (734.26), OLEl (734.31), OCEM (734.5).
- **Normes** = règles de la technique : NIBT 2020 / NIBT-Compact (electrosuisse), IEC, CENELEC, SIA.
- **Standards** volontaires : Minergie (< Minergie-P < Minergie-A), CECB (étiquettes A–G, CECB Plus avec rapport de conseil).

### 10.2 OIBT et attestations

- L'OIBT régit les travaux et le contrôle des installations BT ; autorisations : **art. 7** (personnes physiques), **art. 9** (entreprises), **art. 14** (autorisation limitée, notamment PV jusqu'à l'interrupteur AC de l'onduleur) ; examen par l'**ESTI/IFICF**.
- **Première vérification** avant la mise en service : contrôle visuel, mesures, essais fonctionnels (NIBT partie 6).
- **Rapport de sécurité (RS/SiNa)** pour installations neuves/étendues et périodiquement (annexe OIBT).

### 10.3 Subventions

- **Pronovo :** garanties d'origine, rétribution unique (PRU < 100 kW, GRU > 100 kW).
- Programme Bâtiments (cantonal), subventions communales : energiefranken.ch.
- Catégories de montage pour les subventions : isolée, ajoutée, intégrée.
- RCP : derrière le raccordement, compteurs étalonnés (METAS ; validité 10 ans électronique, 15 ans électromécanique). RCP virtuel : même niveau de réseau 7.

---

## 11. Abréviations

AC courant alternatif · DC courant continu · RU/EIV rétribution unique · ESTI Inspection fédérale des installations à courant fort · GAK coffret de raccordement générateur · CECB certificat énergétique cantonal des bâtiments · CEL communauté électrique locale · MPP point de puissance maximale · NIBT norme sur les installations à basse tension · OIBT ordonnance sur les installations à basse tension · NOCT température normale de fonctionnement de la cellule · Pronovo organe d'exécution des programmes d'encouragement · EPIaC équipement de protection individuelle antichute · PV photovoltaïque · DDR dispositif différentiel résiduel · SIA Société suisse des ingénieurs et des architectes · RS/SiNa rapport de sécurité · SPD parafoudre · STC conditions d'essai standard · TAG demande de raccordement technique · RCP regroupement pour la consommation propre

Histoire de la durabilité : Hans Carl von Carlowitz (fondateur), Gro Harlem Brundtland (définition moderne).

---

## 12. Liens

- https://www.uvek-gis.admin.ch/BFE/sonnendach/ · https://www.geoportal.ch/ · https://solargis.com/resources/free-maps-and-gis-data · https://everywhere.solar/
- Dimensionnement PAC (OFEN) : https://pubdb.bfe.admin.ch/de/publication/download/165
- Degrés-jours : https://opendata.swiss · https://www.hev-schweiz.ch
- Subventions : https://pronovo.ch · https://www.energiefranken.ch · https://portal.dasgebaeudeprogramm.ch · https://www.geak.ch
- Contact : patrick@biber.solar · https://biber.solar
