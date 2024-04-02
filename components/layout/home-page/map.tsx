export default function Map() {
  return (
    <section className="w-full h-[30rem] md:h-[20rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.3269462846215!2d17.13874197610674!3d45.98470097108719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767ce19be84c017%3A0x65dcaa821d6b7ec7!2sStjepana%20Radi%C4%87a%202%2C%2048350%2C%20Budan%C4%8Devica!5e0!3m2!1sen!2shr!4v1711969488254!5m2!1sen!2shr"
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
}
