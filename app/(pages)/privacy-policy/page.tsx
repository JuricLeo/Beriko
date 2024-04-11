const PrivacyPolicy = () => {
  return (
    <main>
      <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
        <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Politika Privatnosti</h1>
        <div className="flex flex-col m-auto max-w-[600px]">
          <div className="mb-4">
            <h2 className="text-primary font-semibold">Uvod</h2>
            <p className="text-sm mt-2">
              Dobrodošli na Beriko.com! Vaša privatnost nam je važna. Ova
              Politika privatnosti objašnjava kako prikupljamo, koristimo,
              dijelimo i štitimo informacije u vezi s vašom upotrebom naše web
              stranice.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">
              Prikupljanje Informacija
            </h2>
            <p className="text-sm mt-2">
              Kada posjetite Beriko.com, možemo prikupljati određene informacije
              o vama, kao što su vaše ime, e-mail adresa, IP adresa, i druge
              informacije koje odlučite podijeliti.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">
              Korištenje Informacija
            </h2>
            <p className="text-sm mt-2">
              Koristimo prikupljene informacije kako bismo vam pružili i
              poboljšali naše usluge, razumjeli kako koristite našu web
              stranicu, te kako bismo komunicirali s vama.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">
              Dijelenje Informacija
            </h2>
            <p className="text-sm mt-2">
              Vaše informacije nećemo dijeliti s trećim stranama, osim u
              slučajevima kada je to zakonski obavezno ili je potrebno za
              pružanje naših usluga.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">Sigurnost</h2>
            <p className="text-sm mt-2">
              Predani smo zaštiti vaših informacija. Koristimo razne sigurnosne
              mjere kako bismo zaštitili vaše informacije od neautoriziranog
              pristupa, promjene, otkrivanja ili uništenja.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">Vaša Prava</h2>
            <p className="text-sm mt-2">
              Imate pravo zatražiti pristup, ispravak ili brisanje vaših osobnih
              podataka koje imamo. Ako želite iskoristiti svoja prava, molimo
              kontaktirajte nas.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">
              Promjene ove Politike Privatnosti
            </h2>
            <p className="text-sm mt-2">
              Možemo povremeno ažurirati ovu Politiku privatnosti. Ako napravimo
              značajne promjene, obavijestit ćemo vas putem naše web stranice.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-primary font-semibold">
              Kontakt
            </h2>
            <p className="text-sm mt-2">
              Ako imate bilo kakvih pitanja o ovoj Politici privatnosti, molimo
              vas da nas kontaktirate putem <a className="text-primary" href="mailto:beriko@beriko.com">beriko@beriko.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
