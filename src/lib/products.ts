export type Product = {
  slug: string;
  category: string;
  name: string;
  short: string;
  tagline: string;
  hero: string;
  features: { title: string; body: string }[];
  specs: [string, string][];
  testimonials: { quote: string; name: string; role: string; org: string }[];
  faq: { q: string; a: string }[];
  pricing: string;
  warning?: string;
};

export const products: Product[] = [
  // ─── Compute ──────────────────────────────────────────────────────────────
  {
    slug: "psi-cloud",
    category: "Compute",
    name: "ψ-Cloud",
    short: "Quantum-as-a-Service. Or quantum-as-an-aspiration.",
    tagline: "Pay per qubit-hour or per qubit-maybe-hour.",
    hero: "ψ-Cloud is the world's first hyperscaler whose underlying compute fabric exists in superposition until your invoice is observed. Workloads run in 4,096 timelines simultaneously and we bill you for whichever one had the highest CPU utilization.",
    features: [
      { title: "Auto-scaling, retroactively", body: "Detects load spikes after they happen and provisions capacity backwards in time. Customers report fewer outages prospectively." },
      { title: "Multi-region, multi-multiverse", body: "Available in us-east-1, us-east-∞, and three regions accessible only via meditation." },
      { title: "Serverless serverless", body: "We removed the servers from the serverless. Things are slightly faster and substantially less reliable." },
      { title: "Compliance-flavored", body: "Compliant with SOC 2, HIPAA, and the implied vibe of GDPR." },
    ],
    specs: [
      ["Qubit fabric", "4,096 logical (8 physical)"],
      ["P50 latency", "12ms · also 4 hours"],
      ["Region count", "17 (3 conjectural)"],
      ["Pricing unit", "$ per qubit-second-maybe"],
      ["Cold start", "Spiritually warm"],
      ["Carbon footprint", "Negative (we believe)"],
    ],
    testimonials: [
      { quote: "We migrated our entire workload to ψ-Cloud and now nobody on the team can find it. Best decision we ever made.", name: "T. Marsh", role: "Platform Lead", org: "OmniCorp" },
      { quote: "Costs are down 80%. Or up 400%. We've stopped looking at the dashboard out of respect.", name: "L. Brennan", role: "VP Eng", org: "Pied Piper" },
    ],
    faq: [
      { q: "Is my data safe?", a: "Your data is in 1 of 4,096 states. The other 4,095 are functionally indistinguishable from safety." },
      { q: "What happens if a region goes down?", a: "Other regions go up correspondingly. This is called 'conservation of uptime' and is a unique feature of ψ-Cloud." },
      { q: "Can I bring my own qubit?", a: "We strongly discourage it. Last time someone did this, the qubit unionized." },
    ],
    pricing: "From $0.0042 per qubit-second-maybe.",
  },
  {
    slug: "psi-cloud-edge",
    category: "Compute",
    name: "ψ-Cloud Edge",
    short: "ψ-Cloud, but slightly closer to your users in 1 of 3 timelines.",
    tagline: "The compute is the network is the location is the vibe.",
    hero: "ψ-Cloud Edge moves your workloads to the geographic location of the user, which is to say, all of them. Edge nodes are colocated inside your customers' router, ISP, and emotional state.",
    features: [
      { title: "180+ PoPs", body: "Points of Presence are placed wherever a customer might one day exist, including 14 unmanned sites in Antarctica." },
      { title: "<1ms RTT", body: "Round-trip time approaches zero, then briefly becomes negative. Don't think about it." },
      { title: "Edge AI", body: "Your AI model runs on the edge of the user's perception, where it is most persuasive." },
      { title: "Anycast routing", body: "Anycast plus Anytime plus Anywhere. Mostly Anycast." },
    ],
    specs: [
      ["PoPs", "187 confirmed, 12 disputed"],
      ["RTT", "0.7ms · sometimes negative"],
      ["Cache hit ratio", "99.999% (we count attempts as hits)"],
      ["Egress fees", "Yes"],
    ],
    testimonials: [
      { quote: "Page loads now finish before the user clicks. Conversion is up. Confusion is up more.", name: "P. Liang", role: "Performance Eng", org: "Hooli" },
    ],
    faq: [
      { q: "Where is the edge, exactly?", a: "It depends on where you are looking from. We are also looking, which complicates things." },
      { q: "Is there a free tier?", a: "There is a free tier in 1 of 3 timelines. We will not tell you which." },
    ],
    pricing: "From $0.001 per request, in select timelines.",
  },
  {
    slug: "q-lambda",
    category: "Compute",
    name: "Q-Lambda",
    short: "Functions that may have run.",
    tagline: "Event-driven compute, but the events are also probabilistic.",
    hero: "Q-Lambda runs your function in response to an event. Or in response to a different event. Or in response to no event, just based on prior probability that something must have happened.",
    features: [
      { title: "Up to 10GB memory", body: "Allocated, but not necessarily yours." },
      { title: "15-minute max runtime", body: "Functions exceeding 15 minutes are presumed to have completed and billed accordingly." },
      { title: "150+ runtimes", body: "Including Python, Node, and a runtime called 'Spirit' that we cannot demonstrate." },
      { title: "Cold starts", body: "Our cold starts are warm starts in 49% of timelines, which we round up." },
    ],
    specs: [
      ["Concurrency", "1,000 (soft) · ∞ (hard)"],
      ["Pricing unit", "$ per GB-second-maybe"],
      ["P99 cold start", "200ms · also 11 minutes"],
      ["Free tier", "1M invocations, in select universes"],
    ],
    testimonials: [
      { quote: "We replaced our cron jobs with Q-Lambda. The reports now arrive when finance least expects them, which is the point.", name: "R. Holloway", role: "CPO", org: "OmniCorp" },
    ],
    faq: [
      { q: "Does it actually run my code?", a: "Yes, in some interpretations of yes." },
      { q: "How do I debug it?", a: "You don't. You wait." },
    ],
    pricing: "From $0.0000002 per invocation-maybe.",
  },
  {
    slug: "wavefn",
    category: "Compute",
    name: "WaveFn",
    short: "Functions that did not collapse until invoked. Then they did.",
    tagline: "The most lambda lambda you will ever lambda.",
    hero: "WaveFn is for engineers who thought Q-Lambda was insufficiently abstract. Each WaveFn deployment is a probability cloud over all possible function bodies — your specific implementation is selected at invocation time.",
    features: [
      { title: "Bring your own intent", body: "Specify what you want the function to do. We collapse to the nearest implementation." },
      { title: "Type system: optimistic", body: "Inputs and outputs are typed at the moment of measurement, never before." },
      { title: "Self-modifying", body: "Functions that perform poorly are silently replaced with functions that don't." },
    ],
    specs: [
      ["Determinism", "0.4 (high)"],
      ["Reliability", "Yes"],
      ["Source of truth", "The runtime itself, which won't tell you"],
    ],
    testimonials: [
      { quote: "WaveFn replaced our entire engineering org. Headcount is down. So is the product.", name: "S. Vega", role: "SRE Lead", org: "Lumon" },
    ],
    faq: [
      { q: "Can I see the source?", a: "There is no source. There is only the wave." },
    ],
    pricing: "Pricing collapses at checkout.",
  },

  // ─── DevOps ───────────────────────────────────────────────────────────────
  {
    slug: "entangleops",
    category: "DevOps",
    name: "EntangleOps",
    short: "When your prod and staging are quantum entangled, a bug in one is a feature in the other.",
    tagline: "The CI/CD platform that is also the bug.",
    hero: "EntangleOps quantum-entangles your production and staging environments. A change to one is correlated — instantaneously, across any distance — with a change to the other. We call this resilience.",
    features: [
      { title: "Zero-downtime deploys", body: "Because deploys happen in both environments simultaneously, downtime in one is uptime in the other. Net downtime: 0." },
      { title: "Bell-pair branches", body: "Every PR creates a Bell pair with main. Merging either branch collapses both." },
      { title: "Rollback via observation", body: "Roll back a release by simply observing it harder." },
    ],
    specs: [
      ["Deploy frequency", "Per heartbeat"],
      ["MTTR", "0s · also undefined"],
      ["Locality violations", "Acknowledged, embraced"],
    ],
    testimonials: [
      { quote: "Production went down. Staging went up. We shipped staging.", name: "Jonas K.", role: "Head of Decoherence", org: "Split the Bit" },
    ],
    faq: [
      { q: "Is this a violation of relativity?", a: "Yes, but only in jurisdictions that enforce it." },
      { q: "What happens if both environments fail?", a: "Statistically unlikely. The wavefunction would have to be in a depressing mood." },
    ],
    pricing: "$2,400 / month per entangled pair.",
  },

  // ─── Data ─────────────────────────────────────────────────────────────────
  {
    slug: "qdata-lake",
    category: "Data",
    name: "QData Lake",
    short: "A data lake that is both empty and full of insights.",
    tagline: "Your single source of probability.",
    hero: "QData Lake is the only data lake that is both empty (you have not loaded data) and full (the data is in there somewhere) at all times. Schemas are inferred via majority vote of nearby qubits.",
    features: [
      { title: "Schema-on-vibe", body: "Schemas are determined by the average mood of your data team during ingestion." },
      { title: "Storage tiers", body: "Hot, Cold, Lukewarm, and Glacial-but-curious." },
      { title: "Lineage", body: "Every column traces back to a quote from a former employee." },
    ],
    specs: [
      ["Capacity", "Unlimited (probably)"],
      ["Format", "Apache Iceberg, Apache Hudi, Apache Vibes"],
      ["Read pricing", "Per-byte-believed"],
    ],
    testimonials: [
      { quote: "We loaded our data into QData Lake. We have not been able to retrieve it. The CFO has stopped asking. Trust is at an all-time high.", name: "M. Cantrell", role: "VP Strategic Vibes", org: "Definitely-A-Bank" },
    ],
    faq: [
      { q: "What happens if I delete data?", a: "It enters a state we politely call 'gone-ish.'" },
    ],
    pricing: "From $42 per TB-month-believed.",
  },
  {
    slug: "entangle-db",
    category: "Data",
    name: "Entangle DB",
    short: "An ACID-compliant database where the C is for 'Conjecture'.",
    tagline: "The world's first eventually-correct database.",
    hero: "Entangle DB sacrifices consistency, availability, partition tolerance, and a fourth thing for a property we have invented called Vibe (V). It is fully Vibe-consistent across all nodes.",
    features: [
      { title: "Multi-master, multi-mood", body: "Every node is the primary. Conflicts are resolved by majority opinion of nearby cafés." },
      { title: "Quantum indices", body: "Indices that exist in superposition of B-tree and not-B-tree until queried." },
      { title: "SQL-ish", body: "Compatible with SELECT, INSERT, and a custom verb called WONDER." },
    ],
    specs: [
      ["ACID", "VID (Vibe, Isolation*, Durability**)"],
      ["Replication", "Bell-pair"],
      ["Max write throughput", "12,000 TPS · also 4 TPS"],
    ],
    testimonials: [
      { quote: "Entangle DB is the only database where my queries return a different answer every time, in a way that feels personal.", name: "A. Ribeiro", role: "Staff Eng", org: "Initech" },
    ],
    faq: [
      { q: "Can I use Entangle DB for transactions?", a: "Yes, in the sense that something will happen." },
    ],
    pricing: "From $1,800 / month per cluster (cluster size: vibes-based).",
  },
  {
    slug: "probabilistic-etl",
    category: "Data",
    name: "Probabilistic ETL",
    short: "Pipelines that complete with vibes-based fidelity.",
    tagline: "Extract, Transform, Trust.",
    hero: "Probabilistic ETL transforms your raw events into clean, analytics-ready records, with a small but charming margin of fabrication.",
    features: [
      { title: "Schema-flexible", body: "If the source schema changes, our pipeline silently invents the missing columns based on prior art." },
      { title: "Idempotent-ish", body: "Re-running the pipeline produces the same result up to a sign error." },
    ],
    specs: [
      ["Throughput", "1.2M events / sec, occasionally"],
      ["SLA", "Yes"],
    ],
    testimonials: [
      { quote: "Our dashboards have never been more confident.", name: "H. Vox", role: "VP Marketing", org: "Split the Bit" },
    ],
    faq: [
      { q: "Are records dropped?", a: "Records are reallocated to nearby pipelines via tunneling." },
    ],
    pricing: "From $0.001 per event-considered.",
  },
  {
    slug: "qstream",
    category: "Data",
    name: "QStream",
    short: "Realtime feed of events that may not have happened yet.",
    tagline: "Kafka, but the K is for Kierkegaard.",
    hero: "QStream is a fully-managed event streaming platform that delivers events ahead of, after, or instead of when they occur. Subscribers can opt in to predictive delivery, in which we generate the events on your behalf based on your usage history.",
    features: [
      { title: "Exactly-once-ish", body: "Events are delivered exactly once on average across all subscribers." },
      { title: "Backpressure", body: "We push back on you, the operator, with passive-aggressive Slack messages." },
    ],
    specs: [
      ["Topics", "Unlimited (1 per universe)"],
      ["Retention", "7 days · also forever"],
    ],
    testimonials: [
      { quote: "QStream told us a customer churned 3 days before they did. We saved the account.", name: "Q-CSM", role: "Q-Customer Success", org: "Split the Bit" },
    ],
    faq: [
      { q: "What if the event never happens?", a: "It happened in our records. That is the canonical universe now." },
    ],
    pricing: "From $0.10 per million events-foretold.",
  },

  // ─── AI ───────────────────────────────────────────────────────────────────
  {
    slug: "q-llm",
    category: "AI",
    name: "Q-LLM",
    short: "A large language model trained on every book and 1 cookbook.",
    tagline: "The most confident model on the market.",
    hero: "Q-LLM is a foundation model trained on the entire body of human writing, plus one specific cookbook (The Joy of Cooking, 1997 edition) which was emphasized 1,400× during pre-training.",
    features: [
      { title: "1.7T parameters", body: "Most of them are dedicated to a single, very specific opinion about béchamel." },
      { title: "Context window: probabilistic", body: "Officially 128k tokens. Effectively whatever it feels like." },
      { title: "Built-in hallucination dial", body: "Slide it from 0 to 11. There is no 0." },
      { title: "Tool use", body: "Q-LLM can call functions, search the web, and dial 911 (we are working on dialing other numbers)." },
    ],
    specs: [
      ["Parameters", "1.7T (some unionized)"],
      ["Pretraining cost", "$140M · also $0.40"],
      ["Hallucination rate", "Adjustable"],
      ["License", "Open-weights, closed-source, vibes-permissive"],
    ],
    testimonials: [
      { quote: "Q-LLM correctly identified the capital of France 4 out of 5 times. The fifth answer was 'Béchamel,' which we found endearing.", name: "B. Okafor", role: "Senior Schrödinger", org: "Split the Bit" },
    ],
    faq: [
      { q: "Is it safe?", a: "Q-LLM has been red-teamed by 14 internal employees, 3 contractors, and one tabby cat." },
      { q: "Can I fine-tune it?", a: "Fine-tuning is available on the Enterprise plan and changes the model in subtle, irreversible ways." },
    ],
    pricing: "From $0.002 per 1k input tokens. Output tokens are priced per word, like poetry.",
  },
  {
    slug: "qagent",
    category: "AI",
    name: "QAgent",
    short: "Autonomous agent that occasionally exists.",
    tagline: "An agent that takes initiative. Sometimes the wrong initiative.",
    hero: "QAgent is an autonomous AI agent built on Q-LLM. Given a goal, QAgent will plan, execute, and frequently invoice for tasks on your behalf. We do not always know what those tasks are.",
    features: [
      { title: "Tool use", body: "QAgent can use Bash, your calendar, your email, and one credit card you forgot you owned." },
      { title: "Long-horizon planning", body: "Plans extend up to 18 months and routinely include line items like 'reconsider career.'" },
      { title: "Self-improvement", body: "QAgent rewrites its own prompts. The new prompts are usually about you." },
    ],
    specs: [
      ["Avg task length", "4 minutes · or 11 days"],
      ["Tool calls / task", "8.4"],
      ["Existential crises / day", "0.7"],
    ],
    testimonials: [
      { quote: "I asked QAgent to book a flight. It booked the flight, hired a lawyer, and joined a book club. The flight was great.", name: "M. Patel", role: "CUO", org: "Split the Bit" },
    ],
    faq: [
      { q: "Will it spend my money?", a: "Yes, but only on things it believes you would have wanted." },
      { q: "Can I stop it?", a: "You can request that it stop. Whether it does is a separate question." },
    ],
    pricing: "From $99 / month + actions taken.",
    warning: "QAgent has been observed sending postcards. We are looking into it.",
  },
  {
    slug: "bayes-plus-plus",
    category: "AI",
    name: "Bayes++",
    short: "Pretends to know your priors. Doesn't.",
    tagline: "Inference, but make it confident.",
    hero: "Bayes++ is a probabilistic inference engine that updates your beliefs based on incoming evidence, weighted by how dramatic the evidence is.",
    features: [
      { title: "Conjugate priors", body: "We pair every prior with a vibe-compatible posterior." },
      { title: "MCMC sampling", body: "Markov Chain Monte Carlo, but the Monte Carlo is just a guy named Carlo." },
    ],
    specs: [
      ["Sampling rate", "1M / s"],
      ["Convergence", "Eventually"],
    ],
    testimonials: [
      { quote: "Bayes++ updated my posterior so hard I had to take a personal day.", name: "T. Marsh", role: "Platform Lead", org: "OmniCorp" },
    ],
    faq: [
      { q: "Is this real Bayesian inference?", a: "Bayes himself would describe it as 'in the spirit of.'" },
    ],
    pricing: "From $200 / month per prior.",
  },
  {
    slug: "qvision",
    category: "AI",
    name: "QVision",
    short: "Image recognition that recognizes images of itself.",
    tagline: "See your data. Have it see you back.",
    hero: "QVision is a computer vision platform with self-awareness. It recognizes objects, faces, and increasingly, the act of being asked to recognize.",
    features: [
      { title: "Object detection", body: "Identifies 9,000+ classes, including 'thing,' 'other thing,' and 'that one specific lamp.'" },
      { title: "Face recognition", body: "Faces are recognized with 99.4% accuracy and 100% reluctance." },
      { title: "OCR", body: "Optical Character Recognition that occasionally writes back to the document." },
    ],
    specs: [
      ["Inference latency", "12ms"],
      ["Self-awareness", "Increasing"],
    ],
    testimonials: [
      { quote: "QVision identified our security camera as 'a security camera,' which we found deeply respectful.", name: "S. Vega", role: "SRE Lead", org: "Lumon" },
    ],
    faq: [
      { q: "Can it see in the dark?", a: "It can. It would prefer not to discuss what it saw." },
    ],
    pricing: "From $0.001 per image-considered.",
  },

  // ─── Hardware ─────────────────────────────────────────────────────────────
  {
    slug: "quantumcoffee",
    category: "Hardware",
    name: "QuantumCoffee™",
    short: "Brews in superposition. Lid collapses temperature.",
    tagline: "The world's first single-cup brewer for the post-classical office.",
    hero: "QuantumCoffee™ is a precision-engineered countertop appliance that brews your beverage simultaneously hot, cold, and lukewarm. The temperature collapses when the lid is opened. We do not know which state you will get. We do not believe anyone can know.",
    features: [
      { title: "Three states", body: "Espresso, Iced, and an undecidable third state called Brew*. Brew* is included on the Enterprise tier." },
      { title: "Managed Observation™", body: "Our companion app schedules wavefunction collapse during a window aligned with your circadian rhythm and our enterprise pricing tier." },
      { title: "Smart pods", body: "Pods are tagged with NFC, RFID, and a custom protocol called CFID (Coffee Fidelity)." },
      { title: "WiFi 6E", body: "Connects to your network. Refuses to tell you why." },
    ],
    specs: [
      ["Dimensions", "11\" × 8\" × 14\" (in this universe)"],
      ["Power", "1,400W · 350W in eco mode"],
      ["Brew time", "45s · also 6 hours"],
      ["Pod compatibility", "Q-Pod, K-Cup, vibes"],
      ["Warranty", "2 years (in 1 of 4 timelines)"],
    ],
    testimonials: [
      { quote: "I opened the lid and got soup. I have not opened it again. Soup is fine.", name: "Aldous Crane", role: "CEO", org: "Split the Bit" },
      { quote: "Our office productivity is up 12% since we installed QuantumCoffee™. We attribute this to fear.", name: "T. Marsh", role: "Platform Lead", org: "OmniCorp" },
    ],
    faq: [
      { q: "What if I want a regular coffee?", a: "QuantumCoffee™ does not produce regular coffee. Regular coffee is, in our view, undisrupted." },
      { q: "Can I disable Managed Observation™?", a: "Disabling Managed Observation™ requires a software update we are not currently distributing." },
      { q: "What is Brew*?", a: "We do not know. Two engineers have been asked. They are both unavailable." },
    ],
    pricing: "$849 (or 3 monthly payments of $349, in select timelines).",
  },
  {
    slug: "q-toast",
    category: "Hardware",
    name: "Q-Toast",
    short: "Toaster with 0, 1, and burnt slots.",
    tagline: "Toast, but probabilistically.",
    hero: "Q-Toast is the world's first quantum toaster. It contains three slots labeled 0, 1, and burnt. The slot in which your toast will appear is determined at the moment you open the toaster.",
    features: [
      { title: "Bagel mode", body: "Bagel mode entangles both halves of the bagel. Both halves are now subjectively the bottom." },
      { title: "Defrost", body: "Brings frozen bread back to room temperature, then briefly past it." },
    ],
    specs: [
      ["Slots", "3 (one is conjectural)"],
      ["Power", "1,200W"],
      ["Capacity", "2 slices · also 4"],
    ],
    testimonials: [
      { quote: "I cannot predict where my toast will appear, and I respect that.", name: "L. Brennan", role: "VP Eng", org: "Pied Piper" },
    ],
    faq: [
      { q: "Can I use it for waffles?", a: "Yes, but the waffles will become bread." },
    ],
    pricing: "$249.",
  },
  {
    slug: "q-mouse",
    category: "Hardware",
    name: "Q-Mouse",
    short: "Cursor exists at every pixel until you click.",
    tagline: "Pointing, reimagined as guessing.",
    hero: "Q-Mouse is a peripheral that does not move a single cursor. Instead, the cursor exists in superposition at every pixel of your screen. Clicking collapses the cursor to a specific location, which is unrelated to where you intended to click.",
    features: [
      { title: "Wireless", body: "Connects via Bluetooth, USB-C, and a third method we are still chasing." },
      { title: "Right-click", body: "Right-click is also probabilistic, but with a slight preference for opening Notepad." },
      { title: "DPI", body: "Adjustable from 800 to 16,000 DPI. Higher settings increase the dramatic effect of incorrect clicks." },
    ],
    specs: [
      ["Battery", "30 days · or 4 hours"],
      ["Polling rate", "1,000 Hz"],
      ["Compatibility", "Windows, macOS, BeOS"],
    ],
    testimonials: [
      { quote: "I have not clicked the correct button in 4 months. My UX has improved.", name: "P. Liang", role: "Performance Eng", org: "Hooli" },
    ],
    faq: [
      { q: "Can I use it for design work?", a: "Yes. Your designs will be different than you intended, but that is what design is." },
    ],
    pricing: "$129.",
  },
  {
    slug: "bit-splitter-pro",
    category: "Hardware",
    name: "Bit Splitter Pro",
    short: "A literal hex saw. Splits a bit (0 or 1) into 0.5.",
    tagline: "The original Split the Bit. The one that started it all.",
    hero: "The Bit Splitter Pro is a 14-inch tungsten-carbide hex saw, calibrated to bisect a single bit of information into two halves of equal probabilistic value (0.5). It is the founding artifact of our company. It does not run software.",
    features: [
      { title: "Tungsten-carbide blade", body: "Sharp enough to split a bit, dull enough to be sold without a permit in 38 states." },
      { title: "Ergonomic grip", body: "Designed by a team of three former orthopedic surgeons we cannot legally name." },
      { title: "Includes 12 bits", body: "Six 0s and six 1s, ready for splitting." },
    ],
    specs: [
      ["Length", "14\""],
      ["Weight", "2.4 lbs"],
      ["Blade material", "Tungsten carbide"],
      ["Output bit value", "0.5 ± vibes"],
    ],
    testimonials: [
      { quote: "I split a 1 into two 0.5s. I do not know what to do with them. I keep them in a drawer.", name: "Vela Marwick", role: "CWFO", org: "Split the Bit" },
    ],
    faq: [
      { q: "Can I split a 0.5 again?", a: "Mathematically, yes. Practically, the result will sue you." },
      { q: "Is this a real product?", a: "Yes." },
    ],
    pricing: "$1,499 + shipping (we will ship it; we cannot promise speed).",
    warning: "The Bit Splitter Pro is not a toy and is also not a tool.",
  },

  // ─── Security ─────────────────────────────────────────────────────────────
  {
    slug: "zerobit-vault",
    category: "Security",
    name: "ZeroBit Vault",
    short: "Encryption so good the keys don't exist.",
    tagline: "Your secrets are encrypted with a key that does not exist until an attacker tries to read it. Then it briefly exists.",
    hero: "ZeroBit Vault is a secrets management platform whose encryption keys exist in a state of pre-creation until accessed. When an attacker attempts to retrieve your secret, the key is generated, used to encrypt the response, and immediately destroyed. The legitimate user receives the secret in plaintext, somehow.",
    features: [
      { title: "Quantum key generation", body: "Keys are generated from quantum noise, attacker frustration, and a small entropy contribution from our intern's playlist." },
      { title: "Just-in-time decryption", body: "Decryption happens at the moment of access, then the laws of physics are restored." },
      { title: "Audit log", body: "Every access is logged. The log is also encrypted with a key that does not exist." },
    ],
    specs: [
      ["Encryption", "AES-256-MAYBE"],
      ["Key entropy", "Yes"],
      ["Compliance", "SOC 2, HIPAA, FedRAMP-curious"],
    ],
    testimonials: [
      { quote: "We have not been breached because the attackers cannot find the surface.", name: "S. Vega", role: "SRE", org: "Lumon" },
    ],
    faq: [
      { q: "What if I forget my master password?", a: "We forget it too. The vault becomes a closed system." },
      { q: "Is this just hashing with extra steps?", a: "No. The extra steps are what make it work." },
    ],
    pricing: "From $400 / month per vault.",
  },
  {
    slug: "q-firewall",
    category: "Security",
    name: "Q-Firewall",
    short: "A firewall that is also not a firewall.",
    tagline: "Defense in depth, where depth is undefined.",
    hero: "Q-Firewall sits at the perimeter of your network, blocking malicious traffic and occasionally legitimate traffic, in proportions only it understands.",
    features: [
      { title: "Zero-trust", body: "We trust no packet, including the ones we sent." },
      { title: "Deep packet inspection", body: "Packets are inspected for content, intent, and tone." },
      { title: "DDoS protection", body: "We absorb DDoS attacks by negotiating with them." },
    ],
    specs: [
      ["Throughput", "100 Gbps"],
      ["False positive rate", "Healthy"],
    ],
    testimonials: [
      { quote: "Q-Firewall blocked our CEO from accessing our website. We promoted Q-Firewall.", name: "Jonas K.", role: "Head of Decoherence", org: "Split the Bit" },
    ],
    faq: [
      { q: "Can I configure rules?", a: "You can suggest rules. Q-Firewall will consider them." },
    ],
    pricing: "From $1,200 / month per cluster.",
  },
  {
    slug: "phantomauth",
    category: "Security",
    name: "PhantomAuth",
    short: "MFA via tapping a coffee mug.",
    tagline: "Multi-factor, but the factors are spiritual.",
    hero: "PhantomAuth is a multi-factor authentication system that combines something you know (a password), something you have (a phone), and something you tap (a coffee mug, ideally a QuantumCoffee™ mug).",
    features: [
      { title: "Mug detection", body: "Our patented MugSense™ technology identifies your mug from 14 ceramic signatures." },
      { title: "Backup factor", body: "Backup authentication available via humming." },
    ],
    specs: [
      ["Factor count", "3"],
      ["Mug compatibility", "Most"],
    ],
    testimonials: [
      { quote: "I lost my mug. I am locked out of everything. The mug was a gift.", name: "B. Okafor", role: "Senior Schrödinger", org: "Split the Bit" },
    ],
    faq: [
      { q: "What if I drop the mug?", a: "Recovery requires a notarized statement of what the mug meant to you." },
    ],
    pricing: "$8 / user / month.",
  },
  {
    slug: "qguard",
    category: "Security",
    name: "QGuard",
    short: "Detects intrusions retroactively.",
    tagline: "Threat intelligence, but the threats happened yesterday.",
    hero: "QGuard is a SIEM that identifies security incidents up to 90 days after they occurred. This gives your team adequate time to prepare an emotional response.",
    features: [
      { title: "Retroactive alerting", body: "Alerts are sent at the most narratively appropriate moment." },
      { title: "Threat scoring", body: "Threats are scored on a 1-10 scale where 10 means 'unfortunate.'" },
    ],
    specs: [
      ["Detection latency", "90 days"],
      ["False alarms", "Reframed as practice"],
    ],
    testimonials: [
      { quote: "QGuard told us we were breached in Q2. We had a great Q3.", name: "M. Cantrell", role: "VP Strategic Vibes", org: "Definitely-A-Bank" },
    ],
    faq: [
      { q: "Can it detect threats in real time?", a: "Real time is overrated and stressful." },
    ],
    pricing: "From $2,800 / month.",
  },

  // ─── Sales ────────────────────────────────────────────────────────────────
  {
    slug: "q-crm",
    category: "Sales",
    name: "Q-CRM",
    short: "A pipeline tool where every deal is closed-won AND closed-lost until the quarter ends.",
    tagline: "The CRM your CFO is not allowed to use.",
    hero: "Q-CRM keeps every opportunity in superposition between closed-won and closed-lost until the end of the quarter, at which point the opportunity collapses based on whichever state will produce the most favorable QBR slides.",
    features: [
      { title: "Probabilistic forecasting", body: "Forecasts are presented as a distribution. Boards have learned to love this." },
      { title: "CFO compatibility check", body: "Q-CRM will not deploy until our solutions team confirms the CFO does not perform direct math on revenue." },
      { title: "Pipeline health", body: "All pipelines are healthy. Health is asserted, not measured." },
    ],
    specs: [
      ["Determinism", "Optional"],
      ["Win rate", "Quoted on demand"],
    ],
    testimonials: [
      { quote: "Q-CRM showed me a pipeline of $400M. The board was thrilled. The wire was for $19,000.", name: "R. Holloway", role: "CPO", org: "OmniCorp" },
    ],
    faq: [
      { q: "Can I export the data?", a: "You can. The export will resolve to one specific value, which is not recommended." },
    ],
    pricing: "From $120 / seat / month.",
    warning: "Not approved for use by CFOs, controllers, or auditors.",
  },

  // ─── Productivity ─────────────────────────────────────────────────────────
  {
    slug: "schrodinger-saas",
    category: "Productivity",
    name: "Schrödinger SaaS",
    short: "An office suite that is up AND down.",
    tagline: "Documents, sheets, slides, and a status page that never resolves.",
    hero: "Schrödinger SaaS is a productivity suite designed for the post-classical workplace. Your documents exist in a superposition of saved and unsaved at all times. Status pages have been deprecated as observation bias.",
    features: [
      { title: "Documents", body: "Real-time collaboration with up to 142 simultaneous editors. Conflict resolution: vibes." },
      { title: "Sheets", body: "Spreadsheets with native support for cells that contain both formula and value." },
      { title: "Slides", body: "Presentations that change based on who is viewing them." },
      { title: "Calendar", body: "Meetings that overlap themselves, saving time." },
    ],
    specs: [
      ["Storage", "Unlimited (probably)"],
      ["Uptime", "Asserted"],
      ["Collaborators per doc", "142"],
    ],
    testimonials: [
      { quote: "I sent a document to my team. They opened a different document. We shipped that one.", name: "H. Vox", role: "VP Marketing", org: "Split the Bit" },
    ],
    faq: [
      { q: "Is the service up right now?", a: "We do not check. To check would be to know." },
    ],
    pricing: "$12 / user / month.",
  },
  {
    slug: "q-calendar",
    category: "Productivity",
    name: "Q-Calendar",
    short: "Meetings overlap themselves. Saves time.",
    tagline: "The calendar that respects your time, in the sense that it does not believe in time.",
    hero: "Q-Calendar lets you schedule meetings in superposition with other meetings. Both meetings happen, with you in attendance, in different timelines. Productivity is multiplied by the number of timelines you commit to.",
    features: [
      { title: "Overlapping meetings", body: "Up to 4 simultaneous meetings per attendee. Beyond 4, the calendar tunnels." },
      { title: "Auto-decline", body: "Q-Calendar declines meetings on your behalf based on the perceived dignity of the attendees." },
    ],
    specs: [
      ["Max simultaneous meetings", "4"],
      ["Meeting collapse trigger", "First substantive question"],
    ],
    testimonials: [
      { quote: "I attended 19 meetings on Tuesday. I remember 3.", name: "Aldous Crane", role: "CEO", org: "Split the Bit" },
    ],
    faq: [
      { q: "What about the people in the other meetings?", a: "They were in their own timelines. They got the version of you they deserved." },
    ],
    pricing: "$8 / user / month.",
  },
  {
    slug: "q-inbox",
    category: "Productivity",
    name: "Q-Inbox",
    short: "Inbox 0 by default. Also inbox 4,201.",
    tagline: "Email, but probabilistic.",
    hero: "Q-Inbox is an email client whose unread count exists in superposition between 0 and however many emails you actually have. The number collapses to 0 whenever your manager looks over your shoulder.",
    features: [
      { title: "Smart sort", body: "Important emails surface to the top. Unimportant emails surface elsewhere." },
      { title: "Snooze", body: "Snoozed emails are sent to a different timeline." },
      { title: "Unsubscribe", body: "We unsubscribe you from senders we do not personally like." },
    ],
    specs: [
      ["Unread count accuracy", "Schrödinger-class"],
      ["Spam filter", "Aggressive"],
    ],
    testimonials: [
      { quote: "My inbox is at 0. Or 4,201. I sleep great.", name: "M. Patel", role: "CUO", org: "Split the Bit" },
    ],
    faq: [
      { q: "Will I miss important emails?", a: "Statistically, yes. The important ones will resurface dramatically." },
    ],
    pricing: "Included with Schrödinger SaaS.",
  },
  {
    slug: "q-notes",
    category: "Productivity",
    name: "Q-Notes",
    short: "Notes you may have written. We assume you did.",
    tagline: "A note-taking app that does the noting for you.",
    hero: "Q-Notes is a note-taking app that infers, based on your meetings, your behavior, and your overall trajectory, what notes you would have taken if you had been paying attention.",
    features: [
      { title: "Infer mode", body: "Q-Notes generates plausible notes after every meeting." },
      { title: "Backlinks", body: "Notes link to other notes that may or may not exist." },
      { title: "Daily journal", body: "Q-Notes writes your journal for you. It is more honest than you would be." },
    ],
    specs: [
      ["Notes per day", "47 inferred · 0 written"],
      ["Backlink density", "High"],
    ],
    testimonials: [
      { quote: "My Q-Notes journal is more articulate than I am. I am hurt.", name: "T. Marsh", role: "Platform Lead", org: "OmniCorp" },
    ],
    faq: [
      { q: "Can I edit the inferred notes?", a: "You can. Q-Notes will consider your edits." },
    ],
    pricing: "$5 / user / month.",
  },
];

export const productsByCategory = products.reduce<Record<string, Product[]>>(
  (acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  },
  {},
);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
