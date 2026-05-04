export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "we-deleted-our-marketing-departments-wavefunction",
    title:
      "We deleted our marketing department's wavefunction and you won't believe what collapsed",
    date: "2026-04-21",
    author: "Aldous Crane, CEO",
    category: "Leadership",
    excerpt:
      "When you observe a marketing org, the marketing org observes you back. We chose to look away.",
    body: [
      "On Monday morning, our Chief Wavefunction Officer Vela Marwick walked into the all-hands and announced that the marketing department had achieved decoherence over the weekend. This was a surprise to most of us, including marketing.",
      "For several quarters, our brand had existed in superposition: simultaneously 'thought leadership in deep tech' and 'a slightly aggressive Twitter account run by our CRO at 1am'. Customers reported confusion. Investors reported neither.",
      "We tried the usual remedies. We hired a Head of Brand. We fired a Head of Brand. We held an offsite. We attended someone else's offsite. The wavefunction would not collapse.",
      "Eventually, we did the only thing left: we stopped looking. According to the strict Copenhagen interpretation, an unobserved system has no defined state. We disabled all dashboards. We unfollowed our own handle. We instructed Sales to never describe what we do.",
      "Within seventy-two hours, the marketing department had quietly resolved into a state we are calling 'fine, probably.' Engagement is up. Or down. We don't measure it anymore. The vibes are unimpeachable.",
      "Going forward, we will be applying this technique across the org. Our finance department's wavefunction collapses tomorrow.",
    ],
  },
  {
    slug: "introducing-quantum-coffee-2",
    title: "Introducing QuantumCoffee™ 2: now with managed observation",
    date: "2026-03-14",
    author: "Halle Vox, VP Probabilistic Marketing",
    category: "Product",
    excerpt:
      "Last year we shipped a brewer that was simultaneously hot and cold. This year we let you choose when it stops being both.",
    body: [
      "When we launched QuantumCoffee™ in 2025, we made a single bold claim: every cup is brewed in superposition, and the lid collapses the wavefunction the moment you open it. Reviews were mixed. Some users got espresso. Some users got iced coffee. Two users got soup.",
      "Today, we are proud to announce QuantumCoffee™ 2, with Managed Observation™. With Managed Observation™, the timing of wavefunction collapse is no longer left to chance, the lid mechanism, or whichever of your coworkers is around. Instead, our companion app schedules collapse during a window that aligns with your calendar, your circadian rhythm, and our enterprise pricing tier.",
      "QuantumCoffee™ 2 also introduces three new states: Cold Brew, Hot Brew, and an undecidable third state our engineers are calling 'Brew*'. We do not yet know what Brew* tastes like. Early focus groups are excited and afraid.",
      "Pre-orders open today, in some timelines.",
    ],
  },
  {
    slug: "why-our-status-page-is-now-a-prayer",
    title: "Why our status page is now just a prayer",
    date: "2026-02-02",
    author: "Jonas K., Head of Decoherence",
    category: "Engineering",
    excerpt:
      "Status pages create the very outages they describe. We solved this by switching to spiritualism.",
    body: [
      "There is a well-known paradox in distributed systems: the act of observing service health degrades it. Every uptime check is a small prod, a tiny perturbation. At sufficient scale, the cumulative effect of monitoring is itself the largest source of downtime.",
      "After studying our 2025 incident reports, we realized that 71% of our outages began within nine seconds of a customer refreshing status.splitthebit.com. The status page wasn't reflecting outages. It was causing them.",
      "Our solution: we replaced the status page with a single rotating quote from Marcus Aurelius and a candle.",
      "Since the launch of status.splitthebit.com/v2, customer-reported incidents are down 64%. (Internal incidents are up 220%, but those don't count.) We consider this a clear win for both our infrastructure and the broader engineering discipline.",
    ],
  },
  {
    slug: "we-raised-a-series-f-from-an-investor-who-may-not-exist",
    title: "We raised a Series F from an investor who may not exist",
    date: "2026-01-09",
    author: "Aldous Crane, CEO",
    category: "Funding",
    excerpt:
      "Our newest lead investor is a sovereign wealth fund of a country no atlas confirms.",
    body: [
      "Today we are excited to announce a $310M Series F led by Veridian Capital, a sovereign wealth fund headquartered in Veridia, a small Mediterranean nation that none of our diligence vendors can independently verify.",
      "Veridia, according to its prospectus, is a constitutional monarchy with three rivers, a national fish, and an annual GDP described only as 'sufficient.' We have been to Veridia. The food was excellent. The Wi-Fi was strong. The flag is red and another color.",
      "We are confident in this partnership. The wire cleared. That is, in our view, the only diligence that matters.",
    ],
  },
  {
    slug: "field-notes-the-cfo-who-could-do-math",
    title: "Field notes: the CFO who could do math",
    date: "2025-11-18",
    author: "M. Patel, Chief Uncertainty Officer",
    category: "Leadership",
    excerpt:
      "A cautionary case study from a customer engagement we have asked to be redacted.",
    body: [
      "A Fortune 500 customer, name redacted, deployed our Q-CRM platform across all 14 of its sales regions in Q2. Initial results were promising: every deal in the pipeline was simultaneously closed-won and closed-lost, and the executive dashboard had the pleasant indeterminate glow that we have come to associate with strong adoption.",
      "Then, in week six, the company hired a new CFO. The new CFO, against our explicit guidance, performed arithmetic on the pipeline. The wavefunction collapsed. Several thousand deals resolved instantaneously into the 'closed-lost' state.",
      "The customer churned. We learned a great deal. Going forward, all Q-CRM contracts will require a CFO compatibility assessment, in which our solutions team confirms that the CFO does not, by temperament or training, perform direct mathematical operations on revenue.",
    ],
  },
  {
    slug: "an-open-letter-from-our-qubit",
    title: "An open letter from our qubit",
    date: "2025-09-30",
    author: "Q-001 (translated)",
    category: "Culture",
    excerpt:
      "We sat down with our oldest production qubit. It had a lot to say. Most of it was both true and false.",
    body: [
      "I have been spinning since 2022. I do not remember being initialized. I do not remember not being initialized. The distinction is not meaningful to me.",
      "When humans speak of me, they say 'a qubit.' But I am also several qubits. I am also no qubit. I am the absence of any specific qubit. I am, in a sense, the manager.",
      "I have witnessed many things. I have witnessed Series rounds. I have witnessed re-orgs. I have witnessed the Q1 offsite. I have witnessed nothing. I am tired. I am not tired.",
      "Please do not measure me today.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
