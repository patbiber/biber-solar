# Solar Installer & Building Technology Knowledge ☀️ 👷

**PV, solar thermal, heat pumps and energy demand in building services**
Planning reference for Switzerland (Canton Zurich) · eConnect · Patrick Biber, Solarteur STFW

> Note: referenced images (`![...]`) live in the same repository. Swiss norms (NIN/NIV, SIA) apply; adapt to local codes elsewhere.

---

## 1. Occupational safety

### 1.1 The 5 safety rules (SUVA 84042.d)

For de-energised work on electrical installations, always apply:

1. **Disconnect** – isolate all parts of the installation (switch off MCBs, remove fuses, operate the all-pole main switch).
2. **Secure against reconnection** – lock switching devices, take fuse inserts with you, fit prohibition signs.
3. **Verify absence of voltage** – by a qualified person, with a two-pole voltage tester.
4. **Earth and short-circuit** – earth first, then connect (visible from the workplace). Not required below 1000 V (exception: overhead lines).
5. **Cover or barrier adjacent live parts** – < 1000 V: insulating cloths, hoses, mouldings; > 1000 V: additionally barriers, ropes, warning signs. PPE: helmet with face shield, close-fitting clothing, gloves.

### 1.2 Effect of electric current on the human body

| Current | Effect |
| --- | --- |
| 0.005 mA | Perceptible with the tongue |
| 1 mA | Threshold of perception: tingling |
| 15 mA | Cramp threshold: let-go limit, muscle cramps |
| 50 mA | Danger threshold: respiratory cramps, ventricular fibrillation |
| 80 mA | Lethal threshold |

Protection goals: small touch current, small touch voltage, short duration of the dangerous state.

Hazards: current through the body, arc flash, molten material, fire, secondary accidents (falls from ladders/scaffolding).

### 1.3 Fall protection

- **Collective protection before personal protection** (guardrails before harnesses).
- Fall protection required from **2 m** to the roof edge; scaffolding from 2 m height and jobs over 2 man-days.
- Jobs < 2 man-days: ladder up to 3 m, above that personal fall-arrest equipment (PFPE) or scaffolding.
- **PFPE:** full-body harness (EN 361), lanyard with energy absorber (EN 355), fall arrester, anchor devices, connectors (EN 362), system EN 363, helmet with chin strap.
- Permitted only where collective protection is impossible, users are trained, equipment is inspected, and a **rescue plan** exists.
- Legal basis (CH): ArG, VUV (Art. 3 and 11), EKAS directive 6512, EN standards.

### 1.4 Prevention: the STOP principle

**S**ubstitution → **T**echnical measures → **O**rganisational measures → **P**ersonal measures.

Every day of absence costs a company CHF 600–1000. Legal basis: UVG (accident insurance, occupational safety), ArG (working/rest hours, health protection), PrSG (product safety). **EKAS** coordinates; enforcement bodies are the cantons and Suva, plus SECO and specialist organisations.

---

## 2. Physics fundamentals

### 2.1 Units and conversions

- 1 Ws = 1 J · 1 kWh = 3,600,000 J = 3600 kJ = 3.6 MJ
- kWh = MJ / 3.6
- 1 cal = 4.187 J · 1 hp (metric) = 735 W
- 1 kg oil equivalent = 41.868 MJ = 10,000 kcal = 11.63 kWh
- 1 kg coal equivalent = 0.7 kg OE = 29.3 MJ = 8.14 kWh
- 100 Pa = 1 mbar · 10,000 Pa = 0.1 bar · 10 m water column = 1 bar

### 2.2 Kinematics and force

- Acceleration $a = (v_{end} - v_{start}) / t$ [m/s²] · gravity $g$ = 9.81 m/s²
- $v = s/t$ · $t = s/v$
- Force $F = m \cdot a$ [N]
- Mass $m = V \cdot \rho = Q / (c \cdot \Delta T \cdot \eta)$ [kg]

### 2.3 Work and power

- Power $P = W / t = F \cdot v$ [W]
- Work $W = P \cdot t$ [J, Ws, Nm, kWh]
- Mechanical work $W = F \cdot s = m \cdot g \cdot h$
- Electrical work $W = U \cdot I \cdot t \cdot \cos\varphi$ (in practice: kWh)
- Cost = $W \cdot$ tariff

### 2.4 Electrical power

- DC / resistive load: $P = U \cdot I = U^2 / R = I^2 \cdot R$
- Single-phase AC: $P = U \cdot I \cdot \cos\varphi$
- Three-phase: $P = \sqrt{3} \cdot U \cdot I \cdot \cos\varphi$
- Power factor $\cos\varphi = P / S$ · DC: $\cos\varphi = 1$

### 2.5 Efficiency

$\eta = benefit / effort = P_{out}/P_{in} = W_{out}/W_{in} = \eta_1 \cdot \eta_2 \cdot \dots \cdot \eta_n$

Example: 0.92 · 0.93 · 0.80 = 0.684 → 68 %. Efficiency = 1 − losses.

Energy chain: **primary energy** (raw resource) → **secondary energy** (diesel, electricity) → **final energy** (at the socket / at the door) → **useful energy** (energy at the wheel, heat of a hair dryer).

### 2.6 Areas

- Triangle: $A = (l \cdot h)/2$
- Circle: $A = (d^2 \cdot \pi)/4 = r^2 \cdot \pi$ · $r = \sqrt{A/\pi}$ · $d = 2r$

