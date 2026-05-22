export default function Contact() {
  return (
    <div className="contact">
    <div className="contact-form">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button>Submit</button>
      </form>
    </div>
    </div>
  );
}