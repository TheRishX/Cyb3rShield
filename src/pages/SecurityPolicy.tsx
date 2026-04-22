import { LegalLayout } from "../components/LegalLayout";

export const SecurityPolicy = () => {
  return (
    <LegalLayout 
      title="Security Policy"
      description="Review Cyb3r Shield's Security Policy. We engineer environments operating under continuous breach attempts ensuring robust data protection."
      url="/security-policy"
    >
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Security Commitment</h2>
        <p>Our commitment to security is absolute. We engineer environments operating under the assumption of continuous breach attempts. Efficacy is our baseline metric; there is no compromise when defending structural integrity.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Data Protection Approach</h2>
        <p>Deploying state-of-the-art cryptographic safeguards, multifactor authentication, and continuous network telemetry monitoring, we ensure that your structural perimeter remains impenetrable to lateral movement and external parsing.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Vulnerability Handling</h2>
        <p>Detected vulnerabilities are assigned extreme priority algorithms. Once identified through either automated red-teaming or threat intelligence extraction, patches are formulated, tested, and pushed directly to the frontline perimeter efficiently.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Responsible Disclosure</h2>
        <p>We actively collaborate with elite security researchers globally. If an external entity identifies a theoretical bypass in our systemic infrastructure, we mandate a secure incident report via our encrypted channels, ensuring rapid remediation before any public dissemination.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Incident Response</h2>
        <p>In the event of an active cyber incident, our rapid response protocols initialize instantaneously. Isolation procedures lock down critical nodes, forensic analysis isolates the intrusion vector, and algorithmic recovery mechanisms restore secure state logic.</p>
        <div className="mt-8 p-6 border-l-2 border-primary bg-primary/5 text-white/90">
          <p className="font-mono text-sm leading-relaxed text-zinc-300"><strong className="text-white">Key Message:</strong> Security is embedded in every layer of operation. It is not an add-on; it is the core foundation.</p>
        </div>
      </section>
    </LegalLayout>
  );
};