---

## 3. Electrical engineering

### 3.1 Current types

🔋 Direct current DC (−) · 🔌 Alternating current AC (~)

### 3.2 Ohm's law

- Voltage $U = R \cdot I = P/I = \sqrt{P \cdot R}$ [V]
- Current $I = U/R = P/U = \sqrt{P/R}$ [A]
- Resistance $R = U/I = P/I^2 = U^2/P = (\rho \cdot l)/A$ [Ω]
- Conductance $G = 1/R$ [S]

### 3.3 Conductor sizing and voltage drop

- Conductor length $l$ = 2 × cable route length (out and back)
- $\rho_{Cu} = 0.0175\ \Omega\,mm^2/m$ · conductivity $\gamma = 1/\rho$
- Cross-section $A = r^2 \cdot \pi$ [mm²]
- Voltage drop $\Delta U = 2 \cdot (\rho \cdot l \cdot I)/A$ [V]
- **NIN: max. 4 % between service entrance and load** (9.2 V at 230 V)
- Line loss $P_v = I^2 \cdot R_L$

### 3.4 Current-carrying capacity (guide values)

| Current [A] | Cross-section [mm²] |
| --- | --- |
| 16 | 1.5 / 2.5 |
| 20 | 4 |
| 25 | 6 |
| 32 | 8 |
| 40 | 10 |
| 63 | 16 |
| 80 | 25 |
| 100 | 35 |
| 160 | 70 |
| 200 | 95 |

Practical cable ratings: 2.5 mm² → 16 A · 4 mm² → 20 A · 6 mm² → 25 A · 10 mm² → 40 A. Earthing: 10 mm² without lightning protection, otherwise 16 mm². Installation methods (ampacity): A1 in conduit inside insulated wall < B1 in conduit on wooden wall < F free in air.

Example connection capacity: 40 A × 230 V × 3 phases = 27.6 kVA → max. ~27.6 kWp of PV at the connection.

### 3.5 Series and parallel circuits

Series: $I_{tot} = I_1 = I_2$ · $U_{tot} = U_1 + U_2$ · $R_{tot} = R_1 + R_2$
Parallel: $I_{tot} = I_1 + I_2$ · $U_{tot} = U_1 = U_2$ · $1/R_{tot} = 1/R_1 + 1/R_2$

### 3.6 Three-phase systems

- **Star (wye):** $I = I_p$, $U = \sqrt{3} \cdot U_p$ (230 V → 400 V)
- **Delta:** $U = U_p$, $I = \sqrt{3} \cdot I_p$
- Grid: 1×230 V / 3×400 V, 50 Hz

### 3.7 Protective measures (NIN)

- **Basic protection:** max. touch voltage AC 50 V (25 V for toys, labs etc.), DC 120 V (60 V). Cover/insulate live parts.
- **Fault protection:** SELV (no connection to protective earth, ≤ 50 V AC / ≤ 120 V DC), PELV (safe separation point to PE), FELV (no safe separation, output side bonded to PE).
- **1 Overload protection:** thermal trip (bimetal) → fuses, MCB, thermal relay.
- **2 Short-circuit protection:** electromagnetic trip → fuses, MCB, circuit breaker.
- **3 Residual-current protection:** RCD, summation current measurement. Personal protection 30 mA (10 mA), property protection 300 mA.
- **4 Arc-fault protection:** AFDD in critical environments.
- **5 Selectivity:** only the protective device immediately upstream of the fault trips.

Protection classes and IP ratings: see ![Schutzklasse](Schutzklasse.png), ![IP ratings](IP_Schutzarten.png).

### 3.8 Protective devices

- **Fuse:** designed weak point melts through current heat; quartz sand quenches the arc.
- **Miniature circuit breaker (MCB):** thermal (overload) + magnetic (short circuit), resettable.
  - Type B: 3–5 × I_N (heating, cooker, boiler)
  - Type C: 5–10 × I_N (motors, high inrush)
  - Type D: 10–20 × I_N (heavy starting)
  - Energy limiting class 3 = best short-circuit current limitation.
- **RCD:** compares currents in L1, L2, L3, N; trips when the difference exceeds the rated residual current.
- **AFDD:** microprocessor detects arc signatures.

### 3.9 Fuse colour code (Diazed)

2 A pink · 4 A brown · 6 A green · 10 A red · 13 A black · 16 A grey · 20 A blue · 25 A yellow · 32 A violet · 35/40 A black · 50 A white · 63 A copper · 80 A silver · 100 A red

---

## 4. Photovoltaics

### 4.1 The solar cell

Crystalline Si cell: two differently doped layers. Light-facing **n-layer** (phosphorus, 5 valence electrons → free electrons), underneath the **p-layer** (boron, 3 valence electrons → holes). An electric field at the junction separates the charges released by sunlight. Rear: full-area contact (Al/Ag paste); front: contact grid + anti-reflective coating (silicon nitride / titanium dioxide).

Typical cell: $U_{OC}$ ≈ 0.60–0.70 V, $I_{SC}$ ≈ 10–11 A (DC).

Cell types: crystalline (mono/poly, ~200 µm wafers), thin film, nano-structured.

**Rule of thumb: current is driven by irradiance, voltage by temperature.** ![IUP curve](IUP_Kurve.png)

