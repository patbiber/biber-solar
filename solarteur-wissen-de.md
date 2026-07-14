# Solarteur- und Haustechnik-Wissen ☀️ 👷

**PV, Solarthermie, Wärmepumpen und Energiebedarf in der Haustechnik**
Referenz für Planung in der Schweiz (Kanton Zürich) · eConnect · Patrick Biber, Solarteur STFW

> Hinweis: Referenzierte Bilder (`![...]`) liegen im gleichen Repository. Offensichtliche Tippfehler der Rohnotizen wurden korrigiert (z. B. Widerstand, Heizkurve, 1 kWh = 3'600'000 Ws, HGT Zürich ≈ 3267).

---

## 1. Arbeitssicherheit

### 1.1 Die 5 Sicherheitsregeln (SUVA 84042.d)

Für spannungsfreies Arbeiten an elektrischen Anlagen gelten konsequent:

1. **Freischalten** – alle Teile der Anlage freischalten (LS-Schalter ausschalten, Schmelzsicherungen entfernen, allpoligen Hauptschalter betätigen).
2. **Gegen Wiedereinschalten sichern** – Schaltgeräte mit Schloss sichern, Sicherungseinsätze mitnehmen, Verbotsschilder anbringen.
3. **Spannungsfreiheit feststellen** – durch Fachkraft, mit zweipoligem Spannungsprüfer.
4. **Erden und kurzschliessen** – zuerst erden, dann verbinden (von der Arbeitsstelle aus sichtbar). Entfällt bei Anlagen < 1000 V (Ausnahme Freileitungen).
5. **Benachbarte unter Spannung stehende Teile abdecken oder abschranken** – < 1000 V: isolierende Tücher, Schläuche, Formstücke; > 1000 V: zusätzlich Absperrtafeln, Seile, Warntafeln. Körperschutz: Helm mit Gesichtsschutz, eng anliegende Kleidung, Handschuhe.

### 1.2 Wirkung des elektrischen Stroms auf den Menschen

| Stromstärke | Wirkung |
| --- | --- |
| 0,005 mA | Wahrnehmbarkeit mit der Zunge |
| 1 mA | Reizschwelle: Kribbeln |
| 15 mA | Krampfschwelle: Loslassgrenze, Muskelverkrampfung |
| 50 mA | Gefahrenschwelle: Verkrampfung Atemmuskulatur, Herzkammerflimmern |
| 80 mA | Todesschwelle |

Ziele des Personenschutzes: Berührungsstrom klein, Berührungsspannung klein, Dauer des gefährlichen Zustands kurz.

Unfallgefahren: Durchströmung, Lichtbogen, abschmelzende Materialien, Brand, Sekundärunfälle (Sturz von Leiter/Gerüst).

### 1.3 Absturzsicherung (ABS)

- **Kollektivschutz vor Personenschutz** (Geländer vor PSAgA).
- Absturzsicherung ab **2 m** zur Dachkante; Gerüst ab 2 m Höhe und ab 2 Manntagen.
- Arbeiten < 2 Manntage: bis 3 m Leiter, danach PSAgA oder Gerüst.
- **PSAgA** (Persönliche Schutzausrüstung gegen Absturz): Auffanggurt (EN 361), Verbindungsmittel mit Falldämpfer (EN 355), Auffanggerät, Anschlagmittel, Verbindungselemente (EN 362), System EN 363, Helm mit Kinnriemen.
- Zulässig nur, wenn Kollektivschutz nicht möglich ist, Anwender geschult sind, Ausrüstung geprüft ist und ein **Rettungskonzept** vorliegt.
- Rechtsgrundlagen: ArG, VUV (Art. 3 und 11), EKAS-Richtlinie 6512, EN-Normen.

### 1.4 Prävention: STOP-Prinzip

**S**ubstitution → **T**echnische Massnahmen → **O**rganisatorische Massnahmen → **P**ersönliche Massnahmen.

Jeder Absenztag kostet den Betrieb 600–1000 CHF. Gesetzliche Grundlagen: UVG (Unfallversicherung, Arbeitssicherheit), ArG (Arbeits-/Ruhezeiten, Gesundheitsschutz), PrSG (Produktesicherheit). Die **EKAS** koordiniert; Durchführungsorgane sind Kantone und Suva, dazu SECO und Fachorganisationen.

---

## 2. Physikalische Grundlagen

### 2.1 Einheiten und Umrechnungen

- 1 Ws = 1 J · 1 kWh = 3'600'000 J = 3600 kJ = 3,6 MJ
- kWh = MJ / 3,6
- 1 cal = 4,187 J · 1 PS = 735 W
- 1 kg ÖE (Öläquivalent) = 41,868 MJ = 10'000 kcal = 11,63 kWh
- 1 kg SKE (Steinkohleeinheit) = 0,7 kg ÖE = 29,3 MJ = 8,14 kWh
- 100 Pa = 1 mbar · 10'000 Pa = 0,1 bar · 10 mWS = 1 bar

### 2.2 Kinematik und Kraft

- Beschleunigung $a = (v_{end} - v_{anf}) / t$ [m/s²] · Erdbeschleunigung $g$ = 9,81 m/s²
- $v = s/t$ · $t = s/v$
- Kraft $F = m \cdot a$ [N]
- Masse $m = V \cdot \rho = Q / (c \cdot \Delta T \cdot \eta)$ [kg]

### 2.3 Arbeit und Leistung

- Leistung $P = W / t = F \cdot v$ [W]
- Arbeit $W = P \cdot t$ [J, Ws, Nm, kWh]
- Mechanische Arbeit $W = F \cdot s = m \cdot g \cdot h$
- Elektrische Arbeit $W = U \cdot I \cdot t \cdot \cos\varphi$ (Praxis: kWh)
- Kosten = $W \cdot$ Tarif

### 2.4 Elektrische Leistung

- Gleichstrom / ohmsche Last: $P = U \cdot I = U^2 / R = I^2 \cdot R$
- Wechselstrom einphasig: $P = U \cdot I \cdot \cos\varphi$
- Drehstrom: $P = \sqrt{3} \cdot U \cdot I \cdot \cos\varphi$
- Leistungsfaktor $\cos\varphi = P / S$ · Gleichstrom: $\cos\varphi = 1$

### 2.5 Wirkungsgrad

$\eta = Nutzen / Aufwand = P_{ab}/P_{auf} = W_{ab}/W_{auf} = \eta_1 \cdot \eta_2 \cdot \dots \cdot \eta_n$

Beispiel: 0,92 · 0,93 · 0,80 = 0,684 → 68 %. Es gilt: Wirkungsgrad = 1 − Verluste.

Energiekette: **Primärenergie** (Rohstoff) → **Sekundärenergie** (Diesel, Strom) → **Endenergie** (an der Steckdose / vor der Haustür) → **Nutzenergie** (Energie am Rad, Wärme des Föhns).

