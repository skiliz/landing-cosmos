import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — UpPilot",
  description:
    "Informativa estesa sui cookie e sulle tecnologie di tracciamento utilizzate da UpPilot, ai sensi del Provvedimento del Garante Privacy del 10 giugno 2021.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedAt="23 aprile 2026"
      intro="La presente Cookie Policy spiega quali cookie e tecnologie simili sono utilizzati sul sito uppilot.com, per quali finalità e come l'utente può gestirne le preferenze. È redatta in conformità alle Linee guida del Garante per la protezione dei dati personali del 10 giugno 2021."
    >
      <section>
        <h2>1. Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro dispositivi, dove
          vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Oltre ai cookie, è
          possibile utilizzare altre tecnologie di tracciamento simili (es. pixel, local storage).
        </p>
      </section>

      <section>
        <h2>2. Tipologie di cookie utilizzati</h2>
        <h3>2.1 Cookie tecnici (necessari)</h3>
        <p>
          Utilizzati per garantire il corretto funzionamento del sito, la navigazione tra le pagine, la gestione della
          sessione di login e la sicurezza. Non richiedono consenso ai sensi dell&apos;art. 122 del Codice Privacy.
        </p>
        <h3>2.2 Cookie analitici</h3>
        <p>
          Utilizzati in forma aggregata per raccogliere informazioni sull&apos;uso del sito (numero di visitatori,
          pagine più visitate). Se anonimizzati e configurati in modo opportuno, sono assimilabili ai cookie tecnici.
        </p>
        <h3>2.3 Cookie di profilazione e marketing</h3>
        <p>
          Utilizzati per creare profili relativi all&apos;utente e inviare messaggi pubblicitari in linea con le
          preferenze manifestate. Richiedono il consenso esplicito dell&apos;interessato.
        </p>
        <h3>2.4 Cookie di terze parti</h3>
        <p>
          Alcuni cookie possono essere impostati da servizi di terze parti integrati nel sito (es. fornitori di
          analytics, widget social, player video). UpPilot non ha accesso diretto a tali cookie; per maggiori
          informazioni si rimanda alle privacy policy dei rispettivi fornitori.
        </p>
      </section>

      <section>
        <h2>3. Durata dei cookie</h2>
        <p>
          I cookie possono essere di sessione (cancellati alla chiusura del browser) o persistenti (memorizzati fino
          alla loro scadenza o alla cancellazione manuale). La durata massima dei cookie di profilazione è di 12 mesi,
          salvo rinnovo del consenso.
        </p>
      </section>

      <section>
        <h2>4. Gestione delle preferenze</h2>
        <p>
          All&apos;accesso al sito viene mostrato un banner che consente all&apos;utente di accettare, rifiutare o
          personalizzare le proprie preferenze. È possibile modificare in qualsiasi momento le preferenze tramite il
          link &ldquo;Gestisci cookie&rdquo; disponibile nel footer.
        </p>
        <p>
          In alternativa, è possibile disabilitare i cookie direttamente dalle impostazioni del browser utilizzato:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Titolare del trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati raccolti tramite cookie è UpPilot. Per maggiori informazioni sul
          trattamento dei dati personali si rimanda alla{" "}
          <a href="/privacy">Privacy Policy</a>. Per richieste scrivi a{" "}
          <a href="mailto:privacy@uppilot.com">privacy@uppilot.com</a>.
        </p>
      </section>

      <section>
        <h2>6. Aggiornamenti</h2>
        <p>
          La presente Cookie Policy può essere aggiornata periodicamente. La versione corrente sarà sempre
          consultabile su questa pagina con indicazione della data di ultima modifica.
        </p>
      </section>
    </LegalPage>
  );
}