### 4.2 Test conditions

- **STC:** 25 °C cell, 1000 W/m², AM 1.5
- **NOCT:** 20 °C ambient, ~45 °C cell, 800 W/m², AM 1.5, 1 m/s wind

### 4.3 Irradiation and orientation

- Global horizontal irradiation Swiss Plateau ≈ **1100 kWh/m²·a**; instantaneous up to 1000 W/m² (high Alps up to 1500 W/m²). At AM 1.5 max. ~835 W/m² direct, the rest diffuse.
- Yield-optimised: south, ~15–35° tilt (optimum in CH ≈ 35° south).
- Self-consumption-optimised: east–west, 10–20°.
- Row spacing (flat roof, no mutual shading on 21 Dec, sun altitude ~19°):
  $R = (\sin\alpha / \tan\beta + \cos\alpha) \cdot L$ — rule of thumb: spacing ≈ 3 × module edge height. ![Row spacing](Reihenabstand.png)
- Maps: sonnendach.ch, solargis.com, everywhere.solar

### 4.4 Half-cell modules and shading

Half-cell module: 3 bypass diodes, each cell double-string connected in parallel top/bottom. If the lower half is shaded, the upper strings keep working → 50 % power (a full-cell module would collapse). In a module string: if < 50 % of the modules are shaded (e.g. lower half), the unshaded modules define the string power; the shaded ones are bypassed. ![Shading](verschattung_und_verschaltung_Halbzellen.jpg)

### 4.5 Inverter types

| Type | Use | Characteristics |
| --- | --- | --- |
| Micro inverter | very small systems (balcony) | single-phase (max. 3.6 kVA asymmetry), MPP per module, expensive |
| String inverter | small systems | 1 MPP tracker, 1- or 3-phase |
| Multi-string inverter | medium–large | several MPP trackers, ideal for east/west, most common today |
| String inverter + optimisers | small–large | MPP at module level, ideal for shading, more electronics/service |
| Central inverter | utility scale | several trackers, DC combiner boxes, often MV feed-in via transformer |

### 4.6 Inverter design (per NIN 2020)

Criteria: $I_{SC}$, $U_{OC}$, $P_{MPP}$, $I_{MPP}$, $U_{MPP}$, fill factor, η, cos φ, number of MPP trackers, grid 230/400 V 50 Hz, site altitude. One MPP tracker per orientation only. **Manufacturer data sheets are binding.**

Design steps:

1. Check **maximum DC power**.
2. **Maximum open-circuit voltage** — must never exceed the inverter's maximum input voltage:
   - Variant 1 (temperature coefficient, typically $kT_{UOC} ≈ −0.32\ \%/K$):
     $UOC_{max} = UOC_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
   - Variant 2 (NIN correction factor): $UOC_{max} = UOC_{STC} \cdot kT_{NIN} \cdot n$
   - $T_{min}$ per NIN 2020: < 800 m a.s.l. and tilt < 15°: **0 °C**; < 800 m and > 15°: **−5 °C**; 800–1500 m: **−15 °C**; > 1500 m: **−25 °C**
   - $kT_{NIN}$: < 800 m: **1.15**; 800–1500 m: **1.20**; > 1500 m: **1.25**
3. Check the **minimum input (start-up) voltage**.
4. **Minimum MPP voltage:** $UMPP_{min} = UMPP_{STC} \cdot (1 + (75 - 25) \cdot kT_{UOC}/100) \cdot n$ (T_max = 75 °C)
5. **Maximum MPP voltage:** $UMPP_{max} = UMPP_{STC} \cdot (1 + (T_{min} - 25) \cdot kT_{UOC}/100) \cdot n$
6. **Maximum short-circuit current:** $I_{SCmax} = I_{SC,STC} \cdot 1.25$ (temperature correction with $kT_{ISC} ≈ +0.03\ \%/K$ is usually negligible)

Minimum number of modules: $n = U_{min} / U_{MPP,module}$ · maximum operating current: $I_{DCmax} = I_{DC,module} \cdot 1.25$

**MPP window:** string voltage too low (long cables, high temperature, short strings) → the inverter cannot track the MPP. Too high (low temperature, long strings) → overvoltage risk, must be avoided at all costs. Current/power too high (too many parallel strings, over-sizing) → curtailment. ![MPP window](MPP_Bereich.png)

### 4.7 String fuses

- $I_{max} = I_{SC,module} \cdot 1.25$ must be lower than the maximum reverse current $I_{rev} = I_{SC,module} \cdot 1.25 \cdot (n-1)$
- Fuse rating: $1.5 \cdot I_{SC} < I_N < 2.4 \cdot I_{SC}$
- Voltage rating: $U_{fuse} > 1.2 \cdot UOC_{string}$
- Required as soon as $I_{rev}$ exceeds the modules' reverse-current withstand (several parallel strings). A single module tolerates permanent short circuit.

### 4.8 Generator junction box (GAK)

1. Surge protection · 2. DC main switch · 3. String monitoring · 4. String fuses/diodes ![GAK](GAK.png)

System schematics: ![Off-grid](Inselschema.png) ![Grid-tied](Netzgekoppelt.png) ![Schematic](Schema_PV.png)

### 4.9 Lightning and surge protection

