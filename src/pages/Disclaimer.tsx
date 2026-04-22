import { LegalLayout } from "../components/LegalLayout";

export const Disclaimer = () => {
  return (
    <LegalLayout title="Disclaimer">
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">General Information Clause</h2>
        <p>The strategic information, actionable intelligence, and services provided by Cyb3r Shield are intended for tactical educational and operational defensive implementation. We provide this data “as is” for structural alignment.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">No Guarantee Statement</h2>
        <p>While we execute elite offensive paradigms to secure client architecture, the digital threat landscape perpetually evolves. We make no deterministic guarantee that absolute vulnerability elimination is mathematically possible across unbounded operational timeframes.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">External Links Disclaimer</h2>
        <p>Our operational dashboards and intelligence reports may feature secure routing links to external threat intelligence feeds. We assume zero responsibility for the structural integrity or operational logic governed by these independent external entities.</p>
      </section>
      <section>
        <h2 className="text-2xl font-headline text-white font-bold mb-4">Limitation of Responsibility</h2>
        <p>Cyb3r Shield will not be held structurally or financially accountable for damages originating from the misuse, misconfiguration, or unauthorized execution of defensive methodologies detailed within our strategic documentation by client-side or third-party personnel.</p>
      </section>
    </LegalLayout>
  );
};