### 2.6 Flächen

- Dreieck: $A = (l \cdot h)/2$
- Kreis: $A = (d^2 \cdot \pi)/4 = r^2 \cdot \pi$ · $r = \sqrt{A/\pi}$ · $d = 2r$

---

## 3. Elektrotechnik

### 3.1 Stromarten

🔋 Gleichstrom DC (Direct Current, −) · 🔌 Wechselstrom AC (Alternating Current, ~)

### 3.2 Ohmsches Gesetz

- Spannung $U = R \cdot I = P/I = \sqrt{P \cdot R}$ [V]
- Strom $I = U/R = P/U = \sqrt{P/R}$ [A]
- Widerstand $R = U/I = P/I^2 = U^2/P = (\rho \cdot l)/A$ [Ω]
- Leitwert $G = 1/R$ [S]

### 3.3 Leiterberechnung und Spannungsfall

- Leiterlänge $l$ = 2 × Leitungslänge (hin und zurück)
- $\rho_{Cu} = 0{,}0175\ \Omega\,mm^2/m$ · Leitfähigkeit $\gamma = 1/\rho$
- Querschnitt $A = r^2 \cdot \pi$ [mm²]
- Spannungsfall $\Delta U = 2 \cdot (\rho \cdot l \cdot I)/A$ [V]
- **NIN: max. 4 % zwischen Hausanschlusskasten und Verbraucher** (9,2 V bei 230 V)
- Leitungsverlust $P_v = I^2 \cdot R_L$

### 3.4 Strombelastbarkeit (Richtwerte)

| Strom [A] | Querschnitt [mm²] |
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

Kabeldicke (Praxis): 2,5 mm² → 16 A · 4 mm² → 20 A · 6 mm² → 25 A · 10 mm² → 40 A. Erdung ohne LPS: 10 mm², sonst 16 mm². Verlegearten (Belastbarkeit): A1 im Rohr in gedämmter Wand < B1 im Rohr auf Holzwand < F frei in Luft.

Beispiel Anschlussleistung: 40 A × 230 V × 3 Phasen = 27,6 kVA → max. ~27,6 kWp PV-Leistung am Anschluss.

### 3.5 Serie- und Parallelschaltung

Serie: $I_{tot} = I_1 = I_2$ · $U_{tot} = U_1 + U_2$ · $R_{tot} = R_1 + R_2$
Parallel: $I_{tot} = I_1 + I_2$ · $U_{tot} = U_1 = U_2$ · $1/R_{tot} = 1/R_1 + 1/R_2$

### 3.6 Drehstrom

- **Sternschaltung:** $I = I_p$, $U = \sqrt{3} \cdot U_p$ (230 V → 400 V)
- **Dreieckschaltung:** $U = U_p$, $I = \sqrt{3} \cdot I_p$
- Netz: 1×230 V / 3×400 V, 50 Hz

### 3.7 Schutzmassnahmen nach NIN

- **Basisschutz:** max. Berührungsspannung AC 50 V (25 V für Spielzeug, Labor etc.), DC 120 V (60 V). Aktive Teile abdecken/isolieren.
- **Fehlerschutz:** SELV (keine Verbindung zum Schutzleiter, ≤ 50 V AC / ≤ 120 V DC), PELV (sichere Trennstelle zum Schutzleiter), FELV (keine sichere Trennung, Ausgangsseite mit Schutzleiter).
- **1 Überlastschutz:** thermische Auslösung (Bimetall) → Schmelzsicherung, LS, Thermorelais.
- **2 Kurzschlussschutz:** elektromagnetische Auslösung → Schmelzsicherung, LS, Leistungsschalter.
- **3 Fehlerstromschutz:** RCD/FI, Summenstrommessung. Personenschutz 30 mA (10 mA), Sachschutz 300 mA.
- **4 Störlichtbogenschutz:** AFDD (Brandschutzschalter) in kritischen Umgebungen.
- **5 Selektivität:** nur die dem Fehler unmittelbar vorgeschaltete Schutzeinrichtung löst aus.

Schutzklassen und IP-Schutzarten: siehe ![Schutzklasse](Schutzklasse.png), ![IP Schutzarten](IP_Schutzarten.png).

### 3.8 Schutzorgane

- **Schmelzsicherung:** Sollbruchstelle schmilzt durch Stromwärme; Quarzsand als Funkenlöscher.
- **Leitungsschutzschalter LS:** thermisch (Überlast) + magnetisch (Kurzschluss), wiedereinschaltbar.
  - Typ B: 3–5 × I_N (Heizung, Herd, Boiler)
  - Typ C: 5–10 × I_N (Motoren, hohe Einschaltströme)
  - Typ D: 10–20 × I_N (Schweranlauf)
  - Energiebegrenzungsklasse 3 = beste Kurzschlussstrombegrenzung.
- **FI/RCD:** vergleicht Ströme L1, L2, L3, N; schaltet bei Differenz über Nennfehlerstrom ab.
- **AFDD:** Mikroprozessor erkennt Lichtbogen-Signaturen.

### 3.9 Schmelzsicherungen (Diazed-Farbcode)

| Nennstrom | Farbe |
| --- | --- |
| 2 A | rosa |
| 4 A | braun |
| 6 A | grün |
| 10 A | rot |
| 13 A | schwarz |
| 16 A | grau |
| 20 A | blau |
| 25 A | gelb |
| 32 A | violett |
| 35/40 A | schwarz |
| 50 A | weiss |
| 63 A | kupfer |
| 80 A | silber |
| 100 A | rot |

---

## 4. Photovoltaik

### 4.1 Solarzelle

Kristalline Si-Zelle: zwei unterschiedlich dotierte Schichten. Lichtzugewandte **n-Schicht** (Phosphor, 5 Valenzelektronen → freie Elektronen), darunter **p-Schicht** (Bor, 3 Valenzelektronen → Löcher). An der Grenzschicht entsteht ein elektrisches Feld, das die freigesetzten Ladungen trennt. Rückseite: ganzflächiger Kontakt (Al-/Ag-Paste); Vorderseite: Kontaktgitter + Antireflexschicht (Siliziumnitrid/Titandioxid).

Typische Zelle: $U_{OC}$ ≈ 0,60–0,70 V, $I_{SC}$ ≈ 10–11 A (Gleichstrom).

Zelltypen: kristallin (mono/poly, ~200 µm Wafer), Dünnschicht, nanostrukturiert.

**Merksatz: Der Strom wird von der Einstrahlung, die Spannung von der Temperatur beeinflusst.** ![IUP_Kurve](IUP_Kurve.png)

### 4.2 Testbedingungen

- **STC:** 25 °C Zelle, 1000 W/m², AM 1,5
- **NOCT:** 20 °C Umgebung, ~45 °C Zelle, 800 W/m², AM 1,5, Wind 1 m/s