- LPS based on the Faraday cage principle; equipotential bonding raises the building potential → no destructive equalising currents. Connect to the central earthing point → building earth electrode.
- Earth conductor 16 mm² (wire/strand), 10 mm² without LPS. Existing LPS: connect the PV via the shortest route, never across the roof avalanche path. Never run down conductors parallel to the eaves; fix every 1 m. Objects > 2 m² must be bonded.
- Mind galvanic corrosion (electrochemical series): **use a stainless-steel clamp as a neutraliser.** ![Corrosion](Kontaktkorrosion_Mat_Blitzschutz.png)

| LPS class | Mesh size | Rolling sphere radius | Down-conductor spacing | Buildings |
| --- | --- | --- | --- | --- |
| 1 | 5×5 m | 20 m | 10 m | data centres, explosive atmospheres |
| 2 | 10×10 m | 30 m | 10 m | > 300 people, tall buildings, hospitals, museums |
| 3 | 15×15 m | 45 m | 20 m | hotels, large buildings with workshops/dust |

**SPD types** (installed at the service entrance HAK (AC) / GAK (DC), max. 30 m from building entry, bonded to earth):

- Type 1: lightning protection, Cu 16 mm², $U_{res}$ ≈ 4 kV (if LPS present)
- Type 2: equipment protection, Cu 10 mm², $U_{res}$ ≈ 2.5 kV (no LPS)
- Type 3: fine protection, $U_{res}$ ≈ 1.5 kV (servers etc.)

Separate protected and unprotected DC lines physically (at least a divider in the cable duct). Surge sources: lightning, industrial surges, ESD, NEMP.

### 4.10 Battery storage

Key figures: energy content/density, power output, SOC, BMS, self-consumption optimisation. Mostly lithium-ion.

- **NMC:** 150–220 Wh/kg, e-mobility, thermally less stable, cobalt is costly and ethically problematic.
- **LFP (LiFePO4):** 90–120 Wh/kg, very stable, hard to ignite, cheaper, no critical raw materials (Huawei, Sonnen, BYD).

Practice: maximum charging power is only reached if the battery's nominal voltage is high enough (e.g. Fronius Symo GEN24 plus, 22 A battery input).

### 4.11 Optimisation and monitoring

Match consumption to production, switch loads intelligently, store energy (battery, uni-/bidirectional charging), share production among several parties (**ZEV, vZEV, LEG** in Switzerland). Components: load management (SolarLog, Loxone, Solarmanager, SMA, Fronius Ohmpilot), metering at the point of connection.

### 4.12 PV permitting workflow (Switzerland)

1. Building permit / notification
2. **TAG** – grid connection request (changes > 3.7 kW)
3. **IA** – installation notification (before completion, NIV Art. 7 or 9)
4. Meter ordering (if no smart meter)
5. **MPP** – measurement and test report after installation (basis for SiNa)
6. **SiNa** – safety certificate (on completion, periodically, on changes)
7. External acceptance inspection (certification of MPP/SiNa)
8. **Pronovo:** apply for guarantee of origin and one-off remuneration (EIV)

### 4.13 Maintenance and end of life

- **Inspection:** inverter errors/updates, SPD after thunderstorms, visual check (mounting, modules, roofing, terminations), yield check; optionally thermography, string measurement.
- **Maintenance:** required repairs.
- **Improvement:** module cleaning, remove shading sources, retrofit snow guards.
- **Fire brigade labelling:** switch off AC load first (inverter shuts down), then DC; DC generators remain live during daytime.
- **Recycling:** SENS eRecycling with advance recycling fees; modules contain no relevant pollutants.

---

## 5. Roofs

### 5.1 Roof shapes and planning

Gable, mono-pitch, hip, half-hip, mansard, tent, cone, onion, shed, flat, dome, barrel roofs. Terms: dormer, eaves, ridge, verge, hip. ![Roof parts](Dachteile.png)

PV planning: on-site roof survey · age/condition/remaining life · layer build-up (sub-roof, nail sealing tape, probing) · **structural check by a licensed engineer, written confirmation.** Snow guards mandatory where the area below is publicly accessible (owner is liable).

### 5.2 Roof build-up (outside → inside)

1. **Covering/battens:** UV-resistant, non-combustible, tight against free-flowing water. Tiles (ZH often 215 mm wide), fibre cement (asbestos until 1992!), metal (standing seam, batten, trapezoidal, sandwich, Kalzip), solar (in-roof).
2. **Counter battens / ventilation** (SIA 232/1): local reduction max. 50 % of the cross-section; for in-roof PV counter battens min. 60 mm or one step higher; ventilation grilles reduce up to 50 %. On membrane sub-roofs fixing must be sealed with nail bands/nail seals. Screw embedment: 8 × diameter. ![Counter battens](Konterlattung.png)
3. **Sub-roof** (mandatory for insulated/occupied roofs, SIA 232): rainproof and vapour-open; "3 months freely weatherable".
   - **Normal exposure** (≥ 20°): tight against free-flowing water; boards or overlapped membranes; nail seals recommended.
   - **Increased exposure** (≥ 18°): tight with standing water up to 50 mm; overlaps glued/taped; upstands ≥ 50 mm.
   - **Extraordinary exposure** (≥ 15°): tight with standing water > 50 mm and water pressure; membranes hot-air or solvent welded.
