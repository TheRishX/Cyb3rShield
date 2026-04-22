import { LegalLayout } from "../components/LegalLayout";

export const Terms = () => {
  return (
    <LegalLayout title="Terms & Conditions">
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">1. Introduction</h2>
        <p>Welcome to Cyb3r Shield. These Terms & Conditions outline the rules and regulations for the use of our tactical cybersecurity services and digital infrastructure. By accessing this system, we assume you accept these terms in full.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">2. Use of Services</h2>
        <p>Our platform and services are engineered for enterprise defense logic. Users agree to utilize these resources solely for lawful, authorized protective measures. Unauthorized scanning, probing, or offensive use against unconsented third-party systems is strictly prohibited.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">3. User Responsibilities</h2>
        <p>Clients are solely responsible for maintaining the confidentiality of any secure communications, credentials, or architectural insights shared. You must notify our command center immediately upon suspecting compromised credentials.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">4. Intellectual Property</h2>
        <p>Unless otherwise stated, Cyb3r Shield and/or its licensors own the intellectual property rights for all proprietary threat intelligence, scripts, and methodologies. All intellectual property rights are reserved.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">5. Limitation of Liability</h2>
        <p>While we operate with zero-trust absolute efficacy, Cyb3r Shield is not liable for indirect, incidental, or consequential damages resulting from a compromise of your systems outside our mandated scope of protection.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">6. Termination</h2>
        <p>We retain the absolute right to sever connections and terminate service immediately, without prior notice, if any user breached protective protocols or utilizes our infrastructure for adversarial acts.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">7. Governing Law</h2>
        <p>These terms shall be governed and construed in accordance with international cybersecurity compliance laws. Any disputes shall be submitted exclusively to the competent jurisdiction outlined during contract initiation.</p>
      </section>
    </LegalLayout>
  );
};
