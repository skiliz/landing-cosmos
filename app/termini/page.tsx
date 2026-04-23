import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Termini di Servizio — UpPilot",
  description:
    "Condizioni generali di utilizzo della piattaforma UpPilot per la gestione e la pubblicazione automatica di contenuti sui social media.",
};

export default function TerminiPage() {
  return (
    <LegalPage
      title="Termini di Servizio"
      updatedAt="23 aprile 2026"
      intro="I presenti Termini regolano l'accesso e l'uso della piattaforma UpPilot, disponibile all'indirizzo uppilot.com. Utilizzando il servizio, l'utente accetta integralmente le presenti condizioni."
    >
      <section>
        <h2>1. Oggetto del servizio</h2>
        <p>
          UpPilot è una piattaforma software-as-a-service (SaaS) che consente a creator, social media manager e
          agenzie di pianificare, approvare e pubblicare in automatico contenuti su Instagram e Facebook attraverso le
          API ufficiali di Meta.
        </p>
      </section>

      <section>
        <h2>2. Account e requisiti</h2>
        <p>
          Per utilizzare il servizio è necessario creare un account fornendo dati veritieri e completi. L&apos;utente
          è responsabile della custodia delle proprie credenziali. L&apos;uso è riservato ai maggiorenni o a soggetti
          legalmente abilitati a rappresentare una società.
        </p>
      </section>

      <section>
        <h2>3. Piani, prezzi e pagamenti</h2>
        <p>
          I piani e i relativi prezzi sono indicati sulla pagina &ldquo;Prezzi&rdquo; di uppilot.com. I pagamenti
          avvengono tramite provider esterni (es. Stripe) con fatturazione mensile o annuale. In caso di mancato
          pagamento, UpPilot si riserva di sospendere l&apos;accesso al servizio.
        </p>
      </section>

      <section>
        <h2>4. Prova gratuita e recesso</h2>
        <p>
          Il piano Free è utilizzabile senza limiti di tempo con le funzionalità indicate. I piani a pagamento possono
          essere disdetti in qualsiasi momento dalla dashboard; la disdetta ha effetto al termine del periodo di
          fatturazione in corso, senza rimborsi per il periodo già pagato, salvo diversa disposizione di legge.
        </p>
      </section>

      <section>
        <h2>5. Contenuti dell&apos;utente</h2>
        <p>
          L&apos;utente mantiene la piena proprietà dei contenuti caricati su UpPilot (testi, immagini, video, piani
          editoriali). Concede a UpPilot una licenza non esclusiva e limitata al tempo necessario per erogare il
          servizio, esclusivamente per pubblicare tali contenuti sui canali autorizzati dall&apos;utente stesso.
        </p>
        <p>
          L&apos;utente garantisce di avere tutti i diritti sui contenuti caricati e si impegna a non pubblicare
          materiale illegale, diffamatorio, lesivo di diritti di terzi o che violi le policy di Meta (Instagram e
          Facebook).
        </p>
      </section>

      <section>
        <h2>6. Uso delle API Meta</h2>
        <p>
          UpPilot si interfaccia con le Graph API di Meta Platforms. L&apos;utente è tenuto a rispettare i{" "}
          <a href="https://developers.facebook.com/terms" target="_blank" rel="noopener noreferrer">
            Meta Platform Terms
          </a>{" "}
          e le Community Guidelines di Instagram e Facebook. La violazione di tali policy può comportare la
          sospensione dell&apos;account Meta collegato e/o del servizio UpPilot.
        </p>
      </section>

      <section>
        <h2>7. Uso dell&apos;AI Studio</h2>
        <p>
          UpPilot integra modelli di intelligenza artificiale forniti da terze parti (es. Anthropic Claude) per
          generare caption e piani editoriali. L&apos;utente è responsabile della revisione e dell&apos;uso dei
          contenuti generati e riconosce che tali contenuti possono contenere imprecisioni.
        </p>
      </section>

      <section>
        <h2>8. Limitazioni di responsabilità</h2>
        <p>
          UpPilot si impegna a garantire la continuità operativa del servizio ma non fornisce garanzie di funzionamento
          ininterrotto o privo di errori. Non è responsabile per ritardi o mancate pubblicazioni dovuti a interruzioni
          delle API Meta, malfunzionamenti di rete o cause di forza maggiore.
        </p>
        <p>
          Nei limiti consentiti dalla legge applicabile, la responsabilità complessiva di UpPilot verso
          l&apos;utente è limitata all&apos;importo effettivamente corrisposto dall&apos;utente negli ultimi 12 mesi.
        </p>
      </section>

      <section>
        <h2>9. Sospensione e cessazione</h2>
        <p>
          UpPilot può sospendere o chiudere l&apos;account dell&apos;utente in caso di violazione dei presenti
          Termini, uso fraudolento del servizio o attività che possano danneggiare la piattaforma o terzi.
        </p>
      </section>

      <section>
        <h2>10. Modifiche ai Termini</h2>
        <p>
          UpPilot si riserva il diritto di modificare i presenti Termini. Le modifiche saranno comunicate via email o
          tramite notifica nell&apos;interfaccia del prodotto almeno 30 giorni prima dell&apos;entrata in vigore.
          L&apos;uso continuato del servizio successivo a tale termine equivale ad accettazione delle modifiche.
        </p>
      </section>

      <section>
        <h2>11. Legge applicabile e foro competente</h2>
        <p>
          I presenti Termini sono regolati dalla legge italiana. Per le controversie è competente in via esclusiva il
          Foro del luogo di residenza del consumatore, se applicabile; in caso contrario, il Foro della sede legale
          di UpPilot.
        </p>
      </section>

      <section>
        <h2>12. Contatti</h2>
        <p>
          Per informazioni sui presenti Termini puoi scrivere a{" "}
          <a href="mailto:info@uppilot.com">info@uppilot.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