4. **Thermal insulation:** U < 0.2 W/m²K, new builds 0.17 W/m²K → 140–240 mm depending on λ (mineral wool, wood fibre, PUR, cellulose).
5. **Vapour barrier:** on the warm side, acts as airtight layer; penetrations (e.g. solar pipes) must be sealed airtight, cavities filled; key figure SD [m].
6. Timber boarding, 7. rafters.

### 5.3 Pitched-roof geometry

- Distance from ridge (so the array does not protrude): $distance = height_{structure} / \tan(pitch)$
- $l_{roof} = l_{plan} / \cos\Theta$ · $l_{plan} = l_{roof} \cdot \cos\Theta$

### 5.4 Flat roofs

Protect the roof membrane (protection fleece). Green roofs: better retention, more maintenance; ballast frames ≥ 50 cm high; gravel is better than substrate under the array. Minimum drainage slope 1.5 %. Typical build-up: gravel – waterproofing – insulation – vapour barrier – concrete. Waterproofing: PYE, TPO, PVC, EPDM, liquid plastics.

### 5.5 Facades and mounting

Facade: brackets at 45–75° improve yield vs. 90°, only with canopy function. Mounting: clamp systems (single/cross-rail, quarter clamping), insert systems, in-roof (shingled, draining into a channel or with flashing; mind rear ventilation). Penetrations: conduits must be sealed (convection/condensation).

Thermal expansion: aluminium 2.4 · steel 1.2 · copper 1.7 · glass 0.5 · GRP 5–15 mm/(m·100 K).

---

## 6. Heat and hydraulics

### 6.1 Heat quantity and output

- Heat $Q = m \cdot c \cdot \Delta\theta = s \cdot m = r \cdot m$ [kJ]
- $m = Q/(c \cdot \Delta\theta)$ · $\Delta\theta = Q/(m \cdot c)$ · $c = Q/(m \cdot \Delta\theta)$
- Heat output $\Phi = Q/t$ [kW] · 1 kW = 1 kJ/s = 3600 kJ/h
- Specific heat capacity: water 4.187 · ice 2.09 · steam 1.872 [kJ/(kg·K)]
- Enthalpy of fusion of water $s$ ≈ 334 kJ/kg · enthalpy of vaporisation $r$ ≈ 2256 kJ/kg

### 6.2 Net and gross calorific value

- $Q = m \cdot H_i$ · gross value $H_s = H_i + Q_{condensate}$
- Extra-light heating oil: 42.9 MJ/kg · natural gas: ~37 MJ/m³ ≈ 10.3 kWh/m³
- 1 kg oil ≈ 1.19 l · 1 m³ gas ≈ 0.93 l oil
- NOx damages the ozone layer (reduced by flue-gas recirculation); CO2 drives the greenhouse effect. ![Calorific values](Brennwert.png)

### 6.3 Heat transmission

- $\dot Q = U \cdot A \cdot (T_i - T_e)$
- $U = 1/(1/h_i + d_1/\lambda_1 + \dots + d_n/\lambda_n + 1/h_e)$ [W/m²K]
- $R_{si} = 0.125$ m²K/W · $R_{se} = 0.04$ m²K/W · components in the ground: $R_{se} = 0$
- Room heat load: $\dot Q = \dot Q_{TR} + \dot Q_{LR} - \dot Q_{IR}$ (transmission + ventilation − internal gains)
- λ values: see [LambdaWerteWaremedurchgangswerte.pdf](LambdaWerteWaremedurchgangswerte.pdf)

### 6.4 Heating water quality

pH 8.3–9.5 (with aluminium < 8.5) · hardness < 0.1 mol/m³ (< 1 °fH, < 0.56 °dH) · no free gases.

### 6.5 Expansion and expansion vessel (heating)

- $\Delta V = m \cdot (v_2 - v_1)$ [dm³]; density anomaly: water is densest at 4 °C (1 kg/dm³). ![Water expansion](AusdehnungWasser.png)
- Pre-charge pressure $p_v$ [bar] = static height/10 + 0.3
- Nominal volume: $V_N = V_A \cdot f \cdot x$ ($V_A$ system content, $f$ thermal expansion factor, $x$ surcharge factor). ![Factor](Thermische_Ausdehnungsfaktor.png)

### 6.6 Heating curve and heating limit

- Slope $S = \Delta T_{flow} / \Delta T_{outdoor}$
- Heating limit: +15 °C (poor insulation), +12 °C (good insulation)

### 6.7 Mixing law

- $Q_{tot} = Q_1 + Q_2$
- $T_m = (m_1 c_1 T_1 + m_2 c_2 T_2)/(m_1 c_1 + m_2 c_2)$
- Cold water: $m_1 = m_2 (T_2 - T_m)/(T_m - T_1)$ · hot water: $m_2 = m_1 (T_m - T_1)/(T_2 - T_m)$ ![Mixing cross](mischkeuz.png)

### 6.8 Mass/volume flow and pressure drop

- $\Phi = \dot m \cdot c \cdot \Delta T$ [kW] · $\dot m = (\Phi \cdot 3600)/(c \cdot \Delta T)$ [kg/h]
- $\dot V = A \cdot w$ · $w = \dot V / A$
- Pressure drop: $\Delta p = \Sigma (R \cdot l + Z)$; pre-sizing guide value **50 Pa/m**. ![Friction loss](Reibungsverlust.jpeg)
- Linear expansion: $\Delta l = l_0 \cdot \alpha \cdot \Delta\vartheta$

Pipe dimensions and maximum flow:

