import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — UpPilot",
  description:
    "Informativa sul trattamento dei dati personali di UpPilot ai sensi del Regolamento (UE) 2016/679 (GDPR) e della normativa italiana applicabile.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="23 aprile 2026"
      intro="La presente informativa descrive come UpPilot raccoglie, utilizza e protegge i dati personali degli utenti che accedono al sito uppilot.com e utilizzano i relativi servizi. Il trattamento avviene nel rispetto del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 come modificato dal D.lgs. 101/2018."
    >
      <section>
        <h2>1. Titolare del trattamento</h2>
        <p>
          Il Titolare del trattamento è UpPilot, con sede legale in Italia. Per qualsiasi richiesta relativa al
          trattamento dei dati personali è possibile scrivere a{" "}
          <a href="mailto:privacy@uppilot.com">privacy@uppilot.com</a>.
        </p>
      </section>

      <section>
        <h2>2. Tipologie di dati raccolti</h2>
        <p>UpPilot può raccogliere le seguenti categorie di dati personali:</p>
        <ul>
          <li>
            <strong>Dati di contatto e account:</strong> nome, cognome, email, ragione sociale, partita IVA, numero di
            telefono, password (conservata in forma crittografata).
          </li>
          <li>
            <strong>Dati di utilizzo:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, data
            e ora di accesso, interazioni con il prodotto.
          </li>
          <li>
            <strong>Dati di integrazione Meta (Instagram e Facebook):</strong> token OAuth, ID pagina/account,
            metadati dei contenuti pubblicati, esclusivamente per fornire le funzionalità di pubblicazione.
          </li>
          <li>
            <strong>Contenuti caricati:</strong> testi, immagini, video e file CSV/Google Sheets caricati per
            programmare la pubblicazione sui social.
          </li>
          <li>
            <strong>Dati di fatturazione:</strong> dati anagrafici e fiscali necessari all&apos;emissione delle fatture,
            gestiti tramite i provider di pagamento (es. Stripe), senza che UpPilot memorizzi i dati della carta.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Finalità del trattamento</h2>
        <p>I dati raccolti vengono trattati per le seguenti finalità:</p>
        <ul>
          <li>erogazione del servizio UpPilot (programmazione e pubblicazione automatica dei contenuti);</li>
          <li>gestione dell&apos;account utente, fatturazione e adempimenti fiscali;</li>
          <li>assistenza clienti e comunicazioni di servizio;</li>
          <li>miglioramento del prodotto tramite analisi aggregate e anonimizzate;</li>
          <li>invio di comunicazioni commerciali previo consenso esplicito dell&apos;interessato;</li>
          <li>adempimento di obblighi di legge.</li>
        </ul>
      </section>

      <section>
        <h2>4. Base giuridica</h2>
        <p>
          Il trattamento si basa sull&apos;esecuzione del contratto di servizio (art. 6.1.b GDPR), sul consenso
          dell&apos;interessato (art. 6.1.a GDPR) per le comunicazioni di marketing, sull&apos;obbligo di legge (art.
          6.1.c GDPR) per gli adempimenti fiscali e sul legittimo interesse (art. 6.1.f GDPR) per la sicurezza del
          servizio e la prevenzione degli abusi.
        </p>
      </section>

      <section>
        <h2>5. Integrazione con Instagram e Facebook (Meta)</h2>
        <p>
          UpPilot utilizza le Graph API ufficiali di Meta per pubblicare contenuti su Instagram e Facebook per conto
          dell&apos;utente. I token di accesso sono conservati in forma cifrata e utilizzati esclusivamente per le
          azioni autorizzate dall&apos;utente. L&apos;utente può revocare in qualsiasi momento l&apos;accesso dalle
          impostazioni del proprio account Meta.
        </p>
      </section>

      <section>
        <h2>6. Conservazione dei dati</h2>
        <p>
          I dati personali vengono conservati per il tempo necessario alle finalità indicate e, in ogni caso, non oltre
          10 anni per i dati contabili e fiscali. I dati dell&apos;account vengono eliminati entro 30 giorni dalla
          chiusura dell&apos;account, salvo obblighi di legge.
        </p>
      </section>

      <section>
        <h2>7. Destinatari dei dati</h2>
        <p>
          I dati possono essere comunicati a fornitori di servizi che agiscono come Responsabili del trattamento, tra
          cui: hosting cloud, provider di pagamento, servizi di email transazionale, provider AI (Anthropic Claude),
          Meta Platforms Ireland Ltd. per le API social. Non viene effettuata alcuna vendita di dati a terzi.
        </p>
      </section>

      <section>
        <h2>8. Trasferimenti extra-UE</h2>
        <p>
          Alcuni fornitori possono trattare dati al di fuori dello Spazio Economico Europeo. In tali casi UpPilot
          garantisce adeguate garanzie contrattuali (Clausole Contrattuali Standard approvate dalla Commissione
          Europea).
        </p>
      </section>

      <section>
        <h2>9. Diritti dell&apos;interessato</h2>
        <p>In qualità di interessato hai il diritto di:</p>
        <ul>
          <li>accedere ai tuoi dati personali (art. 15 GDPR);</li>
          <li>chiedere la rettifica o la cancellazione (art. 16 e 17 GDPR);</li>
          <li>chiedere la limitazione del trattamento (art. 18 GDPR);</li>
          <li>opporti al trattamento (art. 21 GDPR);</li>
          <li>ricevere i tuoi dati in formato strutturato (portabilità, art. 20 GDPR);</li>
          <li>revocare il consenso in qualsiasi momento;</li>
          <li>proporre reclamo al Garante per la Protezione dei Dati Personali.</li>
        </ul>
        <p>
          Per esercitare i tuoi diritti scrivi a <a href="mailto:privacy@uppilot.com">privacy@uppilot.com</a>.
        </p>
      </section>

      <section>
        <h2>10. Modifiche alla presente informativa</h2>
        <p>
          UpPilot si riserva di aggiornare la presente informativa. La versione aggiornata sarà sempre pubblicata su
          questa pagina, con indicazione della data di ultima modifica.
        </p>
      </section>
    </LegalPage>
  );
}