### 4.3 Einstrahlung und Ausrichtung

- Globalstrahlung Mittelland ca. **1100 kWh/m²·a**; momentan bis 1000 W/m² (Hochgebirge bis 1500 W/m²). Bei AM 1,5 max. ~835 W/m² Direktstrahlung, Rest diffus.
- Ertragsoptimiert: Süd, ca. 15–35° Neigung (Optimum CH ≈ 35° Süd).
- Eigenverbrauchsoptimiert: Ost–West, 10–20°.
- Reihenabstand (Freifläche/Flachdach, keine gegenseitige Verschattung am 21.12., Sonnenstand ~19°):
  $R = (\sin\alpha / \tan\beta + \cos\alpha) \cdot L$ — Überschlag: Abstand ≈ 3 × Höhe der Modulkante. ![Reihenabstand](Reihenabstand.png)
- Karten: sonnendach.ch, solargis.com, everywhere.solar

### 4.4 Halbzellenmodule und Verschattung

Halbzellenmodul: 3 Bypassdioden, je Zell-Doppelstring oben/unten parallel. Bei Verschattung der unteren Modulhälfte arbeiten die oberen Strings weiter → 50 % Leistung (Vollzelle: Einbruch). Im Modulstring gilt: Sind < 50 % der Module (z. B. untere Hälfte) verschattet, bestimmen die unverschatteten Module die Leistung; verschattete werden über Bypassdioden ausgenommen. ![Verschattung](verschattung_und_verschaltung_Halbzellen.jpg)

### 4.5 Wechselrichtertypen

| Typ | Einsatz | Merkmale |
| --- | --- | --- |
| Modul-WR | Kleinstanlagen (Balkon) | einphasig (max. 3,6 kVA Unsymmetrie), MPP je Modul, teuer |
| Strang-WR | kleine Anlagen | 1 MPP-Tracker, 1- oder 3-phasig |
| Multistrang-WR | mittel–gross | mehrere MPP-Tracker, ideal Ost/West, am weitesten verbreitet |
| Strang-WR + Optimierer | klein–gross | MPP auf Modulebene, ideal bei Verschattung, mehr Elektronik/Service |
| Zentral-WR | Grossanlagen | mehrere Tracker, DC-Sammelkästen, oft MS-Einspeisung via Trafo |

### 4.6 Wechselrichter-Auslegung (NIN 2020)

Kriterien: $I_{SC}$, $U_{OC}$, $P_{MPP}$, $I_{MPP}$, $U_{MPP}$, Füllfaktor, η, cos φ, Anzahl MPP-Tracker, Netz 230/400 V 50 Hz, Höhenlage. Pro MPP-Tracker nur Strings gleicher Ausrichtung. **Herstellerangaben sind verbindlich.**

Auslegungsschritte:

1. **Maximale DC-Leistung** prüfen.
2. **Maximale Leerlaufspannung** — darf die max. Eingangsspannung des WR nie überschreiten:
   - Variante 1 (Temperaturkoeffizient, typ. $kT_{UOC} ≈ −0{,}32\ \%/K$):
     $UOC_{max} = UOC_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
   - Variante 2 (NIN-Korrekturfaktor): $UOC_{max} = UOC_{STC} \cdot kT_{NIN} \cdot n$
   - $T_{min}$ nach NIN 2020: < 800 m ü. M. und Neigung < 15°: **0 °C**; < 800 m und > 15°: **−5 °C**; 800–1500 m: **−15 °C**; > 1500 m: **−25 °C**
   - $kT_{NIN}$: < 800 m: **1,15**; 800–1500 m: **1,20**; > 1500 m: **1,25**
3. **Minimale Eingangsspannung** (Startspannung) prüfen.
4. **Minimale MPP-Spannung:** $UMPP_{min} = UMPP_{STC} \cdot (1 + (75 - 25) \cdot kT_{UOC}/100) \cdot n$ (T_max = 75 °C)
5. **Maximale MPP-Spannung:** $UMPP_{max} = UMPP_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
6. **Maximaler Kurzschlussstrom:** $I_{SCmax} = I_{SC,STC} \cdot 1{,}25$ (Temperaturkorrektur mit $kT_{ISC} ≈ +0{,}03\ \%/K$ meist vernachlässigbar)

Minimale Modulanzahl: $n = U_{min} / U_{MPP,Modul}$ · Maximaler Betriebsstrom: $I_{DCmax} = I_{DC,Modul} \cdot 1{,}25$

**MPP-Fenster:** String-Spannung zu tief (lange Kabel, hohe Temperatur, kurze Strings) → WR kann MPP nicht halten. Zu hoch (tiefe Temperatur, lange Strings) → Überspannungsgefahr, zwingend vermeiden. Strom/Leistung zu hoch (zu viele parallele Strings, Überdimensionierung) → Abregelung. ![MPP Bereich](MPP_Bereich.png)

### 4.7 Strangsicherung

- $I_{max} = I_{SC,Modul} \cdot 1{,}25$ muss kleiner sein als der maximale Rückstrom $I_{Rück} = I_{SC,Modul} \cdot 1{,}25 \cdot (n-1)$
- Sicherungsgrösse: $1{,}5 \cdot I_{SC} < I_N < 2{,}4 \cdot I_{SC}$
- Spannungsfestigkeit: $U_{Sicherung} > 1{,}2 \cdot UOC_{Strang}$
- Notwendig, sobald $I_{Rück}$ die Rückstrombelastbarkeit der Module übersteigt (ab mehreren parallelen Strings). Ein einzelnes Modul verträgt Dauerkurzschluss.

### 4.8 Generatoranschlusskasten GAK

1. Überspannungsschutz · 2. DC-Hauptschalter · 3. Strangüberwachung · 4. Strangsicherungen/-dioden ![GAK](GAK.png)

Anlagenschemata: ![Insel](Inselschema.png) ![Netzgekoppelt](Netzgekoppelt.png) ![Schema](Schema_PV.png)

### 4.9 Blitz- und Überspannungsschutz

- LPS (Lightning Protection System) nach Prinzip Faraday-Käfig; der Potentialausgleich hebt das Gebäudepotential an → keine zerstörenden Ausgleichsströme. Anbindung an zentralen Erdungspunkt → Gebäudeerder.
- Erde 16 mm² (Draht/Seil), ohne LPS 10 mm². Bestehender Blitzschutz: PV auf kürzestem Weg anbinden, nicht quer zur Dachlawine. Leitungen nie parallel zur Traufe, alle 1 m befestigen. Objekte > 2 m² anbinden.
- Korrosion beachten (elektrochemische Spannungsreihe): **Chromstahlklemme als Neutralisator.** ![Korrosion](Kontaktkorrosion_Mat_Blitzschutz.png)