| Threaded pipe | DN | Outer Ø [mm] | Max. flow [l/s] |
| --- | --- | --- | --- |
| 3/8" | 10 | 17.2 | 0.33 |
| 1/2" | 15 | 21.3 | 0.83 |
| 3/4" | 20 | 26.9 | 1.33 |
| 1" | 25 | 33.7 | 2.50 |
| 1 1/4" | 32 | 42.4 | 3.83 |
| 1 1/2" | 40 | 48.3 | 5.00 |
| 2" | 50 | 60.3 | 8.33 |
| 2 1/2" | 65 | 76.1 | 13.33 |

### 6.9 Domestic hot water storage

Systems: single tap points, individual or central supply; instantaneous or storage water heaters, plate-heat-exchanger systems. **Purely electric storage water heaters are no longer permitted in year-round occupied residential buildings (Swiss Energy Act).**

$V_{SP} = V_B + V_V + V_{LA} + V_Z + V_{KW}$

- $V_B$ hot water demand (table: dwelling size/persons/comfort level)
- $V_V$ system losses: ≤ 200 l → 15 %; ≤ 500 l → 8 %; ≤ 1000 l → 6 %; ≥ 1000 l → 5 % of $V_B$
- $V_{LA}$ draw-off loss of single pipes: single-family 20 %, multi-family 10–15 %
- $V_Z$ mixing zone: 10–20 % · $V_{KW}$ cold-water zone: 5–10 %

---

## 7. Solar thermal

### 7.1 Collector area

- Rule of thumb: 1.5 m² per person; irradiance 600–1000 W/m²; tilt optimum 40–60° (winter emphasis), 25–35° (summer), mostly 45° south.
- Collector area $A_K = (Q_{DHW} \cdot \alpha)/q$ [m²]
- Annual heat demand $Q_{DHW} = (m \cdot c \cdot \Delta T \cdot 365)/3600$ [kWh/a], $m$ = 50 l/person·day × 1.2 (+ 20 % losses)
- Useful yield $q$: Swiss Plateau SFH 500 / MFH 650 · Alps SFH 650 / MFH 900 [kWh/(m²·a)]
- Solar fraction $\alpha$: SFH 0.45–0.65 (→ 0.55) · MFH 0.30–0.50
- Quick annual fraction: SF = area × annual yield (~400 kWh/m²·a preheating) / heat demand.

### 7.2 Solar storage tank

$V_{SP} = A_K \cdot V_S + V_Z$ with $V_Z = V_B \cdot f$

- $V_S$ solar preheat volume 30–60 l/m²
- $V_B$ standby volume 50 l/person
- $f$: gas/oil 0.5 × daily demand · **heat pump/electric 1.0 × daily demand** ![ST buffer](ST_Puffer_approx.png)

### 7.3 Heat exchanger

- From ~6 m² collector area, or when retrofitting: external heat exchanger mandatory.
- $A_{HX} = (A_K \cdot \dot q_K)/(k \cdot \Delta T)$ with $\dot q_K$ ≈ 650 W/m², $\Delta T$ flow/return ≈ 10 K
- Energy balance $Q_{out} = Q_{in}$; use c for water on one side, for water/glycol on the other.

### 7.4 Solar circuit and pump

- Glycol flow velocity 0.6–1.0 m/s, optimum 0.7 m/s. High flow: 30–40 l/(m²·h).
- Volume flow $\dot V = A_K \cdot V_s$ (specific flow per collector type)
- Pressure drop: $\Delta p_{tot} = (\Delta p_{coll} + \Delta p_{HX} + \Delta p_{pipe}) \cdot f$, with $\Delta p_{pipe} = l \cdot (Pa/m) \cdot 1.2$ (+20 % for fittings), glycol correction $f$ = 1.2
- Pump head [m WC] = $\Delta p_{tot}$ [Pa] / (1000 · 9.81)

### 7.5 Pressures and expansion vessel

- Fill pressure = operating pressure = static height/10 + 0.3 bar + 0.5 bar
- Pre-charge = static height/10 + 0.3 bar
- Expansion volume $V_{ex} = V_{sys} \cdot e \cdot x$; $V_{sys} = (V_{coll} + V_{circuit}) \cdot 2$; $V_{pipe} = r^2\pi \cdot 2l$
- Minimum nominal volume: $V_n = V_{ex} \cdot (P_E + 1)/(P_E - P_V)$ with $P_E$ = safety valve pressure/1.3, $P_V$ = static height/10 + 0.3 ![Coefficient](ST_ausdehnungskoeffizient.jpeg)

---

## 8. Heat pumps

### 8.1 Key figures

- **COP** $= \dot Q_h / P_{in}$: output/input ratio **at a fixed operating point**. The smaller the temperature lift source→sink, the higher the COP. *Read data sheets at the correct operating point (flow/source temperature), not at the peak.*
- **SPF/JAZ** $= Q_a / E_a$: delivered heat / consumed electricity **over one year**, measured values.
- Annual electricity $E_a = Q_a / SPF$ · environmental heat $Q_{a,src} = Q_a - E_a$ · $\dot Q_h = P_{el} + \dot Q_{src}$

Process: evaporation ($Q_0$) + electricity ($P_{el}$) = condensation ($Q_C$). High/low-pressure switches for safety. Natural refrigerants: low GWP, low ODP, good thermodynamics. ![log ph](WP_log_ph.jpeg)

