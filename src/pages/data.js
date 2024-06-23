export const data = {
  surveyList: [
    {
      id: "8",
      title: "A Review of Service Selection Strategies in Mobile IoT Networks",
      description: "https://ieeexplore.ieee.org/document/10534868",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Battery Life and Energy Efficiency: Mobile devices have limited battery capacity, making it crucial to extend battery life and enhance energy efficiency. Service selection can play a role in reducing energy consumption by choosing services from geographically closest cloud data centers. Quality of Service (QoS): Ensuring efficient and reliable communication that meets user expectations despite varying network conditions and service providers is a significant challenge.:Security and Privacy: Safeguarding the integrity and protection of data during service selection is vital. This involves ensuring confidentiality, authentication, data integrity, and privacy. Scalability and Resource Management: Managing the increasing number of mobile devices and efficiently allocating resources to handle growing requests without compromising service quality is another challenge",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Game Theory Models: These models are used for service selection in different contexts, such as UAV clouds and vehicular ad hoc networks. Examples include the Game Theoretic approach for UAV service providers and the Stackelberg game-based solution for UAV-based mobile edge computing​​. Machine Learning and Fuzzy Logic: These approaches are evaluated for their strengths and limitations in improving the service selection process in mobile networks​​.Optimization Techniques: Linear Integer Problem (LIP)-based optimization techniques like Energy Aware Selection (EAS) and Delay Aware Selection (DAS) are proposed for selecting the optimal set of UAVs, focusing on minimizing energy consumption and response times, respectively​​. 2",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Theoretical Analysis: Includes game theory models and optimization techniques to analyze and propose solutions for service selection. Simulations: Used to validate proposed solutions, such as the efficiency of game theoretic approaches in terms of network QoS and service gain​​. System Implementation: Involves the application of proposed models in real-world scenarios, such as the integration of pseudonym techniques for enhancing security in service selection​​. Measurement Study: Evaluations based on specific metrics like response time, recall, and precision to assess the effectiveness of service selection algorithms​​.",
        },
      ],
    },
    {
      id: "9",
      title:
        "Multidimensional Big Data Analytics over Big Web Knowledge Bases: Models, Issues, Research Trends, and a Reference Architecture",
      description: "https://ieeexplore.ieee.org/document/9999124",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "The document focuses on the problem of supporting multidimensional big data analytics over Big Web Knowledge Bases (BWKBs). These BWKBs are generated from web systems built on top of big datasets, such as social networks, e-government systems, and smart city tools. The primary challenge addressed is extracting actionable knowledge insights from these BWKBs using multidimensional metaphors and extending traditional web platforms to support multidimensional analytics",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Implementing OLAP data cubes and extending them for big data environments. Developing multidimensional clustering and regression models to analyze and predict trends in big data. Utilizing visual multidimensional analytics tools like MS PowerBI for data visualization and exploration​",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Implementation: The reference architecture for supporting multidimensional big data analytics involves multiple layers, such as Multidimensional Information Extraction, Persistent OLAP Data Cube Layer, and Visual Multidimensional Big Data Analytics.:Theoretical Analysis: The document discusses the theoretical underpinnings of multidimensional data models and their application to BWKBs.:Simulations: Examples and case studies, such as the analysis of the Booking.com web system, illustrate how the proposed multidimensional models can be implemented and used for predictive analytics and clustering​",
        },
      ],
    },
    {
      id: "1",
      title: "Web of Things: Security Challenges and Mechanisms",
      description:
        "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9349366",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "The paper Web of Thing Security Challenges and Mechanisms identifies several key security challenges associated with the Web of Things (WoT). These include unauthorized access, eavesdropping, denial of service (DoS) attacks, tampering, and impersonation. The paper highlights the importance of addressing these challenges for the successful deployment of WoT on a commercial scale​",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Threat Analysis and Attack Modeling: This approach helps inform users about defensive measures and prevents security threats by identifying system vulnerabilities​​.:Identity Management: Managing the identities of devices and users to ensure that only authorized entities can access the network.:Data Confidentiality and Integration: Using encryption to protect data integrity and confidentiality during transmission.:Authentication and Authorization: Implementing lightweight cryptographic protocols like OAuth, SEA, and PRESENT to authenticate users and devices.:Access Control: Implementing access control mechanisms to restrict unauthorized access to resources​​.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review: The authors reviewed existing studies to identify the primary security challenges in WoT.:Threat Analysis and Attack Modeling: They performed a detailed analysis of threats and modeled potential attacks to understand system vulnerabilities.:Security Mechanisms: The authors reviewed existing security mechanisms and proposed improvements to enhance the security of WoT.:Discussion and Conclusion: They discussed the findings and suggested future research directions to address unresolved security issues​",
        },
      ],
    },
    {
      id: "2",
      title:
        "Design of Long-Term Evolution Based Mobile Edge Computing Systems to Improve 5G Systems",
      description: "https://ieeexplore.ieee.org/document/10212420",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Latency: 4G systems face latency issues that impede real-time responsiveness for mobile applications.:Energy Efficiency: The need to improve energy efficiency for mobile devices, enabling them to operate longer on a single charge.:Scalability and Performance: The necessity to support resource-intensive applications such as augmented reality, real-time video streaming, and IoT devices, which require efficient task offloading to edge servers to maintain performance.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Mobile Edge Computing (MEC): By bringing computing capabilities closer to the network edge, MEC reduces latency, enhances real-time responsiveness, and alleviates the burden on centralized cloud servers.:Workload Allocation Algorithms: The design and implementation of efficient algorithms to optimize the distribution of computational tasks to supported servers, aiming to reduce latency and improve energy efficiency.:Socket.IO Communication Protocol: Leveraging Socket.IO for bidirectional, real-time communication between mobile devices and edge servers, ensuring low-latency interactions.:Security Measures: Incorporating advanced cryptographic techniques, authentication protocols, and secure communication channels to protect data integrity, confidentiality, and authenticity.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Model Development: Designing an advanced MEC system leveraging 5G networks to enable real-time, energy-efficient, and secure computation offloading.:Literature Survey: Reviewing existing studies to understand the current state of MEC, LTE networks, performance optimization techniques, and communication protocols.:Control and Data Planes: Implementing intelligent decision-making algorithms in the control plane and using deep reinforcement learning (DRL) and artificial intelligence (AI) in the data plane to optimize resource allocation and improve system performance.:Security Implementation: Implementing secure data offloading schemes, intrusion detection, and prevention mechanisms within the MEC environment.:Performance Evaluation: Conducting extensive simulations and experiments using realistic network scenarios and workload profiles to evaluate key performance metrics such as latency, throughput, energy efficiency, and overall system responsiveness.:Comparison of Networks: Evaluating the performance of the proposed system under different network conditions, including WiFi and LTE, to highlight the advantages of MEC in 5G networks.",
        },
      ],
    },
    {
      id: "3",
      title:
        "A WoT Platform for Supporting Full-Cycle IoT Solutions from Edge to Cloud Infrastructures: A Practical Case",
      description: "https://www.mdpi.com/1424-8220/20/13/3770",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "LoT@UNED Platform: The development of a Web of Things (WoT) platform named Labs of Things at UNED (LoT@UNED) to support full-cycle IoT solutions. This platform enables remote experimentation and learning in IoT environments.:Layered Architecture: The platform is designed with three main layers::Edge Layer: Focuses on the interaction with IoT devices and sensors, including edge programming and communication protocols.:Fog Layer: Provides additional computational resources and real-time services to support the edge layer.:Cloud Layer: Offers data storage, processing, and analytics capabilities.:Educational Infrastructure: The platform is used in computer science courses to provide students with hands-on experience in developing IoT solutions, covering all stages from edge to cloud.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Threat Analysis and Attack Modeling: This approach helps inform users about defensive measures and prevents security threats by identifying system vulnerabilities​​.:Identity Management: Managing the identities of devices and users to ensure that only authorized entities can access the network.:Data Confidentiality and Integration: Using encryption to protect data integrity and confidentiality during transmission.:Authentication and Authorization: Implementing lightweight cryptographic protocols like OAuth, SEA, and PRESENT to authenticate users and devices.:Access Control: Implementing access control mechanisms to restrict unauthorized access to resources​​.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Analysis of IoT Applications: Determining the main stages involved in the IoT development cycle.:Literature Review: Identifying previous works on IoT remote laboratories and their limitations.:System Design: Designing the LoT@UNED platform to cover all stages of IoT development, including hardware, software, and communication components.:Implementation: Deploying the platform and integrating various IoT devices (e.g., Raspberry Pi boards) with cloud services (e.g., IBM Watson IoT).:Experimentation: Conducting practical activities in a real educational setting to test the platform's effectiveness.:Evaluation: Analyzing student feedback through surveys to assess the platform's perceived usefulness, ease of use, and overall satisfaction.",
        },
      ],
    },
    {
      id: "4",
      title:
        "Service-driven User Plane Architecture for Future Cellular Networks and Multi-access Edge Computing",
      description: "https://ieeexplore.ieee.org/document/10368480",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "User Mobility and Reallocation: Frequent reallocation of application state between edge servers and User Plane (UP) paths due to user mobility results in high costs and lower Quality of Service (QoS).:Control Plane (CP) and User Plane (UP) Interaction: The complicated interaction between CP and UP reduces effective utilization of network and computation resources, degrading QoS.:Latency and Resource Utilization: The need to optimize Xn-based post-handover UP management to balance resource costs and performance while reducing latency.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Service-driven UP Selection Mechanism: A mechanism that optimizes UP path reallocation by enabling the Uplink Classifier (ULCL) function and Application Function (AF) with refined QoS flow. This aims to balance resource costs and performance dynamically.:Enhanced UP Architecture: Implementation of enhanced 3GPP-compliant modules such as Enhanced SMF Control Module (E-SCM), Enhanced PCF Module (E-PCM), and Enhanced ULCL Monitor Module (E-UMM) to support service-driven QoS policies and improve UP management.:Dynamic UPF and MEC Node Selection: A mechanism that selects optimal UPF and MEC node pairs based on service types (latency-sensitive, computation-intensive, and non-guaranteed services) to ensure effective resource utilization and high-quality performance.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review: Reviewing existing studies on 5GC UP, MEC, and related technologies to understand the current state and identify gaps.:Service-driven UPF Reallocation Analysis: Analyzing the impact of ULCL and AF functions on traffic routing and proposing a novel service-driven UPF reallocation mechanism.:System Design: Designing an enhanced UP architecture with new QoS rules and modules to support dynamic UPF and MEC node selection based on service classification.:Simulation and Preliminary Evaluation: Building a simulation environment using open-source tools (e.g., Free5GC, UERANSIM) to validate the service classification and evaluate the performance of the proposed UPF reallocation mechanism.",
        },
      ],
    },
    {
      id: "5",
      title:
        "Non-Orthogonal Multiple Access for Offloading in Multi-Access Edge Computing: A Survey",
      description: "https://ieeexplore.ieee.org/document/10292655",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "High Energy Consumption: The need to reduce the energy consumption of devices, particularly IoT devices, which have limited battery life.:Latency and Resource Utilization: The necessity to minimize latency and optimize resource utilization for real-time applications and services.:Scalability: Ensuring the system can handle a large number of users and devices simultaneously without performance degradation.:Quality of Service (QoS): Maintaining high QoS for various applications, such as augmented reality, telemedicine, and 8K streaming, which require low latency and high bandwidth.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "NOMA for MEC: Utilizing NOMA at the physical layer to allow multiple users to share the same radio resources simultaneously, improving spectral efficiency and reducing latency.:Optimization Algorithms: Implementing various optimization algorithms, such as Geometric Programming, Lyapunov functions, Successive Convex Approximation (SCA), and Deep Reinforcement Learning (DRL), to manage resources efficiently and minimize energy consumption.:Hybrid NOMA Schemes: Combining NOMA with Orthogonal Multiple Access (OMA) to create hybrid schemes that can dynamically switch based on the network conditions and requirements.:Offloading Strategies: Developing efficient offloading strategies to decide when and how tasks should be offloaded to MEC servers to balance the load and minimize delays.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review: Conducting a comprehensive review of existing works on NOMA and MEC to identify gaps and opportunities for improvement.:Taxonomy Definition: Defining a taxonomy to systematically classify and compare existing works based on their objectives, methodologies, and performance metrics.:Comparative Analysis: Analyzing and comparing the different approaches and proposals in the literature, highlighting their benefits, limitations, and best practices.:Simulation and Evaluation: Implementing simulation models to evaluate the performance of various NOMA-assisted MEC architectures under different scenarios and use cases.:Future Research Directions: Identifying future research directions to address unresolved issues and improve the performance of NOMA-assisted MEC architectures.",
        },
      ],
    },
    {
      id: "6",
      title:
        "An Expressive Model for the Web Infrastructure Definition and Application to the Browser ID SSO System",
      description: "https://ieeexplore.ieee.org/abstract/document/6956594",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Complex Infrastructure: The web infrastructure is complex and consists of various interacting entities such as DNS servers, web servers, and web browsers, all using diverse technologies.:Security Vulnerabilities: Numerous attacks have demonstrated that rigorous analysis of web standards and applications is indispensable to identify and mitigate security vulnerabilities.:Model Accuracy: Existing models for analyzing web infrastructure are not comprehensive or accurate enough to capture all the nuances of standards and specifications, leading to gaps in security analysis.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Comprehensive Formal Model: The development of a formal model for the web infrastructure that is comprehensive and accurately reflects the standards and specifications. This model serves as a solid basis for analyzing a broad range of web standards and applications.:Application to BrowserID SSO System: Using the formal model to conduct the first rigorous security analysis of the BrowserID system (also known as Mozilla Persona). This analysis revealed critical security flaws that were not captured by previous models.:Security Fixes and Formal Verification: Proposing fixes for the identified security flaws in the BrowserID system, formally stating the relevant security properties, and proving that the fixed system satisfies these properties in a setting with a secondary identity provider.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Formal Model Development: Creating an expressive formal model of the web infrastructure based on a Dolev-Yao-style communication model. The model includes web servers, web browsers, DNS servers, and attackers, with precise handling of HTTP(S) requests, responses, and various security restrictions.:Application to BrowserID: Applying the model to analyze the BrowserID SSO system. This involved modeling the interactions of the BrowserID system with different web technologies such as AJAX, cross-document messaging, and HTML5 web storage.:Security Analysis: Conducting a detailed security analysis to identify critical flaws in the BrowserID system. The analysis included simulating attacks and verifying the effectiveness of the proposed fixes.:Formal Proofs: Providing formal proofs to demonstrate that the fixed BrowserID system satisfies the defined security properties. This included ensuring that the system is resilient to attacks and maintains the integrity and confidentiality of user data.",
        },
      ],
    },
    {
      id: "7",
      title:
        "5G Multi-Access Edge Computing: A Survey on Security, Dependability, and Performance",
      description: "https://ieeexplore.ieee.org/document/10158694",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "8",
      title:
        "Multi-Access Edge Computing Implemention On Tower Ecosystem Indonesia: Challenges And Visibility",
      description: "https://ieeexplore.ieee.org/document/9952477",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "9",
      title:
        "Mobility-aware Multi-Access Edge Computing for Multiplayer Augmented and Virtual Reality Gaming",
      description: "https://ieeexplore.ieee.org/document/10013599",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "1",
      title:
        "UAV-Enabled Ultra-Reliable Low-Latency Communications for 6G: A Comprehensive Survey",
      description: "https://ieeexplore.ieee.org/document/9558857",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "2",
      title:
        "Energy-Delay Optimization for Ultra-Reliable Low Latency Communication",
      description: "https://ieeexplore.ieee.org/document/10009970",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "3",
      title:
        "On the Cost of Achieving Downlink Ultra-Reliable Low-Latency Communications in 5G Networks",
      description: "https://ieeexplore.ieee.org/document/9732349",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "4",
      title: "HyDRS-WoT: Hybrid Disaster Response System using Web of Things",
      description: "https://dl.acm.org/doi/10.1145/3366030.3366122",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Ineffectiveness of Existing DRS: Current disaster response systems often fail to secure major infrastructures and protect lives during disasters. They typically rely on centralized infrastructures, which may become unavailable during disasters, leading to increased human costs.:Limited Collaboration and Interoperability: Existing DRSs do not support flexible collaborations with other available resources in a timely manner and heavily rely on centralized infrastructures, limiting their effectiveness during disasters.:Scalability and Connectivity: Managing the large scale of devices and ensuring connectivity during disasters are significant challenges that current DRSs do not adequately address.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Hybrid Disaster Response System (HyDRS): A system that supports both centralized and decentralized disaster responses, enabling on-demand collaboration between nearby sensors and users over ad-hoc social overlay networks.:Integration of Web of Things (WoT): The proposed HyDRS-WoT integrates WoT to enhance discoverability, interoperability, and scalability. WoT allows smart devices and people in disaster areas to connect and share disaster-related information, even when centralized infrastructures are unavailable.:Dynamic Cooperation Among Things: An extension of WoT, called WoT-HyDRS, is proposed to support dynamic cooperation among things, allowing devices to recognize the necessity for cooperation and organize communities to provide required information and services during disasters.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Requirements Analysis: Identifying and refining the requirements for an effective DRS, including connectivity, discoverability, interoperability, cooperability, self-organization, scalability, and security.:Preliminary Work: Reviewing previous work on HyDRS to understand its limitations and identifying how IoT and WoT can address these limitations.:System Design: Designing the HyDRS-WoT architecture, which includes three response layers: Physical Layer, Localized Response Layer, and Generic Response Layer. Each layer has specific roles in managing disaster response and ensuring effective communication and cooperation.:Extension of WoT Thing Description: Extending the WoT Thing Description to include properties for cooperation, allowing things to indicate their willingness to help during disasters and their availability for emergency cooperation.:Implementation and Evaluation: Implementing the HyDRS-WoT and conducting scenario-based field tests with real sensors to validate its effectiveness.",
        },
      ],
    },
    {
      id: "5",
      title:
        "A WoT Approach to eHealth: Case Study of a Hospital Laboratory Alert Escalation System",
      description: "https://dl.acm.org/doi/10.1145/2379756.2379762",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Integration of Network-Enabled Devices: The need for seamless integration of smartphones, tablets, and other network-enabled devices into daily healthcare workflows, making their use as ordinary as possible for caregivers.:Effective Alert Management: Existing hospital alert systems often involve manual monitoring and intervention, which can be time-consuming, error-prone, and inefficient. There is a need for an automated system that can handle alerts smartly and autonomously.:Scalability and Interoperability: Ensuring that the system can scale to handle multiple devices and maintain interoperability across different platforms and technologies.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "RESTful Architectures: Using RESTful architectures to model custom objects in the health domain as resources, enabling interaction and combination into mashup applications. This approach enhances and facilitates the work of caregivers in a natural way.:Smart Alert Escalation System: Developing a smart alert escalation system that integrates into the Web of Things. This system automates the process of detecting critical results in laboratory analyses and escalating alerts to the appropriate caregivers without manual intervention.:WoT Integration: Embedding eHealth workflows into the WoT to connect alerts with other resources, providing additional context and information. This integration improves the overall alert management process and facilitates the seamless exchange of information among caregivers, patients, and their medical records.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Requirements Analysis: Identifying the requirements for an effective alert escalation system in hospital environments. These include ensuring alerts reach their destinations, handling different receiving devices, and managing alert delivery failures.:Design Considerations: Designing a system that integrates with the existing Automated Medical Laboratory System (AMLS) and handles alerts in a smart and autonomous manner. The system uses RESTful principles to model alerts and related resources as first-class citizens in a WoT ecosystem.:Implementation: Implementing a prototype system that includes three subsystems: one for sending notifications, one for handling alert escalation, and one for providing access to alerts through a web interface. The system ensures privacy by not including patient information in the alerts and using secure links for accessing alert details.:Extended Vision: Proposing an extended vision for the system, where additional resources such as caregivers, patients, medical records, and laboratories are modeled as RESTful resources. This allows for a comprehensive and integrated approach to managing healthcare information and alerts.",
        },
      ],
    },
    {
      id: "6",
      title: "POSTER: A Survey of Security Challenges with 5G-IoT",
      description: "https://ieeexplore.ieee.org/document/9283765",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "7",
      title:
        "MultiAuth-WoT: a Multimodal Service for Web of Things Athentication and Identification",
      description: "https://dl.acm.org/doi/10.1145/2820426.2820438",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Security of Data, Users, and Devices: Ensuring the security and privacy of data exchanged in the WoT, as well as the authentication and identification of users and devices.:System Reliability: Maintaining system reliability in the face of a large number of heterogeneous devices connected to the WoT.:Multimodal Authentication: The need for multiple mechanisms for user authentication beyond traditional username/password methods, including biometric authentication, RFID, NFC, and more.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "OpenId Connect Protocol: Utilizing the OpenId Connect protocol to provide access authentication and identification to services by applications. This protocol is designed to be extensible and based on a Web REST architecture, making it suitable for various types of applications.:MultiAuth-WoT Service: Implementing a multimodal authentication service (MultiAuth-WoT) that integrates with an Enterprise Service Bus (ESB) to manage authentication and identification. The service intermediates the communication between applications and the OpenId Connect provider, allowing for multiple authentication mechanisms.:Case Study: Smart Room Application: As a practical implementation, the paper uses a Smart Room application that controls devices such as security cameras, air-conditioning, lighting, and sensors. This case study demonstrates the feasibility of extending the OpenId Connect protocol into the WoT context to fulfill multimodal authentication requirements.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review: Reviewing existing works on WoT, OpenId Connect, and authentication protocols to identify gaps and opportunities for improvement.:Architecture Design: Designing a scalable architecture that integrates the OpenId Connect protocol into the WoT context. The architecture includes several components:Communication: Handling communication with devices on the network, including automatic discovery and configuration.:Enterprise Service Bus (ESB): Providing a middleware platform for integrating services and managing access to devices via RESTful services.:OpenId Connect Integration: Implementing authentication and authorization models using OpenId Connect to manage user and device identity.:Web of Things Applications: Developing applications that utilize the WoT infrastructure to interact with smart devices.:Implementation: Implementing the MultiAuth-WoT service within the ESB to mediate authentication requests and support multiple authentication modalities.:Case Study and Evaluation: Conducting a case study using a Smart Room application to evaluate the effectiveness of the proposed multimodal authentication service. The evaluation includes testing various authentication methods (e.g., username/password, RFID, NFC) and analyzing their performance in a real-world scenario.:Key Findings:Feasibility of OpenId Connect in WoT: The study demonstrates that the OpenId Connect protocol can be effectively extended to the WoT context to support multimodal authentication.:Enhanced Security and Flexibility: The MultiAuth-WoT service provides a flexible and secure authentication mechanism that can adapt to different user needs and device capabilities.:Improved User Experience: By supporting multiple authentication methods, the service enhances the user experience and provides greater security for accessing smart devices.",
        },
      ],
    },
    {
      id: "8",
      title: "Energy-Efficient Programming Languages for Mobile Applications",
      description: "https://ieeexplore.ieee.org/document/9612479",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "9",
      title:
        "A System for the Specification and Execution of Conditional WoT Applications over Voice",
      description: "https://dl.acm.org/doi/10.1145/2830894.2830895",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Complexity of Voice Commands: Current voice-based personal assistance applications, such as Samsung S Voice and Apple Siri, are limited to handling simple device control commands and short-answer queries. They struggle with more complex requests and often redirect complex queries to third-party search services, leading to low user retention rates.:Dependency on Content Providers: These applications rely heavily on a limited number of content providers, which cannot fully satisfy various user needs. This limitation reduces the effectiveness of voice-based applications in handling a wide range of requests.:Discovery of Relevant Entities: There is a lack of measures to discover the right entity that can fulfill specific user requests expressed in natural language, especially when integrating web entities like sensors and actuators.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "IFTTT Integration: Leveraging IFTTT (If This Then That), a platform that hosts more than 200 web entities capable of conducting thousands of operations. IFTTT provides a web-based interface for programming event-driven and context-aware actions (recipes) among selected channels.:Improved NLP Engine: Developing an improved Natural Language Processing (NLP) engine that can understand more complicated requests, including conditions and actions. This engine uses Conditional Random Fields (CRF) to learn how to identify the condition part (IF clause) and the action part (THEN clause) from sample queries.:Semantic Annotation of Web Entities: Creating a catalog of semantically annotated web entities to improve the discovery and selection of appropriate entities that can fulfill user requests. This involves using descriptions of public recipes and channels from IFTTT to build a pre-labeled corpus.:Voice-Based Interface: Implementing a voice-based interface that allows users to create recipes and deploy them on the IFTTT platform seamlessly. This interface supports the specification and execution of conditional WoT applications through voice commands.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Architecture Design: Designing a system architecture that includes components such as a cloud-based automatic speech recognition (ASR) engine, an NLP engine, an application composition engine, and an event-based platform for application execution.:Voice Query Processing: When a user issues a voice query, the speech data is transferred to the cloud-based ASR engine to be converted to text. The text is then processed by the NLP engine to understand its meaning, identifying the condition and action parts.:Entity Discovery and Selection: Using the semantically annotated catalog to retrieve relevant entities that match the user's query. If the NLP engine fails to fully understand the context, the Dialog Manager (DM) may ask the user for disambiguation or paraphrasing.:Recipe Creation and Deployment: The Recipe Creator module in the Application Composition Engine invokes IFTTT's web-based recipe creation API to create and deploy new recipes based on the user's voice commands.:Demonstration and Evaluation: Demonstrating the system through a mobile voice-based personal assistance application. The demonstration involves recording a request, processing it through the system, creating an IFTTT recipe, and verifying its execution.",
        },
      ],
    },
    {
      id: "1",
      title:
        "The integration of Blockchain and AI for Web 3.0: A security Perspective",
      description: "https://ieeexplore.ieee.org/document/10068672",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "2",
      title:
        "Mobile Applications for Privacy-Preserving Digital Contact Tracing",
      description: "https://ieeexplore.ieee.org/document/9861133",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "3",
      title:
        "PrivOff: Secure and Privacy-Preserving Data Management for Distributed Off-Chain Networks",
      description: "https://ieeexplore.ieee.org/document/10538763",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "4",
      title:
        "Data leaks to third parties in web services for vulnerable groups",
      description: "https://ieeexplore.ieee.org/document/10159942",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "5",
      title:
        "Privacy-Preserving Big Data Exchange: Models, Issues, Future Research Directions",
      description: "https://ieeexplore.ieee.org/document/9671686",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "6",
      title:
        "A Novel Load Balancing Strategy for Network Functions in Telecommunication Networks",
      description: "https://ieeexplore.ieee.org/document/10182945",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "7",
      title: "Smart City Middleware: A Survey and a Conceptual Framework",
      description: "https://ieeexplore.ieee.org/document/10379798",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "8",
      title: "Keyword-based information retrieval for the WoT",
      description: "https://dl.acm.org/doi/10.1145/3318216.3363378",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Scalability of Naming Conventions: Traditional hierarchical naming schemes, such as those used in Named-Data Networking (NDN), are not flexible enough to accommodate the vast and varied data produced by IoT devices. These schemes often fail to efficiently organize and retrieve data across diverse applications.:Efficiency of Data Retrieval: Existing cloud-based solutions for aggregating and processing IoT data require continuous connectivity and involve significant data transfer, resulting in lengthy response times and inefficiency.:Dynamic Configuration and Management: Managing the large and dynamic nature of IoT networks, where devices continuously join and leave, presents a challenge in terms of configuration and routing.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Keyword-based Information Retrieval (KIOT): A novel naming scheme that uses keywords instead of hierarchical names to describe data items produced by IoT devices. This approach allows more flexible and powerful data retrieval.:Information-Centric Networking (ICN) Techniques: Implementing ICN principles, such as using Bloom Filters (BFs) to encode keyword sets for efficient query matching and routing.:Automatic Network Configuration: A system that automatically configures the network and its routing tables, allowing arbitrary sets of keywords to be used for both data items and queries. This includes dynamically discovering network topology and creating routing tables.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Name Encoding: Using Bloom Filters to encode keyword sets. BFs provide a space-efficient way to represent sets of keywords, allowing for quick creation, merging, and membership testing of sets. This approach handles keywords without the need for a centralized registry.:Network Model: Implementing a tree-based network model where:Leaf Nodes: IoT devices that produce named data and are only aware of their parent.:Interior Nodes: Network devices that interconnect leaf nodes with the root node, maintaining a Forwarding Information Base (FIB) to route queries.:Root Node: The entry point to the network, responsible for issuing queries and collecting responses.:Network Configuration: Automatically configuring the network by: Broadcasting parent messages to find suitable parent nodes.:Using policies like load balancing and delay minimization to select parents.:Sending advertisement messages to propagate information about available data items.:Queries and Responses: Handling keyword-based queries by:Propagating Interest messages from the root to the leaf nodes based on matching BFs.:Returning Data messages from leaf nodes to the root, containing data items that match the query.:Prototype Implementation: Implementing the KIOT system in Java, with support for automatic configuration and query processing. The prototype is tested using Mininet to emulate large-scale networks and measure performance.",
        },
      ],
    },
    {
      id: "9",
      title: "Big Data Tools: Interoperability Study and Performance Testing",
      description: "https://ieeexplore.ieee.org/document/10386089",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer: "",
        },
        {
          id: 2,
          Problem: "Solution",
          answer: "",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer: "",
        },
      ],
    },
    {
      id: "1",
      title:
        "Human Team Behavior and Predictability in the Massively Multiplayer Online Game WOT Blitz",
      description: "https://dl.acm.org/doi/10.1145/3617509",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Complexity of Team-Based MMOGs: These games exhibit intricate and dynamic behaviors due to their complex and nondeterministic rules.:Lack of Study on WOT Blitz: Despite the game's popularity, it has not been extensively studied, particularly in terms of the predictability of system variables and team behavior.:Need for Insight into Game Mechanics: Understanding the organizational principles and scaling behavior within the game can provide valuable insights into the underlying mechanics and player interactions.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Data Science and Complex Adaptive Systems Approach: Using a combination of data science techniques and theories from complex adaptive systems to analyze the game at a population level.:Statistical and Predictive Analysis: Applying statistical models to identify power-law behaviors and predictability within the game. This includes the use of hierarchical clustering and linear regression to understand and quantify the predictability of performance measures.:Focus on Key System Variables: Identifying and analyzing key system variables such as the win rate, kills/deaths ratio, and damage ratio to understand their impact on game outcomes and predictability.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Data Collection: Gathering extensive data on the performance of vehicles (tanks) in the game, including summary statistics from millions of matches.:Scaling Behavior Analysis: Investigating the scaling behavior of the win rate in relation to other system variables using double logarithmic plots to identify power-law relationships.:Hierarchical Clustering: Performing hierarchical clustering on the data to classify vehicles and understand the similarity of performance characteristics across different tiers.:Predictive Modeling: Using linear regression and the LMG method to quantify the importance of predictor variables and assess the predictability of game outcomes. Nonlinear regression models, such as MARS, are also employed to capture more complex relationships.:Evaluation of Predictability: Evaluating the performance of predictive models using metrics like R-squared (R²) and the Matthews correlation coefficient (MCC) to determine the quality of predictions and the impact of different variables.",
        },
      ],
    },
    {
      id: "2",
      title:
        "Energy-Delay Optimization for Ultra-Reliable Low Latency Communication",
      description: "https://ieeexplore.ieee.org/document/9457863",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Resource Constraints: Providing URLLC services for devices with limited resources or end-user devices operating on shared or unlicensed spectrum is challenging. The constraints include energy, delay, and channel availability.:Energy Consumption: Increasing transmission power to meet the stringent delay deadlines for URLLC applications can rapidly drain the battery of end-user devices with limited resources.:Complexity of Optimization: The challenge of balancing energy consumption, delay, and bit error rate (BER) in a way that is computationally feasible and efficient.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Constrained Partially Observable Markov Decision Process (CPOMDP): Formulating the energy-delay optimization problem as a CPOMDP to minimize energy consumption while adhering to constraints on delay and BER.:Belief Constraint Markov Decision Process (CMDP): Transforming the CPOMDP into a CMDP to solve the problem using mixed-integer linear programming (MILP), reducing computational complexity.:Heuristic Immediate Rewards and Costs: Utilizing heuristic values for rewards and costs to simplify the optimization process while maintaining performance.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Model for EDMF:Radio and Frame Models: Using different numerologies and modulation schemes (e.g., BPSK, QAM) to model the radio environment.:HARQ Model: Implementing a Hybrid Automatic Repeat Request (HARQ) model to account for acknowledgments (ACK) and negative acknowledgments (NACK).:Wireless Channel Model: Modeling the wireless channel as a finite state Markov chain (FSMC) to represent Rayleigh fading.:Energy Dynamics Models: Assuming energy harvesting capabilities for end-user devices and modeling energy consumption for processing and transmission.:CPOMDP Formulation:Defining the state space as a combination of stored energy, channel state, HARQ state, and retransmission attempts.:Defining the action set as {sleeping, retransmit}.:Establishing transition probabilities :based on energy dynamics and HARQ outcomes.:Defining observations and belief updates based on current states and actions.:Setting immediate rewards for energy consumption, bit error rate, and delay.:Solving EDMF with MILP:Estimating long-term rewards and costs using dynamic programming and MILP.:Applying a pruning method to select optimal actions that satisfy constraints on BER and delay.:Iteratively updating beliefs and evaluating policies to converge on an optimal solution.",
        },
      ],
    },
    {
      id: "3",
      title:
        "Software Performance Engineering of a Web ServiceBased Clinical Decision Support Infrastructure",
      description: "https://dl.acm.org/doi/10.1145/974044.974066",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Integration and Interoperability: Ensuring seamless integration and interoperability of CDSSs, such as Artificial Neural Networks (ANNs), Case-Based Reasoning (CBR) tools, and alert detection systems within the Neonatal Intensive Care Unit (NICU) and other medical domains.:Performance Limitations: Addressing potential performance limitations that could hinder real-time processing and decision-making, which are critical in high-risk medical environments like neonatal care.:Scalability and Reliability: Ensuring the system can scale to accommodate multiple users and maintain reliability, especially when accessed remotely via wireless devices.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Web Services-Based Infrastructure: Developing a web services-based infrastructure called OPNI-Web that supports the integration and access of CDSSs and medical databases from distributed medical domains. This infrastructure aims to provide real-time support for physicians in obstetrical, perinatal, and neonatal care.:Software Performance Engineering (SPE): Applying SPE techniques from the early design stages to ensure the system meets its performance requirements. This involves using layered queuing networks to model the performance and identify potential bottlenecks.:Real-Time Data Processing: Incorporating real-time data processing capabilities by integrating CDSSs into the Hospital Information System (HIS) and making them accessible through web services. This approach supports the physician's decision-making process by providing timely and accurate predictions and alerts.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Requirements Analysis: Identifying functional and non-functional requirements, including performance targets such as system capacity and average response time for users.:System Design: Designing the OPNI-Web infrastructure with components like SOAP for data transmission, XML for message encoding, and WSDL for service description. The system supports core web services (basic functionalities) and composite web services (higher-level applications combining multiple core services).:Performance Modeling: Creating a layered queuing network model to evaluate the system's performance. This model incorporates key tasks and their service demands, hardware devices, and network transmission delays.:Implementation and Evaluation: Implementing a prototype system and conducting performance analysis using the LQNS analytic solver. The analysis identifies bottlenecks and explores solutions such as multithreading and replication of tasks and processors to improve response times.:Sensitivity Analysis: Conducting sensitivity analysis to assess the impact of varying service times and database operations on system performance. This helps in understanding how different factors influence the overall response time and capacity.",
        },
      ],
    },
    {
      id: "4",
      title: "Performance Study of Mobile Edge Computing",
      description: "https://ieeexplore.ieee.org/document/10010522",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Increasing Data and Computational Demand: The surge in internet-connected devices generates a massive amount of data that needs to be processed quickly, which traditional cloud computing cannot efficiently handle due to propagation latency.:Energy Consumption: Mobile and IoT devices have limited battery life and must manage extensive data processing, which can lead to high energy consumption.:Latency: Meeting the latency requirements of modern applications (such as gaming, social media, and autonomous driving) is critical, and current cloud solutions often fail to provide the necessary low latency.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Three-Layer System Architecture: Implementing a three-layer architecture consisting of IoT devices, MEC servers, and cloud computing data centers. This architecture aims to distribute the computational load more effectively and reduce latency.:Energy and Time Coefficients: Using energy and time coefficients to optimize the cost of task offloading in MEC environments. This helps in minimizing the system's total energy consumption and processing time.:Dynamic Resource Allocation: Employing dynamic resource allocation strategies to balance the load across MEC servers and ensure efficient utilization of resources.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Architecture: The system architecture consists of three layers:IoT Devices Layer: Generates application tasks, characterized by limited computing power and battery life.:MEC Servers Layer: Provides intermediate processing power closer to IoT devices, offering lower latency compared to cloud servers.:Cloud Computing Layer: Comprises geographically dispersed data centers with significant processing capacities but higher network delays.:Cost Calculation Model: Developing a cost calculation model for each layer:IoT Devices: The local dynamic energy consumption and task execution time are calculated based on CPU cycles, operating frequency, and voltage supply.:MEC Servers: Data transfer",
        },
      ],
    },
    {
      id: "5",
      title:
        "Energy-Efficient Partial Offloading in Mobile Edge Computing Under a Deadline Constraint",
      description: "https://ieeexplore.ieee.org/document/9637065",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Task Processing Latency: Ensuring that tasks are processed within a specific deadline, which is critical for delay-sensitive applications like video processing and autonomous driving.:Energy Consumption: Minimizing the energy consumption of mobile devices (MDs) during task processing and data transmission. Mobile devices have limited battery life, making energy efficiency a crucial consideration.:Optimal Offloading Decisions: Determining the most appropriate offloading strategy to fully utilize the computing capabilities of edge servers while balancing latency and energy consumption.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Integer Programming Formulation: Formulating the task offloading problem as a deadline-constrained energy-minimization integer program. This mathematical model aims to minimize the energy consumption of MDs while ensuring that all tasks are completed within the specified deadline.:Whale Optimization Algorithm (WOA): Developing a partial offloading and scheduling method based on the Whale Optimization Algorithm. The WOA is a metaheuristic algorithm inspired by the bubble-net hunting strategy of whales, and it is used to find high-quality solutions to complex optimization problems.:Probability Model-Based Mapping Operator: Employing a probability model-based mapping operator to convert an individual whale (represented by a continuous real vector) into a valid offloading solution represented by a task sequence. This operator ensures that the generated task sequence is of high quality.:Greedy Assignment Strategy: Implementing a greedy assignment strategy to decide whether each task in the sequence should be processed locally on the MD or offloaded to the edge server. This strategy helps in minimizing energy consumption while meeting the deadline constraint.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Problem Formulation: Defining the task offloading problem as an optimization model with the objective of minimizing the MD's energy consumption while satisfying the task completion deadline.:Whale Optimization Algorithm: Using the WOA framework to iteratively explore better task sequences and offloading solutions. The algorithm includes three main actions: encircling prey, bubble-net hunting, and random search.:Probabilistic Mapping Operator: Converting the continuous positions of whales into discrete task sequences using a probability model-based mapping operator. This operator ensures that solutions close to the current best solution inherit more characteristics from it.:Greedy Assignment Strategy: Applying a greedy assignment strategy to each task sequence generated by the mapping operator. The strategy evaluates the energy consumption and processing time for local and offloaded tasks and selects the option that minimizes energy consumption while meeting the deadline.:Simulation and Evaluation: Conducting extensive simulations to compare the proposed algorithm (PMWOA) with baseline algorithms such as LTF (Longest Task First), STF (Shortest Task First), FCFS (First-Come-First-Serve), and WOA with ROV (Ranked Order Value) mapping operator.",
        },
      ],
    },
    {
      id: "6",
      title:
        "EdgeFNF: Toward Real-time Fake News Detection on Mobile Edge Computing",
      description: "https://ieeexplore.ieee.org/document/10062503",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Rapid Spread of Fake News: Social media platforms like Twitter and Facebook facilitate the rapid spread of fake news due to their ease of access and broad reach. Detecting fake news quickly is vital to mitigate its negative impact on society.:Limited Computational Resources: Smartphones, which are the primary devices for sharing news on social media, have limited computational capabilities and often suffer from unreliable network connections.:Need for Real-time Processing: Real-time prediction and response are crucial for spotting fake news and preventing its spread. Traditional centralized cloud-based solutions may not provide the necessary speed and reliability for real-time detection.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Edge-to-Cloud Architecture: The EdgeFNF framework employs a multi-layered architecture consisting of edge, fog, and cloud layers. This design leverages the computational capabilities of edge devices (smartphones) and offloads processing tasks to higher network layers as needed.:Natural Language Processing (NLP) Techniques: The framework uses NLP techniques to preprocess and analyze social media data. Tools like the Natural Language Toolkit (NLTK) and the BERT (Bidirectional Encoder Representations from Transformers) model are employed for text processing and fake news detection.:Federated Learning: The study highlights the potential use of federated learning to deploy privacy-preserving deep learning models on mobile devices. This approach enables collaborative model training without compromising user data privacy.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Data Collection: The system collects data from social media platforms (e.g., tweets and posts) using mobile applications on iOS and Android devices.:Preprocessing at Edge Layer: Data preprocessing occurs at the edge layer, where mobile applications use NLP techniques to clean and prepare the data. This includes removing non-English characters, punctuation, stop words, and performing tokenization, stemming, lemmatization, and named entity recognition.:Offloading to Fog Layer: When the preprocessing task exceeds the mobile device's memory capacity, the task is offloaded to the fog layer for continued processing.:Detection at Cloud Layer: The preprocessed data is sent to the cloud layer, where a pre-trained BERT model detects fake news. The model is trained on datasets such as Wikipedia and BooksCorpus and fine-tuned to differentiate between real and fake news.:Notification and Feedback: The system sends notifications with the detection results (real or fake news) back to the source, providing real-time feedback to users.",
        },
      ],
    },
    {
      id: "7",
      title:
        "Establishing mobile ad-hoc networks in 802.11 infrastructure mode",
      description: "https://dl.acm.org/doi/10.1145/2030718.2030737",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Limitations of 802.11 Ad-Hoc Mode: Although mobile devices support 802.11 ad-hoc mode at the hardware level, the software layer often lacks support for ad-hoc routing and name resolution protocols. Modern mobile operating systems such as Android and iOS restrict ad-hoc functionality.:Network Performance: The 802.11 ad-hoc mode supports lower data rates compared to the 802.11 infrastructure mode (e.g., 11 Mbps vs. 54 Mbps and above for 802.11g/n infrastructure mode).:Mobility and Topology Control: Managing the mobility of devices and maintaining a stable ad-hoc routing topology is challenging, especially when devices move within the network.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Mobile Router Nodes (RONs): RONs are mobile devices that act as both access points (APs) and station devices (STAs). They create multiple virtual network interfaces on a single wireless network card to run in AP and STA modes simultaneously.:Mobile Station Nodes (STANs): STANs are standard 802.11-compliant devices such as smartphones or laptops that connect to the ad-hoc network via the infrastructure mode association to a RON. STANs perceive the entire ad-hoc network as a single-hop, AP-based Wi-Fi network.:Dynamic Network Configuration: RONs dynamically configure the network based on the availability and quality of nearby networks. They either create a new network or join existing networks to maintain network coverage and performance.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Architecture Design: Designing an architecture where RONs provide infrastructure mode networks to STANs and connect as stations to other RONs for multi-hop communication.:Network Setup and Mobility Management:RON Mobility: RONs dynamically create or join networks based on the coverage and quality of available networks. They periodically scan for networks and adjust their roles to maintain network stability and performance.:STAN Mobility: STANs maintain continuous network access by re-associating with different RONs as they move. The network uses the same SSID and IP range across all RONs, allowing STANs to keep their IP addresses and avoid ARP requests or timeouts.:Routing Protocol: Implementing a reactive routing protocol to discover and maintain routes between devices over mobility events. This protocol allows the network to adapt quickly to changes in topology.:Prototype Implementation and Demonstration: Developing a working prototype of the MA-Fi approach and demonstrating its ability to establish and maintain MANET-like multi-hop ad-hoc networks. The demonstration includes dynamic network scenarios with mobile RON and STAN devices.",
        },
      ],
    },
    {
      id: "8",
      title:
        "Fast/fair mobile localization in infrastructure wireless sensor networks",
      description: "https://dl.acm.org/doi/10.1145/1234822.1234828",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Localization Accuracy vs. Speed: Achieving accurate localization is crucial, but the speed at which mobile units can be localized is equally important. The balance between accuracy and speed needs to be maintained for effective localization.:Fairness in Localization: Ensuring that the localization response times are fair across different locations within the network. This means minimizing the variation in response times so that all mobile units, regardless of their location, receive timely localization services.:Impact of Anchor Deployment: The arrangement of anchors (devices with known locations) affects the speed and fairness of localization. Different deployment strategies (e.g., grid vs. random) and densities impact localization performance.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Heuristic Algorithm for Time Slot Scheduling: A polynomial-time heuristic algorithm is proposed to minimize localization delay and ensure fairness. This algorithm schedules time slots for anchors to transmit localization packets, avoiding collisions and retransmissions.:Grid vs. Random Deployment Analysis: The paper compares the performance of grid and random deployments of anchors. The results show that grid deployment generally provides faster and fairer localization compared to random deployment.:Optimization of Anchor Density: The study explores the impact of different anchor densities on localization performance. Higher anchor densities generally lead to better localization accuracy and fairness.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Definition of Metrics: Defining metrics for localization delay, localizable speed, and fairness. Localization delay is the time taken by anchors to respond to localization requests. Localizable speed is the speed at which a mobile unit can be localized accurately. Fairness measures the variation in localization delays across different locations.:Formulation of the Problem: Formulating the problem of fast and fair localization as minimizing the maximum localization delay in the localization area. This is related to the NP-complete minimum length broadcast frame problem.:Heuristic Scheduling Algorithm: Developing and analyzing a heuristic scheduling algorithm to allocate time slots to anchors. The algorithm ensures that anchors within 2R distance do not transmit in the same time slot, thus avoiding collisions.:Simulation and Analysis: Conducting simulations to evaluate the performance of the proposed algorithm. The simulations compare grid and random deployments across different anchor densities and levels of localization accuracy.",
        },
      ],
    },
    {
      id: "9",
      title:
        "A multi-agent infrastructure for developing personalized web-based systems",
      description: "https://dl.acm.org/doi/10.1145/1052934.1052936",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Personalization and Ubiquity: Personalization and ubiquity are crucial for online services, but they complicate the development of these systems due to the complexity of the required architectures. Specifically, the current infrastructures are not flexible enough to accommodate the configuration requirements of various application domains.:Integration and Scalability: The need for scalable architectures that can integrate heterogeneous software to support personalized interactions across different devices (e.g., desktop computers and mobile phones).",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Seta2000 Infrastructure: An infrastructure named Seta2000 for developing recommender systems that support personalized interactions. The infrastructure is based on a multi-agent architecture and includes a built-in recommendation engine.:Multi-Agent System Architecture: Utilizing a multi-agent system (MAS) architecture to manage the complexity of integrating heterogeneous components and supporting parallel execution of system activities. This architecture allows for the dynamic enabling and disabling of specialized facilities based on application domain requirements.:Agent-Based Components: Implementing specialized agents that manage different roles within the recommender system. These agents are designed to perform tasks such as communication with the user, management of interaction flow, maintenance of user models, generation of user interfaces, and selection of items to recommend.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Design: Designing the Seta2000 infrastructure with a focus on flexibility and scalability. The infrastructure includes software libraries for developing goal-based agents capable of autonomous behavior.:Role-Based Design: Defining a minimal set of roles needed to manage personalized interactions and associating specialized agents with each role. This design supports the integration of heterogeneous agents and ensures clean inter-module communication.:Development and Integration: Developing the core of the recommender engine by following a role-based approach. The agents are designed as structured entities with a dispatcher for managing inter-agent communication and a core for handling user sessions and service provision.:Action-Based Formalism: Using an action-based formalism to describe agent activities modularly and declaratively. This approach supports the selection and execution of actions based on agent state and service requests.:Prototype Implementation: Implementing and evaluating prototypes to demonstrate the flexibility and applicability of the infrastructure. Two prototypes, SeTA (an adaptive web store) and INTRIGUE (a personalized tourist information system), were developed using the Seta2000 infrastructure.",
        },
      ],
    },
    {
      id: "1",
      title:
        "Scholarly Social Machines: A Web Science Perspective on our Knowledge Infrastructure",
      description: "https://dl.acm.org/doi/10.1145/3394231.3397915",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Evolving Scholarly Methods: Researchers are increasingly adopting digital techniques enabled by the availability of digital data, computational power, and analytical tools. This evolution necessitates an understanding of the changing social structures and processes involved in knowledge generation and dissemination.:Complexity of Knowledge Infrastructures: Knowledge infrastructures are complex adaptive systems consisting of various interrelated systems with unique origins and goals. These systems are interconnected through standards, social practices, and individual behaviors.:Integration of Social Machines: Understanding scholarly knowledge infrastructures as ecosystems of interacting and evolving social machines is crucial. Social machines are sociotechnical systems where social and computational processes are interwoven.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Viewing Knowledge Infrastructures as Ecosystems: Adopting a holistic view of scholarly knowledge infrastructures as ecosystems of social machines. This perspective helps in understanding the interdependencies and interactions among different components of the infrastructure.:Scholarly Primitives: Identifying and leveraging scholarly primitives—basic functions common to scholarly activity across disciplines. These primitives form the foundation for higher-level scholarly projects and can inform the design and evolution of knowledge infrastructures.:Examples of Scholarly Social Machines: Illustrating the concept of scholarly social machines with examples such as Wikipedia, Zooniverse, myExperiment, and the SALAMI project. These examples highlight different aspects of social machines in knowledge infrastructures, such as collaborative content creation, citizen science, workflow sharing, and structural analysis.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Conceptual Framework: Developing a conceptual framework that views scholarly knowledge infrastructures as ecosystems of social machines. This framework is informed by web science and social science perspectives.:Descriptive Examples: Providing descriptive examples of scholarly social machines to illustrate the application of the conceptual framework. Each example identifies significant characteristics of the machines and their contributions to knowledge infrastructures.:Reflection on Scholarly Primitives: Reflecting on the examples to propose scholarly primitives associated with scholarly social machines.:These primitives include discovering, annotating, comparing, referring, sampling, illustrating, representing, sharing, and responding.:Long-Term View: Taking a long-term view of established knowledge infrastructures and decoding them as social machines that predate the web. This perspective helps in understanding the historical evolution of knowledge infrastructures and their future trajectories.:Future Directions: Discussing the potential future developments in knowledge infrastructures, including increased computational power, automation, and the adoption of artificial intelligence.",
        },
      ],
    },
    {
      id: "2",
      title:
        "The Web Is Missing an Essential Part of Infrastructure:An Open Web Index",
      description: "https://dl.acm.org/doi/10.1145/3312479",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Lack of Plurality in Search Engines: The current market is dominated by a few search engines (Google, Bing, Yandex, Baidu) that have their own indexes. This limits the diversity of perspectives and interpretations of web content.:Bias and Manipulation: Search engines inherently present biased results based on their algorithms and business interests, which can reinforce stereotypes, influence public opinion, and prioritize certain content providers (e.g., Google prioritizing YouTube).:Technical and Financial Barriers: Building and maintaining a comprehensive search engine index is technically challenging and costly, requiring significant resources for hardware, infrastructure, maintenance, and staffing.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Open Web Index (OWI): A public infrastructure project to create an open, searchable index of the web. This index would separate the infrastructure part of the search engine (the index) from the services part, allowing multiple services to be built on top of a shared infrastructure.:Publicly Funded Project: Advocating for public funding (e.g., by the European Union) to build and maintain the OWI. This would ensure the index is open to everyone and free from the control of private companies.:Data Sharing and Transparency: The OWI would collect and share usage data (search queries) among services to improve the index's accuracy and fairness. This data sharing would help mitigate the cold start problem for new services ",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Infrastructure Development: Building the OWI infrastructure responsible for crawling the web, indexing its content, and providing an interface/API for services to access the index.: Basic and Advanced Indexing: Dividing the indexing process into basic indexing (making data easily and rapidly processable) and advanced indexing (providing additional information like semantic annotations). Services can decide the extent to which they rely on the preprocessing infrastructure.: Usage Data Index: Creating an OWI Usage Data Index to collect, store, and query usage data. Services using the OWI would be required to share anonymized usage data, benefiting all participants.: Service Development: Encouraging the development of new search engines and other applications (e.g., vertical search engines, data analysis tools, AI applications) that utilize the OWI. This would foster plurality and innovation in the search engine market and beyond.",
        },
      ],
    },
    {
      id: "3",
      title:
        "A Web-Based Infrastructure for the Assisted Annotation of Heritage Collections",
      description: "https://dl.acm.org/doi/10.1145/3012287",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Manual Annotation Effort: Collecting annotations for large heritage collections is a time-consuming and labor-intensive task. Manual annotation requires significant effort from human experts.:Quality of Automated Annotations: Automated computational approaches often fall short in providing the same level of insight and semantic richness as human annotators, limiting their effectiveness.:Scalability and Collaboration: There is a need for a scalable system that can support collaborative efforts from geographically dispersed experts to enhance the annotation process.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Semantically-Annotated Graph Analysis (SAGA): An algorithm designed to assist and augment the annotation process by balancing the contributions of human annotators with the benefits of automatic suggestions. SAGA uses an entity relationship-driven approach to provide annotation suggestions.:Semantic Annotation by Group Exploration (SAGE): A web-based infrastructure that utilizes SAGA to facilitate collaborative annotation. SAGE allows experts to work together, either publicly or privately, to create comprehensive annotation sets for heritage collections.:Metadata-Driven Suggestions: By analyzing the emergent relationships between initial annotations, SAGA makes metadata-driven suggestions that help annotators quickly and accurately tag heritage materials.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Design: Designing SAGA and integrating it into the SAGE infrastructure. SAGA uses techniques such as tag co-occurrence, tag popularity, tag similarity, and neighbor voting to generate suggestions.:Evaluation: Evaluating SAGA and SAGE from the perspectives of suggestion accuracy, explicit user acceptance, and implicit user acceptance.:Suggestion Accuracy: Measuring how accurately SAGA can suggest relevant annotations compared to existing algorithms.:Explicit User Acceptance: Using the Technology Acceptance Model (TAM) and Software Usability Scale (SUS) surveys to evaluate the perceived usefulness and usability of SAGE.:Implicit User Acceptance: Conducting A/B testing to compare SAGA's suggestion acceptance and annotation productivity with other algorithms.",
        },
      ],
    },
    {
      id: "4",
      title:
        "Using mobile computing to provide a smart and secure Internet of Things (IoT) framework for medical applications",
      description:
        "https://onlinelibrary.wiley.com/doi/full/10.1155/2022/8741357",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Security of Healthcare Data: Ensuring the security of sensitive health data transmitted through IoT devices is critical. Healthcare data is complex and requires robust security measures to prevent unauthorized access and data breaches.:Handling and Analyzing Healthcare Data: Healthcare data is vast and complicated, making it challenging to handle and analyze effectively to derive useful information for decision-making.:Real-time Monitoring and Emergency Response: The need for real-time monitoring of patients and quick response during emergencies requires a reliable and efficient IoT framework.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Advanced Encryption Algorithm: Implementing a cutting-edge encryption algorithm to protect health data. The proposed system uses Kernel Homomorphic Two-Fish Encryption Algorithm (KHTEA) to enhance the security of the IoT network.:Data Preprocessing and Feature Extraction: Using normalization to preprocess data and remove irrelevant information. Principal Component Analysis (PCA) and Logistic Regression (LR) are used for feature extraction to select relevant features.:Genetic Algorithm for Feature Selection: A feature selection process based on genetic algorithms is employed to choose pertinent features, enhancing the overall efficiency of data processing.:Optimization Techniques: Employing Exponential Boolean Spider Monkey Optimization (EBSMO) to further boost the effectiveness of the encryption process.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Input Healthcare Dataset: Collecting organizational, economic, and medical data from AIH and APAC databases to create a comprehensive healthcare dataset.:Data Preprocessing Using Normalization: Normalizing the dataset to handle incorrect or incomplete data and reduce computational complexity.:Feature Extraction Using LR-PCA: Applying Logistic Regression and Principal Component Analysis to extract significant features from the dataset, aiding in effective data analysis and classification.:Feature Selection Using Genetic Algorithm: Utilizing a genetic algorithm to select optimal features, improving the performance of the data analysis process.:Data Encryption Using KHTEA: Implementing the Kernel Homomorphic Two-Fish Encryption Algorithm to secure healthcare data during transmission and storage.:Optimization Using EBSMO: Using Exponential Boolean Spider Monkey Optimization to enhance the encryption process's efficiency, reducing encryption and decryption times while maintaining high security levels.",
        },
      ],
    },
    {
      id: "5",
      title:
        "Factors affecting website reconstruction from the web infrastructure",
      description: "https://dl.acm.org/doi/10.1145/1255175.1255182",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Loss of Websites: Websites can be lost due to various reasons such as hard drive crashes, viruses, fires, or lack of backups, leading to the need for reconstruction from archives and caches.:Resource Recovery: Determining the factors that influence the successful recovery of website resources from web archives and search engine caches.:Preservation Effort: Evaluating the effectiveness of the collective preservation effort of web archives and search engine caches in retaining web content.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Web-Repository Crawler (Warrick): Developing a crawler named Warrick that searches for missing website resources in various web repositories such as the Internet Archive (IA), Google, MSN, and Yahoo caches.:Experimental Reconstruction: Conducting an experiment where 300 randomly selected websites are crawled and reconstructed weekly over 14 weeks to evaluate the success of resource recovery from the WI.:Statistical Modeling: Creating a statistical model to predict the reconstruction success based on various factors such as Google’s PageRank, number of hops from the root page, and resource age.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Website Sampling and Crawling: Randomly selecting 300 websites from the Open Directory Project (ODP) and crawling them weekly using the Heritrix crawler to collect data on their resources.:Reconstruction with Warrick: Using Warrick to reconstruct the websites from the WI, comparing the recovered resources with the originally crawled resources.:Data Analysis: Analyzing characteristics of the websites over time, such as birth rate, decay, rate of change, and resource age, to understand their impact on recovery success.:Statistical Model Development: Performing regression analysis to develop a model that predicts the success of website reconstruction based on significant factors like PageRank, hops, and resource age.",
        },
      ],
    },
    {
      id: "6",
      title:
        "Recovering a Website’s Server Components from the Web Infrastructure",
      description: "https://dl.acm.org/doi/10.1145/1378889.1378911",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Client-Side Only Capture: The WI, consisting of search engine caches and web archives, typically captures only the client-side view of a web resource. This limitation means that while the content of a website can be recovered, the server-side components (scripts, databases, configurations) responsible for generating the content are not preserved.:Preservation Responsibility: Individuals and organizations often neglect to back up their websites properly, leading to potential loss of server-side components when websites are defunct due to various reasons such as technical failures or the end of their useful life.:Existing Solutions' Limitations: Traditional methods for preserving server components, such as exposing raw components or creating special crawlable pages, have limitations. They either do not integrate well with search engines or risk being treated as spam.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Erasure Codes and HTML Comments: Using erasure codes to embed server-side components within HTML comments across the website. This technique involves splitting server components into blocks and inserting these blocks into the client-side HTML pages as comments. When the pages are crawled by search engines, the embedded blocks are also captured.:Lazy Preservation: This approach leverages the existing behavior of the WI for lazy preservation, allowing the entire server-side components to be reconstructed from a subset of the client-side resources extracted from the WI.:Injection Mechanics: Implementing methods to inject server components into web pages in an unobtrusive way. This can involve compressing server components, segmenting them into blocks, and distributing these blocks across multiple pages to ensure redundancy and recoverability.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Proof-of-Concept Experiment: Conducting a proof-of-concept experiment to validate the feasibility of recovering server components using the proposed technique. An EPrints repository was used for this purpose.:Experimental Setup: Creating a digital repository, populating it with resources, and injecting server components into HTML comments using erasure codes. The repository was then made accessible on the web.:Data Collection and Analysis: Crawling the repository using Heritrix and reconstructing it using Warrick to evaluate the recovery success. The experiment monitored the recovery rate over several weeks to assess the effectiveness of the technique.:Evaluation of Injection Techniques: Comparing different methods for injecting encoded pieces into HTML pages and assessing the impact of frequent updates and changes to server and client-side resources.",
        },
      ],
    },
    {
      id: "7",
      title:
        "A wireless public access infrastructure for supporting mobile context-aware IPv6 applications",
      description: "https://dl.acm.org/doi/10.1145/381472.381555",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Scalability and Coverage: Ensuring the infrastructure can scale to cover metropolitan areas and handle a large number of users.:Security and Authentication: Providing secure and accountable access to the Internet, ensuring that users can trust the system and that the system is not vulnerable to exploitation.:Compatibility with Existing Applications: Supporting unmodified use of legacy Internet applications to ensure broad compatibility and ease of adoption.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Modified Mobile IPv6 Protocol Stack: Utilizing a modified Mobile IPv6 protocol stack that includes packet marking and network-level packet filtering at the edge of the wired network. This approach ensures secure access and accountability.:Public Access Architecture: Developing a public access architecture based on a wireless network of IEEE 802.11b compliant cells, connected to a trusted core network via access routers and a common gateway.:Token-Based Authentication and Packet Tagging: Implementing a token-based authentication system where users authenticate with an authentication server to obtain tokens. These tokens are used to tag packets, allowing them to be filtered and validated by access routers.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "System Design: Designing an architecture that includes wireless access points, access routers, a core network, and an authentication server. This design supports mobile IPv6 and provides secure and scalable public access.:Implementation of Modified Mobile IPv6 Stack: Implementing a modified Mobile IPv6 stack on client devices, which includes mechanisms for packet tagging and encryption.:Authentication and Authorization: Setting up an authentication server to manage user credentials and generate tokens. The server verifies user credentials and issues tokens for packet tagging.:Access Control Lists (ACLs): Using ACLs at access routers to validate packets based on their tokens and session keys. This ensures that only authorized packets are allowed through the network.:Handling Handover and Failures: Implementing mechanisms to support seamless handover between cells and recover from access router failures. This includes predictive token distribution and re-authentication processes.",
        },
      ],
    },
    {
      id: "8",
      title: "Towards Web of Things Middleware A Systematic Review",
      description: "https://arxiv.org/abs/2201.08456",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Integration Complexity: Integrating a wide variety of IoT devices and technologies into a coherent system is complex due to the heterogeneity of devices, protocols, and data formats.:Scalability and Interoperability: Ensuring that the middleware can scale to handle a large number of devices and maintain interoperability across different platforms and technologies.:Efficient Resource Management: Managing resources efficiently, including discovery, allocation, and monitoring of IoT devices, while ensuring performance and quality of service (QoS).",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Systematic Literature Review (SLR): Conducting a systematic literature review to classify and evaluate existing IoT middleware and WoT architectures, identifying their requirements, characteristics, and potential platforms.:Four-Layer WoT Architecture: Proposing a four-layer WoT architecture to address the requirements of IoT middleware. This architecture includes the Perception Layer, Network Layer, Middleware Layer, and Application Layer, each with specific roles and responsibilities.:Service-Oriented and Resource-Oriented Models: Leveraging both Service-Oriented Architecture (SoA) and Resource-Oriented Architecture (RoA) to provide flexible, scalable, and interoperable services for managing IoT devices and data.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Systematic Literature Review (SLR): Conducting a systematic review of existing literature on IoT middleware and WoT architectures. This includes identifying research questions, defining selection criteria, and analyzing relevant studies to extract data.:Classification and Analysis: Classifying IoT middleware and WoT architectures based on their characteristics, requirements, and design approaches. Analyzing their strengths and weaknesses to identify potential areas for improvement.:Mapping Requirements: Mapping the requirements of IoT middleware to the characteristics of WoT architectures. This involves comparing and analyzing the requirements of IoT middleware and the features offered by WoT architectures.:Evaluation of WoT Platforms: Identifying and evaluating 17 potential WoT platforms based on the proposed requirements. Assessing these platforms to determine their strengths and weaknesses in supporting WoT requirements.",
        },
      ],
    },
    {
      id: "9",
      title: "Toward Interoperability in a Web of Things",
      description:
        "https://www.ubicomp.org/ubicomp2013/adjunct/adjunct/p1565.pdf",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Lack of Standardization: There is no standard approach to building and supporting WoT platforms, which leads to interoperability issues among different systems.:Innovation vs. Standardization: While premature standardization could stifle innovation, there is a need for some degree of interoperability to avoid creating isolated islands of things that require significant effort for integration.:Complexity of Interoperability: Interoperability involves agreeing on fundamental issues such as how things are represented, found, and accessed on the web, which requires significant cooperation and widespread agreement on common models and best practices.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Hub-Centric Approach: A hub-centric approach consisting of four levels or stages of interoperability to balance the need for standardization with the flexibility required for innovation.:Web of Things (WoT) Hubs: Using WoT hubs to aggregate the web presence of many things, providing a repository for one or more types of things and a set of APIs for accessing and using them.:Mashup Platforms and Tools: Leveraging mashup platforms and tools to create applications by combining data and functionality from multiple physical and virtual data sources, thereby facilitating interoperability.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Levels of Interoperability: Proposing a staged approach with four levels of interoperability:WoT Core: At this initial stage, hubs expose things and catalogs of things using web architecture, allowing application developers to create applications using RESTful web services. This level offers minimal interoperability.:WoT Model: Agreement on basic approaches and models for describing things and their data, enabling the development of generic adapters for integration and interoperability.:WoT Hub: Agreement on implementation issues such as concrete representations, URLs, and standard schemes for describing and getting data from things, along with basic security mechanisms.:WoT Profiles: Agreement on detailed thing profiles and complex semantics, allowing deep integration of applications and interoperability across different hubs.:Validation through Demonstrator Project: Validating the proposed approach as part of the UK's Technology Strategy Board (TSB) funded Internet of Things Ecosystem Demonstrator project, involving eight IoT hubs in different domains to develop an agreed approach to IoT interoperability.:Interoperability Working Group: Establishing an interoperability working group to define the basic requirements and models for inter-hub interoperability, and specifying the minimum requirements for hubs to exchange data consistently.:Key Findings:Early Stages of Interoperability: The initial stages of interoperability (WoT Core and WoT Model) involve exposing things to the web and agreeing on basic models, allowing application developers to integrate and use data from different hubs with some effort.:Implementation Challenges: Moving to deeper levels of interoperability (WoT Hub and WoT Profiles) involves addressing more complex issues such as detailed representations, security mechanisms, and semantic agreements, which require significant cooperation and consensus.:Importance of Cooperation: Achieving higher levels of interoperability requires widespread agreement on common models and approaches, as well as an understanding of the benefits and costs involved.",
        },
      ],
    },
    {
      id: "1",
      title: "Web services: problems and future directions",
      description:
        "https://www.sciencedirect.com/science/article/abs/pii/S1570826804000058",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Security Issues: Web services face significant security challenges, such as ensuring the integrity, confidentiality, and authentication of messages exchanged between applications. Existing technologies like HTTPS and Kerberos provide some level of security, but additional measures are needed for end-to-end security in multi-hop scenarios.:Service Composition: Composing complex business processes using web services involves issues related to interoperability, scalability, and management of long-lived transactions. The lack of standardization and robust frameworks for service composition complicates the creation of reliable and efficient composite services.:Semantic Limitations: Current web services technology primarily addresses syntactical interoperability but lacks semantic understanding. This limitation hinders the automatic discovery, composition, and invocation of web services, which are essential for realizing the full potential of web services in dynamic environments.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Enhanced Security Standards: Development and adoption of standards such as WS-Security, XML Encryption, and XML Signature to provide a robust security framework for web services. These standards aim to ensure message integrity, confidentiality, and authentication.:Advanced Composition Languages: Introduction of languages like Business Process Execution Language for Web Services (BPEL4WS) and Web Services Choreography Interface (WSCI) to support the definition, execution, and management of complex service compositions. These languages provide constructs for defining business processes, handling exceptions, and managing transactions.:Semantic Web Services: Integration of Semantic Web technologies with web services to enhance their capabilities. This involves using ontologies and semantic descriptions (e.g., DAML-S) to enable machines to understand and process the capabilities and requirements of web services, thereby facilitating automatic discovery and composition.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review and Comparison: Reviewing existing technologies and approaches for distributed computing, such as CORBA, RPC, and EDI, and comparing them with web services to highlight their strengths and weaknesses.:Problem Analysis: Identifying and analyzing the key problems faced by web services in terms of security, composition, and semantics. This involves examining current practices, standards, and their limitations.:Proposing Solutions: Developing and proposing new standards, frameworks, and methodologies to address the identified problems. This includes enhancing existing protocols (e.g., SOAP, WSDL, UDDI) and introducing new ones (e.g., WS-Security, BPEL4WS, DAML-S).:Implementation and Evaluation: Implementing the proposed solutions and evaluating their effectiveness through case studies, experiments, and industry adoption. This step involves collaboration with industry stakeholders and standardization bodies to ensure the solutions meet real-world needs.",
        },
      ],
    },
    {
      id: "2",
      title:
        "Authentication and Authorization in Modern Web Apps for Data Security Using Nodejs and Role of Dark Web",
      description:
        "https://www.sciencedirect.com/science/article/pii/S1877050922021512",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Risk of Data Breaches: The increasing reliance on web applications by businesses, government bodies, and individuals heightens the risk of sensitive information being leaked, especially if websites are hacked. Sensitive information such as credit card details and bank account information can be sold on the dark web.:Security of User Data: Ensuring the security of user data to prevent unauthorized access and protect against data breaches is paramount. This includes both the authentication (verifying user identity) and authorization (controlling user access to resources) processes.:Role of the Dark Web: The dark web plays a significant role in the illegal trade of stolen data. Understanding how data is sold and utilized on the dark web is crucial for developing secure authentication systems.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "NodeJS for Authentication and Authorization: Utilizing NodeJS, along with its framework ExpressJS and other packages, to develop secure authentication and authorization systems. NodeJS is chosen for its robustness, extensive community support, and suitability for web development.:Multi-Factor Authentication (MFA): Implementing MFA to enhance security. MFA involves multiple layers of authentication, such as passwords, OTPs, email verification, and biometric authentication, to ensure that users are who they claim to be.:Hashing Algorithms: Using hashing algorithms like Bcrypt, SHA-1, etc., to securely store passwords. Adding salt and pepper to passwords before hashing to increase security and protect against rainbow table attacks.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Implementation of Authentication and Authorization: Developing a system where users must register and log in to access certain parts of the website. Only authenticated and authorized users can access specific routes and functionalities.:Registration and Login: Creating a registration form and a login system where user credentials are securely stored in a MongoDB database. Passwords are hashed and salted before storage.:Middleware for Authorization: Using middleware functions in NodeJS to check for session tokens or cookies that verify user authorization.If the user is not authorized, access to certain routes is denied.:Advanced Authentication Techniques: Incorporating multi-factor authentication methods to further secure the authentication process. This includes email verification, OTPs, and biometric authentication.:Integration with Modern Technologies: Exploring the use of blockchain and artificial intelligence to enhance security in future implementations. Blockchain can provide decentralized and tamper-proof security, while AI can detect and respond to threats in real-time.",
        },
      ],
    },
    {
      id: "3",
      title: "QOS of Web Service : Survey on Performance and Scalability",
      description:
        "https://www.researchgate.net/publication/269201118_QOS_of_Web_Service_Survey_on_Performance_and_Scalability",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Performance Issues: Web services face significant performance issues due to the complexity of distributed computing environments and the need to meet various client requirements. Performance is critical as it affects the user experience and the overall efficiency of web services.:Scalability Challenges: Scalability is crucial for web services to handle an increasing number of users and requests. Poor scalability can lead to bottlenecks and degraded performance, especially in client/server applications where shared resources can quickly become overloaded.:Quality Attributes: Ensuring high QoS involves addressing various attributes such as service time, reliability, execution price, availability, scalability, accessibility, capacity, integrity, robustness, stability, cost, security, and interoperability.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "QoS Categories and Attributes: Categorizing QoS attributes and defining measurable parameters for each category. This approach helps in systematically evaluating and improving the QoS of web services.:Enhanced Web Service Architectures: Developing and adopting advanced web service architectures that improve interoperability, flexibility, and scalability. These architectures include the use of XML, SOAP, WSDL, and UDDI for defining, discovering, and invoking web services.:Performance and Scalability Improvements: Implementing various techniques and frameworks to enhance the performance and scalability of web services. These include optimizing server response times, improving resource allocation, and using better scheduling algorithms.",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Literature Review: Conducting a comprehensive survey of existing literature on QoS attributes, performance, and scalability of web services. This review helps in identifying common issues and potential solutions.:Analysis of QoS Attributes: Analyzing the key QoS attributes that affect the performance and scalability of web services. The paper focuses on attributes such as latency, throughput, response time, capacity, availability, reliability, accuracy, robustness, stability, cost, security, and interoperability.:Proposed Frameworks and Techniques: Proposing various frameworks and techniques to address the identified issues. These include:QoS-Based Service Selection: Using a scalable method for selecting web services based on QoS attributes, which involves dividing the problem into sub-problems and using local search algorithms within each service class.:Hybrid Approach for Performance Enhancement: Proposing a hybrid approach that combines different methods to enhance the performance of web services. This includes using grid agents, semantic web technologies, and optimized mapping approaches.:Simulation and Prediction: Developing algorithms to simulate and predict the performance of web services, considering different service times and deployment environments. This helps in early estimation and continuous monitoring of performance parameters.",
        },
      ],
    },
    {
      id: "4",
      title:
        "Pareto-optimal Defenses for the Web Infrastructure: Theory and Practice",
      description: "https://dl.acm.org/doi/10.1145/3567595",
      details: [
        {
          id: 1,
          Problem: "Problem",
          answer:
            "Complexity and Interdependency: The web's security relies on a complex network of interdependent hosts, communication technologies, and trust relationships. This includes everything from routing and DNS to content delivery and the Public Key Infrastructure (PKI).:Ineffectiveness of Current Mechanisms: Current security mechanisms are often ineffective, especially against large-scale attacks by well-resourced adversaries such as nation-state actors. Many proposals exist to increase security, but their combined effectiveness and cost are not well understood.:Lack of Comprehensive Evaluation: There is a lack of comprehensive evaluations on how different security proposals can be combined, how effective they are in practice, and at what cost they come.",
        },
        {
          id: 2,
          Problem: "Solution",
          answer:
            "Graph-Based Analysis Using Stackelberg Planning: The authors propose a graph-based analysis method that uses Stackelberg planning. This method considers a rich attacker model and evaluates a multitude of security proposals, such as IPsec, DNSSEC, and Subresource Integrity (SRI), to determine the most effective combination of defenses.:Threat Model and Defender Model: The proposed methodology involves developing a detailed threat model covering various attack vectors (e.g., routing attacks, DNS attacks, and application-level attacks) and a defender model that includes different defensive actions, their associated costs, and potential dependencies for deployment.:Evaluation of Security Mechanisms: Analyzing the effectiveness and cost of deploying various security mechanisms by examining the infrastructure of the top 5,000 Alexa domains. The analysis includes considering different classes of attackers (e.g., small hacker groups, malicious infrastructure providers, and nation-state actors).",
        },
        {
          id: 3,
          Problem: "Methodology",
          answer:
            "Threat Model Development: Defining a comprehensive threat model that includes various types of attackers and attack vectors. This model is based on the potential impact of attacks on web infrastructure components, such as DNS servers, autonomous systems (ASes), and content delivery networks (CDNs).:Graph Representation: Using a property graph to represent web entities (domains, NSs, ASes, etc.) and their relationships. This graph is used to compute attack graphs and determine the impact and cost of different mitigations.:Stackelberg Planning: Applying Stackelberg planning, a two-level planning problem where the defender moves first to apply mitigations, and the attacker responds by planning the best attack. The objective is to find the most cost-effective combination of mitigations that minimize the attacker’s success.:Mitigation Strategies: Evaluating the cost and efficacy of different mitigation strategies, including:Application Layer Mitigations: Subresource Integrity (SRI), Content Security Policies (CSP), HTTPS, HSTS, and secure inclusions.:Transport Layer Mitigations: IPsec for securing packet transmission between ASes.:Resolution Mitigations: DNSSEC for authenticating DNS records and ensuring secure name resolution.:CA Mitigations: Certificate Transparency (CT) to detect misissued certificates and improve the trust in PKI.:Data Collection and Analysis: Collecting data on the configuration and security measures of the top 5,000 Alexa domains, including DNS records, routing information, geolocation, and CA information. Using this data to generate and analyze attack graphs and determine the effectiveness of different mitigations.",
        },
      ],
    },

    // { "id": "6", "title": "Paper 1", "description": "This is a short description for Tab 1." },
    // { "id": "7", "title": "Paper 1", "description": "This is a short description for Tab 1." },
    // { "id": "8", "title": "Paper 1", "description": "This is a short description for Tab 1." },
    // { "id": "9", "title": "Paper 1", "description": "This is a short description for Tab 1." },
  ],
};