| Blitzschutzklasse | Maschenweite | Blitzkugel-Radius | Abstand Ableitungen | Gebäude |
| --- | --- | --- | --- | --- |
| 1 | 5×5 m | 20 m | 10 m | Rechenzentren, Ex-Bereiche |
| 2 | 10×10 m | 30 m | 10 m | > 300 Personen, hohe Gebäude, Spitäler, Museen |
| 3 | 15×15 m | 45 m | 20 m | Hotels, grosse Gebäude mit Werkstatt/Staub |

**SPD-Typen** (Einbau HAK/GAK, max. 30 m vom Gebäudeeintritt, Verbindung zur Erdung via Pot):

- Typ 1: Blitzschutz, Cu 16 mm², $U_{rest}$ ≈ 4 kV (bei vorhandenem LPS)
- Typ 2: Geräteschutz, Cu 10 mm², $U_{rest}$ ≈ 2,5 kV (ohne LPS)
- Typ 3: Gerätefeinschutz, $U_{rest}$ ≈ 1,5 kV (Server etc.)

Geschützte und ungeschützte DC-Leitungen räumlich trennen (mind. Trennsteg im Kanal). Ursachen von Überspannung: Blitz, industrielle Überspannungen, ESD, NEMP.

### 4.10 Batteriespeicher

Kenngrössen: Energiemenge/-dichte, Leistungsabgabe, SOC, BMS, Eigenverbrauchsoptimierung. Meist Lithium-Ionen.

- **NMC** (Li-Ni-Mn-Co-Oxid): 150–220 Wh/kg, E-Mobilität, thermisch weniger stabil, Kobalt problematisch.
- **LFP** (LiFePO4): 90–120 Wh/kg, sehr stabil, schwer entflammbar, günstiger, ohne kritische Rohstoffe (Huawei, Sonnen, BYD).

Praxis: max. Ladeleistung nur bei genügender Batterie-Nennspannung (Bsp. Fronius Symo GEN24 plus, 22 A Batterieanschluss).

### 4.11 Optimierung und Monitoring

Verbrauch der Produktion anpassen, Lasten intelligent schalten, speichern (Batterie, uni-/bidirektionales Laden), mehrere Parteien teilhaben lassen (**ZEV, vZEV, LEG**). Komponenten: Lastmanagement (SolarLog, Loxone, Solarmanager, SMA, Fronius Ohmpilot), Energiemessung am Übergabepunkt.

### 4.12 Ablauf Bewilligung PV-Anlage (Schweiz)

1. Baugesuch / Bauanzeige
2. **TAG** – Technisches Anschlussgesuch (bei Änderung > 3,7 kW)
3. **IA** – Installationsanzeige (vor Fertigstellung, NIV Art. 7 oder 9)
4. Apparatebestellung (falls kein Smart Meter)
5. **MPP** – Mess- und Prüfprotokoll nach Installationsabschluss (Grundlage SiNa)
6. **SiNa** – Sicherheitsnachweis (nach Abschluss, periodisch, bei Änderungen)
7. Externe Abnahmekontrolle (Beglaubigung MPP/SiNa)
8. **Pronovo:** Herkunftsnachweis und EIV (Einmalvergütung) beantragen

### 4.13 Instandhaltung und Rückbau

- **Inspektion:** WR-Fehlermeldungen/Updates, SPD nach Gewitter, Sichtprüfung (Montagesystem, Module, Eindeckung, Anschlüsse), Ertragskontrolle; evtl. Thermografie, Stringmessung.
- **Wartung:** nötige Instandsetzungen und Reparaturen.
- **Verbesserung:** Modulreinigung, Verschattungsursachen entfernen, Schneefänger nachrüsten.
- **Feuerwehr-Kennzeichnung:** zuerst AC-Last abschalten (WR schaltet ab), dann DC-Last; DC-Generatoren führen tagsüber trotzdem Spannung.
- **Recycling:** SENS eRecycling, vorgezogene Recyclinggebühren; Module enthalten keine relevanten Schadstoffe.

---

## 5. Dach

### 5.1 Dachformen und Planung

Sattel-, Pult-, Walm-, Krüppelwalm-, Mansarden-, Zelt-, Kegel-, Zwiebel-, Shed-, Flach-, Kuppel-, Tonnendach. Begriffe: Gaube, Traufe, First, Ort, Grat. ![Dachteile](Dachteile.png)

PV-Planung: Dachaufnahme vor Ort · Alter/Zustand/Restlebensdauer · Schichtaufbau (Unterdach, Nageldichtband, Sondierung) · **Statik prüfen (Statiker, schriftliche Bestätigung)**. Schneefang obligatorisch, wenn der Bereich darunter öffentlich zugänglich ist (Haftung: Gebäudeeigentümer).

### 5.2 Dachaufbau (von aussen nach innen)

1. **Eindeckung/Lattung:** UV-beständig, nicht brennbar, dicht gegen frei abfliessendes Wasser. Ziegel (ZH oft Breite 215 mm), Eternit (bis 1992 Asbest!), Blech (Doppelfalz, Leisten, Trapez, Sandwich, Kalzip), Solar (Indach).
2. **Konterlattung / Durchlüftung** (SIA 232/1): lokale Reduktion max. 50 % des Querschnitts; bei Indach-PV Konterlatte mind. 60 mm oder eine Stufe höher; Lüftungsgitter reduzieren bis 50 %. Befestigung bei Folienunterdach zwingend mit Nagelband/Nageldichtung. Einschraubtiefe Schrauben: 8 × Durchmesser. ![Konterlattung](Konterlattung.png)
3. **Unterdach** (Pflicht bei gedämmten/bewohnten Dächern, SIA 232): regendicht und diffusionsoffen; „3 Monate frei bewitterbar“.
   - **Normale Beanspruchung** (≥ 20°): dicht gegen frei abfliessendes Wasser; Platten oder überlappte Folien; Nageldichtungen empfohlen.
   - **Erhöhte Beanspruchung** (≥ 18°): dicht bei Stauwasser bis 50 mm; Überlappungen verklebt; Anschlüsse ≥ 50 mm aufgebordet.
   - **Ausserordentliche Beanspruchung** (≥ 15°): dicht bei Stauwasser > 50 mm und Wasserdruck; Folien verschweisst/quellverschweisst.
4. **Wärmedämmung:** U-Wert < 0,2 W/m²K, Neubau 0,17 W/m²K → 140–240 mm je nach λ (Mineralwolle, Holzfaser, PUR, Zellulose).
5. **Dampfbremse:** warmseitig, dient als Luftdichtung; Durchdringungen (z. B. Solarleitung) zwingend luftdicht anschliessen, Hohlräume ausdämmen; Kennwert SD [m].
6. Holzschalung, 7. Sparren (Flumserdach: 30°-Schrauben; Walliserdach: 90°-Schrauben mit Latten in der Aussendämmung).