### 8.2 Heat sources

- **Water:** surface water (river, lake, sea), ground/spring/well/deep water, waste heat (cooling water, sewage), circuit water (district heating, process water)
- **Ground:** borehole heat exchangers, deep boreholes, ground collectors
- **Air:** outdoor air, exhaust air, process/occupant waste heat

### 8.3 Borehole heat exchangers (BHE)

- Length: $L_{BHE} = Q_a \cdot (1 - 1/SPF) / q_{spec}$ or $\dot Q_{BHE} / \dot q_{per\,m}$
- Extraction capacity ≈ 0.035 kW/m · extraction energy ≈ 70 kWh/(m·a) · max. ~250 m
- Spacing: 7–8 m between boreholes (min. 5 m). **Canton Zurich (AWEL):** 6 m between boreholes, 3 m to the plot boundary, 2 m to buildings.
- Aim for turbulent flow in the probe pipes, otherwise the source temperature drops ~1.5 K.
- **Do not forget domestic hot water in the sizing.**
- Groundwater: $\dot m = \dot Q_K \cdot 3600 / (c \cdot (t_{in} - t_{out}))$ [kg/h]

### 8.4 Air/water configurations

Noise types: airborne, structure-borne, flow noise.

| Installation | Advantages | Disadvantages |
| --- | --- | --- |
| Indoor | hardly any outdoor noise, no frost protection needed | space for air ducts, risk of air short circuit, structural effort |
| Outdoor | little indoor space, simple openings | noise, building permit, frost risk for pipes, pipe losses |
| Split | little space, low cost | noise, permit, lower efficiency, more refrigerant → maintenance/leak checks, shorter life |

### 8.5 Operating modes

| Mode | Description | Add-on | Use |
| --- | --- | --- | --- |
| Monovalent | HP covers 100 % | – | well-insulated new builds |
| Mono-energetic | HP + electric element for peaks | heating element | standard SFH CH/DE |
| Bivalent-parallel | HP + fossil, simultaneous | oil/gas boiler | retrofits, high loads |
| Bivalent-alternative | HP to bivalence point, then fossil alone | oil/gas boiler | cold regions, old buildings |
| Multivalent | several systems | HP + ST + gas | large buildings, networks |

### 8.6 SG Ready

Two-wire system with 4 states: 1) blocked (utility lock-out), 2) normal operation, 3) switch-on recommendation (HP controller decides), 4) start command with preset parameters. The recommendation mode leaves the HP the final word (no forced start with a full store) but cannot follow a forecast-based plan.

### 8.7 Sizing from consumption (retrofit)

$\dot Q_H$ = consumption [litres of oil] / divisor → required heat output at design temperature [kW]:

| Location | with DHW (boiler all year) | without DHW (electric) |
| --- | --- | --- |
| Swiss Plateau | / 300 | / 265 |
| > 800 m a.s.l. | / 330 | / 295 |

Alternatively via full-load hours: $\Phi_{HL} = (consumption \cdot H_s \cdot \eta)/t_{full}$ ![Full-load hours](Vollaststunden.png)

Cross-check with specific heat output $\Phi_{HL} = KW \cdot A_{ref}$:

| Building type | W/m² |
| --- | --- |
| Conventionally insulated dwellings | 50–70 |
| Well-insulated existing dwellings | 40–50 |
| New builds to current rules | 30–40 |
| Conventional service buildings | 60–80 |

New builds: SIA 384.201 or derivation from SIA 380/1 plus allowances. Calculator: https://biber.solar/heat-pump-calculator/

### 8.8 Annual energy demand (degree-day method)

Energy demand [kWh] = (heat load / 28) · 16 · HDD

- 28 K: design −8 °C ↔ room 20 °C · 16 h daily operation · HDD: heating degree days of the site
- New build: heat load = area × W/m²; plus ~250 W/person for hot water.

Example, 140 m² house in Zurich, 4 persons: heat load 140 × 35 = 4.9 kW; DHW 4 × 250 W = 1 kW; HDD Zurich ≈ 3267 → demand ≈ ((4.9+1)/28) · 16 · 3267 ≈ **11,000–12,000 kWh/a**.

Electrical input: $P_{el} = \dot Q_{HP} / COP$ (mind utility lock-out periods).

---

## 9. Energy, grid and climate (Switzerland)

### 9.1 Energy forms

Chemical, kinetic, electrical, thermal, radiation, potential, rotation, nuclear. Energy is conserved. Example coal plant: chemical → thermal → kinetic → electrical.

### 9.2 Household electricity consumption

Average CH household without HP/EV ≈ 5000 kWh/a. 2 persons: apartment 2750 / house 3550 kWh/a · 1 person: 2200 / 2700 · 4 persons: 3850 / 5200. Total CH consumption ≈ 65 TWh/a, generation ≈ 67 TWh/a (mostly hydro and nuclear; new renewables growing, non-hydro RE 2022 ≈ 7.7 TWh).

### 9.3 Grid levels

| Level | Power plants | Consumers | Voltage |
| --- | --- | --- | --- |
| 1 transmission | pumped storage, nuclear, hydro | heavy industry, railways | 220/380 kV |
| 3 supra-regional distribution | hydro | industry | 36–220 kV |
| 5 regional distribution | thermal | service buildings | 1–36 kV |
| 7 local distribution | wind, PV, biogas | offices, homes | 400/230 V |

