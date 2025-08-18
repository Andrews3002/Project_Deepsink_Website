import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import ResearchTopics from "./components/ResearchTopics";
import ResearchDetail from "./components/ResearchDetail";
import Mission from "./components/Mission";
import Contactus from "./components/ContactUs";

import './App.css';

const links = [
  { name: "Home", path: "/" },
  { name: "Research Topics", path: "/research-topics" },
  { name: "Mission", path: "/mission" },
  { name: "Contact Us", path: "/contact-us" },
];

const researchTopics = [
  { id: 1, title: "CO2 EOR & EGR", summary: "CO₂ Enhanced Oil Recovery (EOR) and CCUS", imageUrl: "/images/carbon_capture.jpg", detailLink: "/research/1", detail: "Historical Context and Relevance to Trinidad & Tobago CO₂-EOR has an extensive history, dating back to the 1920s. Its first patent was granted in 1952, and a field trial took place in the Permian Basin in 1956. Commercial-scale use started in 1972 at the Scurry Area Canyon Reef Operators Committee (SAC-ROC) field, and since then, industrial adoption has grown worldwide (Liu et al., 2021). In Trinidad and Tobago, CO₂ capture and utilization are particularly relevant due to the high emissions from the petrochemical industry, primarily at the Point Lisas Industrial Estate. Pilot projects in the 1970s at Oropouche and Forest Reserve showed early potential for using captured CO₂ in EOR, demonstrating the feasibility of incorporating carbon management into the country’s energy industry, as seen in Figure 1 (Ellis and Sobers, 2013). CO2-EOR within CCUS and the Injection Process At its core, CO₂ EOR is part of the broader framework of CCUS. In this process, CO₂ is captured from stationary industrial sources, purified, and transported to suitable depleted oil reservoirs. Once injected into the reservoir rock, CO₂ displaces trapped oil from the tiny pore spaces of the formation while becoming stored in those same spaces. The trapping of CO₂ is incidental to the primary goal of oil production, but when the retention is verified over time, it is referred to as associated CO₂ storage (Figure 2). During operations, some of the injected CO₂ is produced back alongside oil, gas, and brine, after which it is separated and reinjected in a closed-loop system. Brine separated from the oil is also returned underground. The efficiency of this process is measured through the CO₂ utilization factor (UF), which represents the volume of CO₂ stored per barrel of oil produced, and is influenced by reservoir geology and fluid characteristics (NPC, 2021). A critical technical aspect of CO₂ EOR is miscibility, the ability of CO₂ and oil to mix into a single-phase fluid under specific conditions. In miscible projects, reservoir pressure exceeds the minimum miscibility pressure (MMP), allowing CO₂ to act as an effective solvent that swells oil volume, lowers viscosity, and improves mobility toward producing wells. Immiscible projects operate below the MMP to protect reservoir integrity, making them less efficient but sometimes more suitable for tilted reservoirs where gravity drainage aids recovery. Global Significance and Expansion into Enhanced Gas Recovery Globally, CCUS was once regarded as costly and slow to develop, but recent momentum, particularly after the COP28 UAE Consensus, has positioned it as a critical decarbonization tool for hard-to-abate industries and low-carbon hydrogen production (Yang et al., 2024). CO₂ EOR with CCUS remains the only commercially viable CCUS application today, offering higher oil recovery rates while simultaneously enabling large-scale CO₂ storage and delivering both economic and environmental benefits. Beyond oil recovery, CO₂ can also be used for enhanced gas recovery (CO₂-EGR), in which CO₂ is injected into depleted gas reservoirs to re-pressurize the formation and displace residual natural gas that conventional methods cannot access (Figure 3). The geological formations of gas reservoirs provide proven containment, minimizing leakage risks, and the existing wells, pipelines, and surface facilities can be repurposed for CO₂ injection. This dual benefit of permanent CO₂ storage and increased gas production offers a pathway to offset storage costs while supporting energy supply security (Liu et al., 2021)."},
  { id: 2, title: "AI + Sensors", summary: "Using AI + sensors at the weak points to monitor them in real time", imageUrl: "/images/deep_sink.jpg", detailLink: "/research/2", detail: "Monitoring is important because when transporting or injecting captured CO2, the biggest risk for leaks or failures are at the weak points, which include: Pipeline block valves and stations,  Abandoned wells,  Wellheads, Cap rocks. Monitoring involves the placement of sensors in those critical locations and then with the use of AI/ data analytics to detect problems at a faster and more reliable pace. Ai combines data from different sensors and recognizes different patterns which would then allow it to predict failures before they happen by spotting those subtle trends. Pipelines Some main areas where leakage may happen include block valves, flanges, compressor/pump stations, geohazard crossings. The function of detection technologies lies in the ability to promptly identify pipeline leaks, thus reducing potential risks. This study includes an experimental investigation into the acoustic technology for pipeline leak detection based on Distributed Acoustic Sensing (DAS). (Dianqiang Xu, 2025) The experiments were carried out within a 210-meter-long pipeline with an inner diameter of 44 millimeters, equipped with electromagnetic valves and circulation pumps. In this experiment, designed to validate the feasibility of the detection technique, pipeline leakage detection with supercritical carbon dioxide was performed. (Dianqiang Xu, 2025) The distinguishing properties of acoustic signals between leak and normal states were explored using the spectrum subtraction algorithm (SSA) and correlation analysis approaches to compare the DAS signals. When a leak occurs, large changes in signals near the leak location are noted, allowing leak identification based on differences in signal response times. During continuous leakage, the energy of signals at specific frequencies around the leak site is significantly higher than in areas without leaks. (Dianqiang Xu, 2025) This study may provide novel methodologies for low signal-to-noise ratio processing and bad point signal identification in the DAS signals, and establish a theoretical foundation for the engineering application of DAS in CO2 pipeline leak detection. (Dianqiang Xu, 2025) Wellheads Some main areas where leakage may happen include casing head seals, annulus vents, cement integrity failures. Integrating DAS with artificial intelligence (AI) has further enhanced the capabilities of these systems, enabling real-time detection and classification of events and anomalies, as well as predictive modelling and data analytics tasks. Overall, DAS represents a promising technology for advancing our understanding of the subsurface and improving the safety and efficiency of geophysical operations (ScienceDirect, 2024) DAS is a powerful tool for imaging subsurface structures and monitoring seismic activity. The technique has been successfully applied to a range of geophysical applications, including seismic imaging, reservoir characterization, and seismic activity monitoring. (ScienceDirect, 2024) When a fibre optic cable is used and run along the well casing, it can pick up acoustic signals from leaks, valve vibrations or abnormal flow inside the casing and detect temperature changes caused by CO2 leaks. Using AI may aid where raw acoustic data is noisy, and AI algorithms are able to filter them and classify it, it may distinguish between normal operational noise which may include (pumps, injection changes) and leak related patterns. (ScienceDirect, 2024) Wellhead leaks in CSS can propagate down the casing or vent CO2 at the surface which are both regulatory violations and safety hazards, traditional monitoring which may include manual checks, single-point pressure gauges are too slow. (ScienceDirect, 2024) The use of DAS + AI allows real time remote monitoring and automatic alerts." },
  { id: 3, title: "Emissions In Waterways", summary: "Risks of CO₂ leakage from a CCS site into groundwater aquifers", imageUrl: "/images/monitoring.jpg", detailLink: "/research/3", detail: `If CO₂ escapes from a CCS storage site and migrates into underground sources of drinking water (groundwater aquifers), multiple environmental and health risks may arise:
Acidification of Groundwater


Dissolved CO₂ forms carbonic acid, lowering pH levels and potentially corroding water infrastructure (IEA, 2010).


Mobilisation of Toxic Metals and Minerals


Acidic conditions can dissolve naturally occurring minerals, such as arsenic, lead, and manganese, from surrounding rock, contaminating water supplies (IEA, 2010).


Changes in Water Chemistry


Elevated dissolved CO₂ may alter the taste, odor, and chemical balance of water, potentially disrupting connected aquatic ecosystems (IEA, 2010).


Loss of Potable Water Resources


Severe contamination could make aquifers unsuitable for human consumption or agriculture, requiring alternative water sources (IEA, 2010).


Legal and Liability Implications


Operators could be liable for remediation costs, penalties, and long-term monitoring if aquifer contamination occurs (IEA, 2010).

In order to mitigate such issues and maintain the long-term effectiveness of a Carbon Capture and Storage (CCS) project the following is implemented. Remediation is required to address significant leakage, unintended migration, or other operational irregularities at a storage site.
The best practice examples that are largely adapted from oilfield operations include:
Well plugging with heavy mud, as used during well blowouts.


Standardised well-repair methods for addressing wellbore failures.


Leak interception by drilling a nearby well to capture escaping fluids.


Other potential measures involve:
 The partial removal of CO₂ from the storage formation to reduce reservoir pressure or remediation of groundwater in the event of contamination. According to the Intergovernmental Panel on Climate Change (IPCC, 2005, as cited in IEA, 2010)
To date, there have been no reported instances requiring corrective or remediation action for CO₂ leaks from operational storage sites. Therefore, additional studies are needed to assess the feasibility and practicality of physically remediating leaks (IEA, 2010, p. 89-90).
` },
  { id: 4, title: "Leakages Through Wells", summary: "Weak seals and pressure in abandoned wells can let CO₂ leak upward.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/4", detail: `Abandoned wells are generally sealed with cement plugs as well as steel castings to prevent migration. Over time, these barriers can begin to degrade, for example, cement can shrink, crack or lose strength due to repeated thermal and pressure changes. Cement can also react with CO2 through a process referred to as carbonation, resulting in the cements structure being altered and reduces its sealing ability. Additionally, formation water containing salts and acids can dissolve parts of the cement over time. Steel castings can also corrode in the presence of CO2 and moisture which produces rust, resulting in a weaker structural integrity. Once corrosion breaches the casing wall or cement loses its bond to the surrounding rock, microchannels can form, creating potential pathways for CO₂ leakage. The risk is especially high in older wells drilled before modern abandonment standards, where cement coverage and documentation may be incomplete or defective(V 2021).
In geological CO₂ storage, injection increases the reservoir pressure within the target formation. If this pressure exceeds the sealing capacity of natural caprock or artificial barriers in abandoned wells, CO₂ can be forced upward through any available path. This is particularly dangerous if the well connects multiple permeable formations, acting as a “chimney” for vertical migration. Poor cement bonding between the casing and rock or incomplete plugging in multi-zone wells can allow CO₂ to bypass protective geological layers entirely. Supercritical CO₂ is buoyant relative to brine, making it naturally inclined to rise toward the surface if a pathway exists. Over time, even small imperfections in plugs or casing joints can be widened by sustained pressure gradients. If left unchecked, this migration can lead to CO₂ entering shallow aquifers or venting into the atmosphere, undermining the effectiveness of carbon storage projects(Celia and Bandilla n.d.).
Leakage of CO₂ from abandoned wells can cause significant environmental and safety hazards. In groundwater systems, CO₂ dissolves to form carbonic acid, lowering pH and mobilizing toxic metals such as arsenic, lead, and iron from surrounding rock. This can degrade drinking water quality and harm aquatic ecosystems. On land, CO₂ is heavier than air and can accumulate in low-lying areas, displacing oxygen and creating asphyxiation hazards for humans and animals. While large, sudden leaks are rare, chronic low-level leakage can release significant volumes over time, reducing the net climate benefit of carbon capture and storage. Monitoring and detection are challenging because leaks may occur in premote or unmapped areas with thousands of legacy wells. Once detected, repairing or re-abandoning wells is costly and technically complex. These risks highlight the importance of rigorous well sealing standards, ongoing surveillance, and preventive maintenance to minimize long-term leakage potential(Alsubaih, Sepehrnoori, and Delshad 2024).
For ppt:
Over time, cement plugs and steel casings used to seal abandoned wells can crack, corrode, or chemically react with CO₂, creating pathways for gas to escape.
CO₂ stored underground can be pushed upward through compromised wells if reservoir pressure increases, especially when the well connects permeable layers across different depths.
Escaped CO₂ can contaminate groundwater, harm ecosystems, pose asphyxiation hazards at the surface, and reduce the climate benefits of carbon storage.
` },
  { id: 5, title: "Leakage Through Caprock ", summary: "Excess pressure can fracture caprock, creating pathways for CO₂ leakage.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/5", detail: `Caprock acts as the primary seal above a CO₂ storage reservoir, relying on its low permeability to prevent upward migration. However, if CO₂ injection raises reservoir pressure beyond the caprock’s fracture gradient, it can cause new fractures or enlarge existing ones. Geomechanical stress changes like those from fluid injection, tectonic activity, or subsidence can further weaken the seal. Once fractures form, CO₂ can migrate upward through them, bypassing the containment. Maintaining injection pressures below safe limits and monitoring stress changes are essential to ensure that the caprock remains intact over the long term of storage operations(A. Younessi et al. 2024).
Before injection begins, caprock formations can contain natural faults, joints, or microfractures formed during geological history. If these features are hydraulically connected to the reservoir, they can serve as leakage pathways. Injection activities can increase pore pressure along these weaknesses, reducing the effective stress and potentially reactivating faults or enlarging fracture apertures. This increases permeability and compromises the sealing function of the caprock. Detailed seismic imaging and fault mapping are therefore critical before CO₂ injection to identify any connected structures. Managing injection rates can help prevent the pressurization that might trigger fault or fracture reactivation(Gholami, Raza, and Iglauer 2021).
Over extended storage periods, CO₂ dissolves in formation brine, creating carbonic acid. If this acidic water diffuses into the caprock, it can chemically react with certain minerals especially carbonates causing dissolution. This process can locally increase porosity and permeability, weakening the seal over time. While some reactions may produce secondary minerals that re-seal pores, others may enhance leakage potential. The extent of alteration depends on mineral composition, brine chemistry, and CO₂ saturation. Laboratory experiments and geochemical modeling are used to predict these interactions, helping operators choose storage sites with caprock that is resistant to acid-induced degradation(Sang and Liu 2021).
For ppt: 
Caprock is typically a low-permeability layer such as shale, mudstone, or evaporite that seals CO₂ in the storage formation. If the caprock experiences fracturing, fault reactivation, or tensile failure due to high injection pressures, it can lose its sealing capacity, creating pathways for CO₂ migration.
Natural faults, joints, or microfractures in the caprock can act as leakage points if they are connected to the reservoir. Injection can increase fluid pressure along these weaknesses, potentially opening them further or increasing their permeability, allowing CO₂ to bypass the caprock.
Over decades to centuries, CO₂ can dissolve in formation water(naturally occurring water found within subsurface rock formations, particularly in oil and gas reservoirs) and migrate into the caprock. This acidic fluid may react with minerals such as carbonates, dissolving them and locally increasing porosity and permeability, which can gradually compromise the caprock’s seal.


` },
  { id: 6, title: "Legal Information", summary: "Are there any legal provisions in place for Carbon Capture Storage.", imageUrl: "/images/monitoring.jpg", detailLink: "/research/6", detail: `Trinidad and Tobago is actively pushing ahead with Carbon Capture, Utilisation, and Storage (CCUS) and CO₂ Enhanced Oil Recovery (EOR) projects to cut carbon emissions, boost oil output, and prepare for a lower-carbon future. The government, universities, and industry partners are working together to create the technical, legal, and financial foundations for large-scale projects making T&T a leader in the Caribbean for Carbon Capture Storage.
Why It Matters
Economic – Capture CO₂ from industrial sources and use it to produce more oil, increasing national revenues.
Environmental – Store CO₂ underground to reduce emissions, helping meet Paris Agreement and national climate goals.
Innovation – Build new skills, technology, and research capacity in CCUS, hydrogen, and renewable energy.
What’s Being Done
Technical Work
Identify suitable geological sites for CO₂ storage—both offshore and onshore.
Create a Carbon Storage Atlas with UWI and UTT.
Pilot projects in the Forest Reserve oil field and other heritage producing areas.
Conduct seismic, geological, and reservoir modelling studies.
Policy & Law
Drafting a Carbon Capture Utilisation Policy and Legislation that covers licensing, monitoring, decommissioning, long-term liability, and carbon trading.
Drawing lessons from Canada, Australia, EU, and UK.
Including tax incentives, clear definitions, compliance rules, and fund mechanisms for monitoring and remediation.
Research & Training
UWI/UTT CCUS Collaborate launched in May 2024 to offer courses, research, and consulting on CCUS and renewable energy.
Developing a new MSc in Carbon and Gas Management, micro-credentials, and short courses.
Funding & Business Models
Designing commercial models for CCS and CO₂ EOR.
Exploring government support, carbon pricing, and carbon markets.
Seeking international financing and partnerships.

Key Milestones
2024 – Stakeholder consultations on draft policy, launch of CCUS Collaborate, start of Carbon Atlas work.
Early 2025 – Cabinet approval of policy expected, then move to draft the legislation.
Ongoing – Field studies, industry collaboration, and preparation for a demonstration CCS project.
Legal & Policy Framework: Carbon Capture Storage in Trinidad and Tobago
1. Strategic National Policy
The Strategy for Reduction of Carbon Emissions (2015–2040), acting as a cornerstone national policy, includes CCS as a key action. It recommends developing a national emissions trading system, promoting energy efficiency, and advancing CCS mapping through a “Carbon Capture and Storage map” initiative.
2. Regulatory Infrastructure
On February 18, 2021, Cabinet approved the formation of a Carbon Capture and CO₂ Enhanced Oil Recovery Steering Committee. Chaired by the Permanent Secretary of the Ministry of Energy and Energy Industries, the committee includes leaders from Heritage Petroleum, UWI, UTT, and the Multilateral Agreements Unit. Its mandate: steer implementation of large-scale CO₂ EOR projects in mature fields like Point Fortin, Guapo, Gran Ravine, and Forest Reserve.
3. Policy Development
A second draft of CCS policy guidelines was released for consultation around the 2nd National CCS Symposium(September 2024), where officials discussed aligning Trinidad’s regulatory regime with models from Guyana, including legislative licensing frameworks for CO₂ storage IEAGHG.
4. International Readiness & Funding
Trinidad secured Green Climate Fund (GCF) “Readiness” funding in March 2024 to advance CCS deployment—this includes storage assessment in saline formations, building a national storage atlas, and strengthening national CCS programming UNEP-CCC.
5. University–Industry Collaborations
Major energy players like bpTT and Shell are collaborating with UWI and UTT on developing a Carbon Storage Atlas—mapping potential sequestration sites both onshore and offshore. These partnerships supply both financing and technical data to facilitate eventual CCS deployment Trinidad and Tobago Newsdaybp globalEnergy Chamber of Trinidad and Tobago.
Trinidad and Tobago's energy transition includes an evolving legal and policy architecture to support Carbon Capture, Utilisation, and Storage (CCUS). National strategy (2015–2040) embeds CCS into climate actions; a 2021 steering committee guides CO₂ Enhanced Oil Recovery projects; policy drafts are under consultation; and March 2024 saw Green Climate Fund backing for CCS readiness. Simultaneously, academic–industry partnerships (bpTT, Shell with UWI/UTT) are mapping potential storage sites, while climate finance reports highlight resource needs for CCS site identification and verification mechanisms.
`},
  { id: 7, title: "Contingency Plan", summary: "CCS safety requires integrated risk assessment, mitigation, and contingency planning", imageUrl: "/images/monitoring.jpg", detailLink: "/research/7", detail: `
Effective carbon capture and storage (CCS) depends not only on preventing CO₂ leakage, but also on having a robust contingency system to respond if such events occur. A Probabilistic risk assessment (PRA) can help to connect corrective measures, using a structured Contingency Planning Matrix (CPM). This ensures that risk assessment, mitigation, and emergency response are fully integrated.

It is important to establish a consistent risk-management terminology that we can refer to throughout this project (document). Managing the risk of CO2 leakage from geologic storage formations includes three essential steps: assessment of risk, mitigation and avoidance of intolerable risk and contingency planning for tolerable risk. A robust risk assessment involves the identification, analysis and evaluation of potential leakage scenarios. 
` },
];