### 5.3 Geometrie Dachschräge

- Dachabstand zum First (damit Konstruktion nicht übersteht): $Abstand = Höhe_{Konstruktion} / \tan(Dachneigung)$
- $l_{Dach} = l_{Plan} / \cos\Theta$ · $l_{Plan} = l_{Dach} \cdot \cos\Theta$

### 5.4 Flachdach

Dachhaut schützen (Schutzvlies/-filz). Begrünte Dächer: bessere Retention, mehr Wartung; Aufständerung ≥ 50 cm; unter der PV besser Kies statt Substrat. Gefälle min. 1,5 %. Aufbau (Bsp.): Kies – Abdichtung – Dämmung – Dampfbremse – Beton. Varianten: Umkehr-, Verbund-, Duo-, Plus-, Kalt-, Doppeldach. Abdichtungen: PYE, TPO, PVC, EPDM, Flüssigkunststoff.

### 5.5 Fassade und Befestigung

Fassade: Konsolen mit 45–75° verbessern den Ertrag gegenüber 90°, nur mit Überdachungsfunktion. Befestigung: Klemmsystem (einfach/Kreuzschienenverbund, Viertelklemmung), Einlegesystem, Indach (geschuppt, in Rinne entwässernd oder mit Abschlussblech; auf Hinterlüftung achten). Durchdringungen: Elektrorohre dicht (Konvektion/Kondensation).

Thermische Ausdehnung: Alu 2,4 · Stahl 1,2 · Kupfer 1,7 · Glas 0,5 · GFK 5–15 mm/(m·100 K).

---

## 6. Wärmelehre und Hydraulik

### 6.1 Wärmemenge und Leistung

- Wärmemenge $Q = m \cdot c \cdot \Delta\theta = s \cdot m = r \cdot m$ [kJ]
- $m = Q/(c \cdot \Delta\theta)$ · $\Delta\theta = Q/(m \cdot c)$ · $c = Q/(m \cdot \Delta\theta)$
- Wärmeleistung $\Phi = Q/t$ [kW] · 1 kW = 1 kJ/s = 3600 kJ/h
- Spezifische Wärmekapazität: Wasser 4,187 · Eis 2,09 · Dampf 1,872 [kJ/(kg·K)]
- Schmelzenthalpie Wasser $s$ ≈ 334 kJ/kg · Verdampfungsenthalpie $r$ ≈ 2256 kJ/kg

### 6.2 Heizwert und Brennwert

- $Q = m \cdot H_i$ · Brennwert $H_s$ (früher $H_o$) $= H_i + Q_{Kondensat}$
- Öl extraleicht: 42,9 MJ/kg · Erdgas: ~37 MJ/m³ ≈ 10,3 kWh/m³
- 1 kg Öl ≈ 1,19 l · 1 Betriebs-m³ Gas ≈ 0,93 l Öl
- NOx schädigt die Ozonschicht (Reduktion durch Abgasrückführung); CO2 verstärkt den Treibhauseffekt. ![Brennwert](Brennwert.png)

### 6.3 Wärmedurchgang (Transmission)

- $\dot Q = U \cdot A \cdot (T_i - T_e)$
- $U = 1/(1/h_i + d_1/\lambda_1 + \dots + d_n/\lambda_n + 1/h_e)$ [W/m²K]
- $R_{si} = 1/h_i = 0{,}125$ m²K/W · $R_{se} = 1/h_e = 0{,}04$ m²K/W · Bauteile im Erdreich: $R_{se} = 0$
- Raum-Wärmeleistungsbedarf: $\dot Q = \dot Q_{TR} + \dot Q_{LR} - \dot Q_{IR}$ (Transmission + Lüftung − interne Wärme)
- λ-Werte: siehe [LambdaWerteWaermedurchgangswerte.pdf](LambdaWerteWaremedurchgangswerte.pdf)

### 6.4 Heizungswasser

pH 8,3–9,5 (mit Aluminium < 8,5) · Härte < 0,1 mol/m³ (< 1 °fH, < 0,56 °dH) · keine freien Gase.

### 6.5 Ausdehnung und Expansionsgefäss (Heizung)

- $\Delta V = m \cdot (v_2 - v_1)$ [dm³]; Dichteanomalie: grösste Dichte bei 4 °C (1 kg/dm³). ![AusdehnungWasser](AusdehnungWasser.png)
- Vordruck $p_v$ [bar] = Anlagenhöhe/10 + 0,3
- Nennvolumen: $V_N = V_A \cdot f \cdot x$ ($V_A$ Anlageinhalt, $f$ thermischer Ausdehnungsfaktor, $x$ Zuschlagsfaktor). ![Faktor](Thermische_Ausdehnungsfaktor.png)

### 6.6 Heizkurve und Heizgrenze

- Steilheit $S = \Delta T_{VL} / \Delta T_{AT}$
- Heizgrenze: +15 °C (schlechte Dämmung), +12 °C (gute Dämmung)

### 6.7 Mischgesetz (Mischkreuz)

- $Q_{tot} = Q_1 + Q_2$
- $T_m = (m_1 c_1 T_1 + m_2 c_2 T_2)/(m_1 c_1 + m_2 c_2)$
- Kaltwasser: $m_1 = m_2 (T_2 - T_m)/(T_m - T_1)$ · Warmwasser: $m_2 = m_1 (T_m - T_1)/(T_2 - T_m)$ ![Mischkreuz](mischkeuz.png)

### 6.8 Massen-/Volumenstrom und Druckverlust

- $\Phi = \dot m \cdot c \cdot \Delta T$ [kW] · $\dot m = (\Phi \cdot 3600)/(c \cdot \Delta T)$ [kg/h]
- $\dot V = A \cdot w$ · $w = \dot V / A$
- Druckverlust: $\Delta p = \Sigma (R \cdot l + Z)$; Richtwert Vordimensionierung **50 Pa/m**. ![Reibungsverlust](Reibungsverlust.jpeg)
- Längenänderung: $\Delta l = l_0 \cdot \alpha \cdot \Delta\vartheta$

Rohrmasse und max. Durchfluss:

| Gewinderohr | DN | Aussen-Ø [mm] | Max. Durchfluss [l/s] |
| --- | --- | --- | --- |
| 3/8" | 10 | 17,2 | 0,33 |
| 1/2" | 15 | 21,3 | 0,83 |
| 3/4" | 20 | 26,9 | 1,33 |
| 1" | 25 | 33,7 | 2,50 |
| 1 1/4" | 32 | 42,4 | 3,83 |
| 1 1/2" | 40 | 48,3 | 5,00 |
| 2" | 50 | 60,3 | 8,33 |
| 2 1/2" | 65 | 76,1 | 13,33 |