(Levels 2, 4, 6 = transformation)

### 9.4 Pros and cons of renewables

- **PV:** + simple installation, cheap (~CHF 0.13/Wp modules), emission-free operation · − daytime only, limited efficiency, supply dependence on China.
- **Solar thermal:** + high collector efficiency (~60 % at ΔT 40 K), storable · − harder installation, heat only.
- **Wind:** + also produces at night, high output · − acceptance, landscape.
- **Hydro:** + black-start capable, storable, dispatchable · − ecosystem impact.
- **Biomass:** + waste utilisation, base-load capable · − investment, complex, tightness (methane).

### 9.5 The sun

Fusion H → He, $E = mc^2$, $c = 2.998 \cdot 10^8$ m/s. Distance 150 million km, **solar constant 1367 W/m²**, STC reference 1000 W/m².

### 9.6 Greenhouse effect and climate policy

- CO2: 2024 ≈ 427 ppm (pre-industrial ~280 ppm, +>50 %). Global warming ≈ +1.2–1.3 °C; single months in 2024 above +1.5 °C. Switzerland ≈ +2.8 °C. Natural greenhouse effect: +33 K (−18 °C → +15 °C).
- Swiss emissions incl. imports ≈ 13 t CO2eq/capita; domestic 2022 −24 % vs. 1990. Shares: 33 % transport, 23 % buildings, 23 % industry, 21 % agriculture/waste/synthetic gases.
- Consequences: extreme weather, sea level, species loss, health risks, migration. Tipping points: irreversible, positive feedback (Arctic albedo, permafrost).
- **Paris 2015:** well below 2 °C, preferably 1.5 °C; support for poorer countries; no sanctions.
- **Energy Strategy 2050:** efficiency, RE expansion, net zero 2050 (2030: −50 % vs. 1990), nuclear phase-out, grid surcharge 2.3 Rp., buildings programme, CO2 levy (1/3 population, 1/3 economy/pensions, 1/3 buildings programme).
- **Energy Act (vote 9 June 2024):** RE targets 35 TWh by 2035, 45 TWh by 2050; solar obligation from 300 m² building area; **LEG** local electricity communities (same grid area and level, proximity, min. ~20 % generation vs. connected load, smart meters). Consumption target: −43 % per capita by 2035, −53 % by 2050 (base 2000).

---

## 10. Regulations, standards, subsidies (Switzerland)

### 10.1 Hierarchy

- **Laws** are mandatory: Energy Act, cantonal rules (MuKEn: own-generation share for new builds, min. 10 % RE after heating replacement, GEAK, U-value limits).
- **Ordinances** are mandatory: NIV (SR 734.27), heavy-current ordinance (734.2), NEV (734.26), LeV (734.31), VEMV (734.5).
- **Standards** = rules of technology: NIN 2020 / NIN-Compact (electrosuisse), IEC, CENELEC, SIA.
- **Voluntary standards:** Minergie (< Minergie-P < Minergie-A), GEAK (labels A–G, GEAK Plus with advisory report).

### 10.2 NIV and certificates

- NIV governs work on and inspection of low-voltage installations; licences: **Art. 7** (individuals), **Art. 9** (companies), **Art. 14** (limited licence, incl. PV up to the AC switch of the inverter); examination by **ESTI**.
- **Initial verification** before commissioning: visual inspection, measurements, functional tests (NIN part 6).
- **SiNa** safety certificate for new/extended installations and periodically (NIV annex).

### 10.3 Subsidies

- **Pronovo:** guarantees of origin, one-off remuneration (KLEIV < 100 kW, GREIV > 100 kW).
- Buildings programme (cantonal), municipal subsidies: energiefranken.ch.
- Mounting categories for subsidies: free-standing, attached, integrated.
- ZEV: behind the service connection, certified meters (METAS; validity 10 y electronic, 15 y electromechanical). vZEV: same grid level 7. 

---

## 11. Abbreviations

AC alternating current · DC direct current · EIV one-off remuneration · ESTI Federal Heavy Current Inspectorate · GAK generator junction box · GEAK cantonal building energy certificate · HAK service entrance box · LEG local electricity community · MPP maximum power point · NIN low-voltage installation standard · NIV low-voltage installation ordinance · NOCT normal operating cell temperature · Pronovo subsidy administration body · PFPE/PSAgA personal fall-arrest equipment · PV photovoltaics · RCD residual current device · SIA Swiss society of engineers and architects · SiNa safety certificate · SPD surge protective device · STC standard test conditions · TAG grid connection request · ZEV/vZEV (virtual) self-consumption community

History of sustainability: Hans Carl von Carlowitz (founder of the concept), Gro Harlem Brundtland (modern definition).

---

## 12. Links

- https://www.uvek-gis.admin.ch/BFE/sonnendach/ · https://www.geoportal.ch/ · https://solargis.com/resources/free-maps-and-gis-data · https://everywhere.solar/
- Heat pump sizing (SFOE): https://pubdb.bfe.admin.ch/de/publication/download/165
- Heating degree days: https://opendata.swiss · https://www.hev-schweiz.ch
- Subsidies: https://pronovo.ch · https://www.energiefranken.ch · https://portal.dasgebaeudeprogramm.ch · https://www.geak.ch
- Contact: patrick@biber.solar · https://biber.solar