function App() {
  const researchRef = useRef<HTMLDivElement> (null);

  return (
    <Router>
      <nav className="navbar">
        <NavLinks links={links} topics={researchTopics} />
      </nav>
      

      <Routes>
        {/* Home Section */}
        <Route
          path="/"
          element={
            <>
              <div className = "particleContainer">
                <div className = "particle" style={{ ["--i" as any]: 27 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 10 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 34 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 26 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 23 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 14 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 32 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 26 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 29 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 36 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 21 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 12 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 34 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
                <div className = "particle" style={{ ["--i" as any]: 32 }}>
                  <div className="atom1"></div>
                  <div className="stem1"></div>
                  <div className="centerAtom"></div>
                  <div className="stem2"></div>
                  <div className="atom2"></div>
                </div>
              </div>
              <div id="homeSection">
                <div className="homeTitleDiv">
                  <div className="homeTitleLine">
                    <h1 className="accentText">Deep</h1>
                    <h1>Below</h1>
                  </div>
                  <div className="homeTitleLine">
                    <h1>We Breathe</h1>
                    <h1 className="accentText">Free</h1>
                  </div>
                </div>
                <p>
                  Welcome to our website, below you will find information on our
                  proposition. Each topic below should give you insight into why you
                  should invest in our initiative
                </p>
                <div className="scrollArrow" onClick={() => researchRef.current?.scrollIntoView({ behavior: "smooth" })}>
                  &#x2193;
                </div>
              </div>
              <div ref={researchRef} id="researchsection">
                <ResearchTopics topics={researchTopics} />
              </div>
            </>
          }
        />

        {/* Research Detail Section */}
        <Route path="/research/:id" element={<ResearchDetail researchTopics={researchTopics}/>} />

        {/* Mission Page */}
        <Route path="/mission" element={<Mission />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </Router>
  )
}

export default App;