### 6.9 Brauchwarmwasserspeicher (BWW)

Systeme: Einzelzapfstellen, Einzel-, Zentralversorgung; Durchfluss- oder Speicher-Wassererwärmer, Magrosysteme mit Plattenwärmetauscher. **Reine Elektro-Speicherwassererwärmer sind in ganzjährig bewohnten Wohnbauten nicht mehr zulässig (EnG).**

$V_{SP} = V_B + V_V + V_{LA} + V_Z + V_{KW}$

- $V_B$ Warmwasserbedarf (Tabelle: Wohnungsgrösse/Personen/Komfort)
- $V_V$ Anlagenverlust: ≤ 200 l → 15 %; ≤ 500 l → 8 %; ≤ 1000 l → 6 %; ≥ 1000 l → 5 % von $V_B$
- $V_{LA}$ Ausstossverlust Einzelleitung: EFH 20 %, MFH 10–15 %
- $V_Z$ Mischzone: 10–20 % (Glattrohr-WT) · $V_{KW}$ Kaltwasserzone: 5–10 % (Keramikheizeinsatz)

---

## 7. Solarthermie

### 7.1 Kollektorfläche

- Überschlag: 1,5 m² pro Person; Einstrahlung 600–1000 W/m²; Neigung optimal 40–60° (Winterbetrieb), 25–35° (Sommer), meist 45° Süd.
- Kollektorfläche $A_K = (Q_{WWE} \cdot \alpha)/q$ [m²]
- Jahreswärmebedarf $Q_{WWE} = (m \cdot c \cdot \Delta T \cdot 365)/3600$ [kWh/a], $m$ = 50 l/Person·d × 1,2 (+ 20 % Verluste)
- Nutzwärmeertrag $q$: Mittelland EFH 500 / MFH 650 · Alpen EFH 650 / MFH 900 [kWh/(m²·a)]
- Deckungsgrad $\alpha$: EFH 0,45–0,65 (→ 0,55) · MFH 0,30–0,50
- Überschlag Jahresdeckung: SD = Fläche × Jahresertrag (~400 kWh/m²·a Vorwärmung) / Wärmebedarf.

### 7.2 Solarspeicher

$V_{SP} = A_K \cdot V_S + V_Z$ mit $V_Z = V_B \cdot f$

- $V_S$ Solar-Vorwärmvolumen 30–60 l/m²
- $V_B$ Bereitschaftsvolumen 50 l/Person
- $f$: Gas/Öl 0,5 × Tagesbedarf · **Wärmepumpe/Elektro 1,0 × Tagesbedarf** (gemäss Kursunterlagen; f = 0,5 gilt für WP-Speicherfaktor in der dortigen Systematik) ![ST_Puffer](ST_Puffer_approx.png)

### 7.3 Wärmetauscher

- Ab ~6 m² Kollektorfläche bzw. bei Nachrüstung: aussenliegender WT zwingend.
- $A_{WT} = (A_K \cdot \dot q_K)/(k \cdot \Delta T)$ mit $\dot q_K$ ≈ 650 W/m², $\Delta T$ VL/RL ≈ 10 K
- Energiebilanz $Q_{ab} = Q_{auf}$; c einmal für Wasser, einmal für Wasser/Glykol.

### 7.4 Solarleitung und Umwälzpumpe

- Fliessgeschwindigkeit Glykol 0,6–1,0 m/s, optimal 0,7 m/s. High-Flow: 30–40 l/(m²·h).
- Volumenstrom $\dot V = A_K \cdot V_s$ (spez. Volumenstrom gemäss Kollektortyp)
- Druckverlust: $\Delta p_{tot} = (\Delta p_{Koll} + \Delta p_{WT} + \Delta p_{Ltg}) \cdot f$, mit $\Delta p_{Ltg} = l \cdot (Pa/m) \cdot 1{,}2$ (+20 % Formstücke), Glykol-Korrektur $f$ = 1,2
- Förderhöhe [mWS] = $\Delta p_{tot}$ [Pa] / (1000 · 9,81)

### 7.5 Drücke und Expansionsgefäss

- Fülldruck = Betriebsdruck = Anlagenhöhe/10 + 0,3 bar + 0,5 bar
- Vordruck = Anlagenhöhe/10 + 0,3 bar
- Ausdehnungsvolumen $V_{ex} = V_{sys} \cdot e \cdot x$; $V_{sys} = (V_{Koll} + V_{SK}) \cdot 2$; $V_{Ltg} = r^2\pi \cdot 2l$
- Mindest-Nennvolumen: $V_n = V_{ex} \cdot (P_E + 1)/(P_E - P_V)$ mit $P_E$ = Sicherheitsventil/1,3, $P_V$ = Anlagenhöhe/10 + 0,3 ![Koeffizient](ST_ausdehnungskoeffizient.jpeg)

---

## 8. Wärmepumpen

### 8.1 Kennzahlen

- **COP** $= \dot Q_h / P_{auf}$: Verhältnis Abgabe/Aufnahme **in einem festen Betriebspunkt**. Je kleiner der Temperaturhub Quelle→Senke, desto höher der COP. *Datenblätter immer am richtigen Betriebspunkt lesen (Vorlauf-/Quellentemperatur), nicht am Peak.*
- **JAZ** $= Q_a / E_a$: abgegebene Wärme / aufgenommener Strom **über ein Jahr**, effektiv gemessen.
- Jahresstrombedarf $E_a = Q_a / JAZ$ · Umweltwärme $Q_{a,EWS} = Q_a - E_a$ · $\dot Q_h = P_{el} + \dot Q_{EWS}$

Prozess: Verdampfung ($Q_0$) + Strom ($P_{el}$) = Kondensation ($Q_C$). Hoch-/Niederdruckpressostat als Sicherheit. Natürliche Kältemittel: kleines GWP, kleines ODP, gute Thermodynamik. ![log ph](WP_log_ph.jpeg)

### 8.2 Wärmequellen

- **Wasser:** Oberflächenwasser (Fluss, See, Meer), Grund-/Quell-/Brunnen-/Tiefenwasser, Abwärme (Kühlwasser, Abwasser), Kreislaufwasser (Fernwärme, Prozesswasser)
- **Erdreich:** Erdwärmesonden, Tiefenbohrungen, Erdkollektoren
- **Luft:** Aussenluft, Fortluft, Prozess-/Personenabwärme

### 8.3 Erdsonden (EWS)

