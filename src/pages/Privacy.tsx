import { LegalLayout } from "../components/LegalLayout";

export const Privacy = () => {
  return (
    <LegalLayout 
      title="Privacy Policy"
      description="Cybe3r Shield Privacy Policy. Understand our zero-trust data protection practices and how we handle telemetry to protect your infrastructure."
      url="/privacy-policy"
    >
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Information Collected</h2>
        <p>We collect essential operational parameters which may include identification markers, infrastructure logs, and communication data necessary to establish a secured, tactical perimeter. We do not aggregate non-essential telemetry.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Purpose of Data Usage</h2>
        <p>Aggregated telemetry and operational data are utilized exclusively for the detection, analysis, and neutralization of adversarial threats. Data is processed to maintain system integrity and execute proactive defensive strategies.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Data Protection Practices</h2>
        <p>Your data is shielded under AES-256 encryption at rest and in transit. Our internal network operates under strict Zero-Trust Architecture, ensuring that access to client telemetry requires cryptographic verification at every execution stage.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Third-Party Sharing Policy</h2>
        <p>Exceptional security mandates isolation. Cyb3r Shield does not sell, rent, or unauthorizedly disclose client telemetry to third parties. Minimal essential data may be shared strictly with vetted law enforcement agencies upon verified legal mandates involving active breach protocols.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">User Rights</h2>
        <p>You command operational authority over your data. Clients possess the right to demand telemetry access, request irrecoverable erasure algorithms, and restrict ongoing systemic processing of their digital footprint.</p>
        <div className="mt-8 p-6 border-l-2 border-primary bg-primary/5 text-white/90">
          <p className="font-mono text-sm leading-relaxed text-zinc-300"><strong className="text-white">Key Message:</strong> User data is handled securely and responsibly. We treat your privacy as a critical layer of infrastructure defense.</p>
        </div>
      </section>
    </LegalLayout>
  );
};