- Sondenlänge: $L_{EWS} = Q_a \cdot (1 - 1/JAZ) / q_{spez,EWS}$ oder $\dot Q_{EWS} / \dot q_{EWS/m}$
- Entzugsleistung ≈ 0,035 kW/m · Entzugsenergie ≈ 70 kWh/(m·a) · max. ~250 m
- Abstände: 7–8 m zwischen Sonden (min. 5 m). **Kanton Zürich (AWEL):** 6 m zwischen Sonden, 3 m zur Grundstücksgrenze, 2 m zu Gebäuden.
- Turbulente Strömung in den Sondenrohren anstreben, sonst sinkt die Quellentemperatur ~1,5 K.
- **Warmwasserbereitung bei der Dimensionierung nicht vergessen.**
- Grundwasser: $\dot m = \dot Q_K \cdot 3600 / (c \cdot (t_{Ein} - t_{Aus}))$ [kg/h]

### 8.4 Luft/Wasser-Bauarten

Schallarten: Luftschall, Körperschall, Strömungsgeräusche.

| Aufstellung | Vorteile | Nachteile |
| --- | --- | --- |
| Innen | kaum Schall nach aussen, kein Frostschutz nötig | Platz für Luftkanäle, Luftkurzschluss-Gefahr, baulicher Aufwand |
| Aussen | wenig Platz innen, einfache Bauöffnungen | Schall, Baubewilligung, Frostgefahr Leitungen, Leitungsverluste |
| Split | wenig Platz, günstig | Schall, Bewilligung, geringere Effizienz, mehr Kältemittel → Wartung/Dichtheit, kürzere Lebensdauer |

### 8.5 Betriebsarten

| Betriebsart | Beschreibung | Zusatz | Einsatz |
| --- | --- | --- | --- |
| Monovalent | WP deckt 100 % | – | gut gedämmte Neubauten |
| Monoenergetisch | WP + Heizstab für Spitzen | Elektroheizstab | EFH-Standard CH/DE |
| Bivalent-parallel | WP + fossil, gleichzeitig | Öl-/Gaskessel | Sanierung, hohe Heizlast |
| Bivalent-alternativ | WP bis Bivalenzpunkt, dann fossil allein | Öl-/Gaskessel | kalte Regionen, Altbau |
| Multivalent | mehrere Systeme | WP + ST + Gas | grosse Gebäude, Netze |

### 8.6 SG Ready

Zweidraht-System mit 4 Zuständen: 1) Sperrung (Sperrzeiten), 2) Normalbetrieb, 3) Einschaltempfehlung (WP-Steuerung entscheidet), 4) Anlaufbefehl mit hinterlegten Parametern. Einschaltempfehlung: WP hat das letzte Wort (kein Zwang bei vollem Speicher), aber ohne Prognoseplanung.

### 8.7 Dimensionierung aus Verbrauch (Sanierung)

$\dot Q_H$ = Verbrauch [l Öl] / Divisor → Heizleistungsbedarf bei Auslegetemperatur [kW]:

| Lage | mit WW (ganzjährig Kessel) | ohne WW (elektrisch) |
| --- | --- | --- |
| Mittelland | / 300 | / 265 |
| > 800 m ü. M. | / 330 | / 295 |

Alternativ über Volllaststunden: $\Phi_{HL} = (Verbrauch \cdot H_s \cdot \eta)/t_{voll}$ ![Volllaststunden](Vollaststunden.png)

Kontrolle spezifische Heizleistung $\Phi_{HL} = KW \cdot EBF$:

| Gebäudetyp | W/m² |
| --- | --- |
| Herkömmlich gedämmte Wohnhäuser | 50–70 |
| Gut gedämmte bestehende Wohnhäuser | 40–50 |
| Neubauten nach heutigen Vorschriften | 30–40 |
| Herkömmliche Dienstleistungsbauten | 60–80 |

Neubau: SIA 384.201 bzw. Ableitung aus SIA 380/1 plus Zuschläge. Rechner: https://biber.solar/heat-pump-calculator/

### 8.8 Jährlicher Energiebedarf (HGT-Methode)

Energiebedarf [kWh] = (Heizlast / 28) · 16 · HGT

- 28 K: Differenz Auslegung −8 °C ↔ Raum 20 °C · 16 h: tägliche Betriebsdauer · HGT: Heizgradtage des Standorts
- Neubau: Heizlast = Fläche × W/m²; plus ~250 W/Person Warmwasser.

Beispiel EFH 140 m², Zürich, 4 Personen: Heizlast 140 × 35 = 4,9 kW; WW 4 × 250 W = 1 kW; HGT Zürich ≈ 3267 → Energiebedarf ≈ ((4,9+1)/28) · 16 · 3267 ≈ **11'000–12'000 kWh/a**.

Elektrische Aufnahme: $P_{el} = \dot Q_{WP} / COP$ (EW-Sperrzeiten beachten).

---

## 9. Energie, Netz und Klima (Schweiz)

### 9.1 Energieformen

Chemisch, kinetisch, elektrisch, thermisch, Strahlung, potentiell, Rotation, Kernenergie. Es gilt die Energieerhaltung. Bsp. Kohlekraftwerk: chemisch → thermisch → kinetisch → elektrisch.

### 9.2 Stromverbrauch Haushalte

Durchschnitt CH ohne WP/E-Auto ≈ 5000 kWh/a. 2 Personen: MFH 2750 / EFH 3550 kWh/a · 1 Person: 2200 / 2700 · 4 Personen: 3850 / 5200. Gesamtverbrauch CH ≈ 65 TWh/a, Erzeugung ≈ 67 TWh/a (überwiegend Wasserkraft und Kernkraft; neue Erneuerbare wachsend, PV 2022 EE ohne Wasserkraft ≈ 7,7 TWh).

### 9.3 Netzebenen

| Ebene | Kraftwerke | Verbraucher | Spannung |
| --- | --- | --- | --- |
| 1 Übertragungsnetz | Pumpspeicher, Kern-, Wasserkraft | Schwerindustrie, SBB | 220/380 kV |
| 3 Überregionale Verteilnetze | Wasserkraft | Industrie | 36–220 kV |
| 5 Regionale Verteilnetze | Thermisch | Dienstleistungsbauten | 1–36 kV |
| 7 Lokale Verteilnetze | Wind, PV, Biogas | Büro, Wohnen | 400/230 V |

(Ebenen 2, 4, 6 = Transformierung)

### 9.4 Vor- und Nachteile erneuerbarer Energien

- **PV:** + einfache Installation, günstig (~0,13 CHF/Wp Module), emissionsfreier Betrieb · − nur tagsüber, begrenzter Wirkungsgrad, Lieferabhängigkeit China.
- **Solarthermie:** + hoher Kollektorwirkungsgrad (~60 % bei ΔT 40 K), gut speicherbar · − aufwendigere Installation, nur Wärme.
- **Wind:** + produziert auch nachts, hohe Leistung · − Akzeptanz, Landschaftsbild.
- **Wasser:** + schwarzstartfähig, speicherbar, steuerbar · − Eingriff ins Ökosystem.
- **Biomasse:** + Abfallverwertung, grundlastfähig · − Investitionen, komplexe Technik, Dichtheit (Klimagase).

### 9.5 Sonne

Kernfusion H → He, $E = mc^2$, $c = 2{,}998 \cdot 10^8$ m/s. Abstrahlung ~15,8 MW/m² an der Sonnenoberfläche (bezogene Notiz), Abstand 150 Mio. km, **Solarkonstante 1367 W/m²**, STC-Referenz 1000 W/m².

### 9.6 Treibhauseffekt und Klimapolitik

- CO2: 2024 ≈ 427 ppm (vorindustriell ~280 ppm, +>50 %). Globale Erwärmung ≈ +1,2–1,3 °C; einzelne Monate 2024 > +1,5 °C. Schweiz ≈ +2,8 °C. Natürlicher Treibhauseffekt: +33 K (−18 °C → +15 °C).
- CH-Emissionen inkl. Importe ≈ 13 t CO2eq/Kopf; Inland 2022 −24 % ggü. 1990. Anteile: 33 % Verkehr, 23 % Gebäude, 23 % Industrie, 21 % Landwirtschaft/Abfall/synth. Gase.
- Konsequenzen: Extremwetter, Meeresspiegel, Artensterben, Gesundheitsrisiken, Migration. Kipppunkte: irreversibel, positive Rückkopplung (Arktis-Albedo, Permafrost).
- **Paris 2015:** deutlich unter 2 °C, besser 1,5 °C; Unterstützung ärmerer Länder; keine Sanktionen.
- **Energiestrategie 2050:** Effizienz, Ausbau EE, Netto-Null 2050 (2030: −50 % ggü. 1990), Atomausstieg, Netzzuschlag 2,3 Rp., Gebäudeprogramm, CO2-Abgabe (1/3 Bevölkerung, 1/3 Wirtschaft/AHV, 1/3 Gebäudeprogramm).
- **Energiegesetz (Abstimmung 9.6.2024):** EE-Ziele 35 TWh bis 2035, 45 TWh bis 2050; Solarpflicht ab 300 m² Gebäudefläche; **LEG** (gleiches Netzgebiet, gleiche Netzebene, örtliche Nähe, Mindestleistung ~20 % der Anschlussleistung, Smart Meter). Verbrauchsziel: −43 % pro Kopf bis 2035, −53 % bis 2050 (Basis 2000).

---

## 10. Vorschriften, Normen, Förderung (Schweiz)

### 10.1 Hierarchie

- **Vorschriften/Gesetze** sind einzuhalten: EnG, kantonale Vorschriften (MuKEn der EnDK: Eigenstromanteil Neubau, min. 10 % EE nach Heizungsersatz, GEAK, U-Grenzwerte).
- **Verordnungen** sind einzuhalten: NIV (SR 734.27), Starkstromverordnung (734.2), NEV (734.26), LeV (734.31), VEMV (734.5).
- **Normen** = Regeln der Technik: NIN 2020 / NIN-Compact (electrosuisse), IEC, CENELEC, SIA.
- **Standards** freiwillig: Minergie (< Minergie-P < Minergie-A), GEAK (A–G, GEAK Plus mit Beratungsbericht).

### 10.2 NIV und Nachweise

- NIV regelt Arbeiten an und Kontrolle von NS-Installationen; Bewilligungen: **Art. 7** (natürliche Personen), **Art. 9** (Betriebe), **Art. 14** (eingeschränkte Bewilligung, u. a. PV bis zum AC-Schalter des WR); Prüfung durch **ESTI**.
- **Erstprüfung** vor Inbetriebnahme: Sichtprüfung, Messungen, Funktionskontrollen (NIN Teil 6).
- **SiNa** bei Neu-/Erweiterung und periodisch (Anhang NIV); Inhalte: Adressen, Anlagebeschrieb, Kontrollperiode, Installateur, Schlusskontrolle, Kontrollbewilligung; Unterschriften.

### 10.3 Förderung

- **Pronovo:** Herkunftsnachweise, EIV (KLEIV < 100 kW, GREIV > 100 kW wahlweise EVS).
- Gebäudeprogramm (kantonal, dasgebaeudeprogramm.ch), Gemeindeförderungen: energiefranken.ch.
- Montagearten für Förderung: freistehend, angebaut, integriert.
- ZEV: hinter dem HAK, geeichte Zähler (METAS; Eichgültigkeit elektronisch 10 J., elektromechanisch 15 J.). vZEV: gleiche Netzebene 7. EVG: mit EW-Infrastruktur.

---

## 11. Abkürzungen

AC Wechselstrom · DC Gleichstrom · EIV Einmalvergütung · EnFV Energieförderverordnung · EnG Energiegesetz · EnV Energieverordnung · ESTI Eidg. Starkstrominspektorat · EVU Energieversorgungsunternehmen · GAK Generatoranschlusskasten · GEAK Gebäudeenergieausweis der Kantone · HAK Hausanschlusskasten · HV/UV Haupt-/Unterverteilung · IEC International Electrotechnical Commission · KLEIV/GREIV Einmalvergütung klein/gross · LEG Lokale Elektrizitätsgemeinschaft · MPP Maximum Power Point · NA-Schutz Netz- und Anlagenschutz · NIN Niederspannungs-Installationsnorm · NIV Niederspannungs-Installationsverordnung · NOCT Normal Operating Cell Temperature · Pronovo Vollzugsstelle Förderprogramme/HKN · PSAgA Persönliche Schutzausrüstung gegen Absturz · PV Photovoltaik · RCD/FI Fehlerstromschutzschalter · RE Rundsteuerempfänger · SENS eRecycling · SIA Schweiz. Ingenieur- und Architektenverein · SiNa Sicherheitsnachweis · SPD Surge Protective Device · STC Standard Test Conditions · TAG Technisches Anschlussgesuch · VKF Vereinigung Kantonaler Feuerversicherungen · VNB Verteilnetzbetreiber · ZEV/vZEV Zusammenschluss zum Eigenverbrauch (virtuell)

Historie der Nachhaltigkeit: Hans Carl von Carlowitz (Begründer), Gro Harlem Brundtland (moderne Definition).

---

## 12. Links

- https://www.uvek-gis.admin.ch/BFE/sonnendach/ · https://www.geoportal.ch/ · https://solargis.com/resources/free-maps-and-gis-data · https://everywhere.solar/
- Dimensionierung WP (BFE): https://pubdb.bfe.admin.ch/de/publication/download/165
- Heizgradtage: https://opendata.swiss (HGT Schweiz) · https://www.hev-schweiz.ch (HGT Ortschaften)
- Gaswerte: https://www.svgw.ch/media/9858/g10001_d_werte2022.pdf
- Förderung: https://pronovo.ch · https://www.energiefranken.ch · https://portal.dasgebaeudeprogramm.ch · https://www.geak.ch
- Kontakt: patrick@biber.solar · https://biber.solar
