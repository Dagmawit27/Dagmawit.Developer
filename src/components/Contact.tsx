import "./contact.css";

export function Contact() {
  const phoneNumber = "0912345678"; 
  const telegramUsername = "Dagi_Eskedar"; 
  const whatsappNumber = "0912345678"; 
  const emailAddress = "youremail@example.com"; 

  const contactOptions = [
    {
      icon: "📞",
      title: "Phone Call",
      phone: phoneNumber,
      action: "Call now",
      link: `tel:${phoneNumber}`,
    },
    {
      icon: "💬",
      title: "Chat with Telegram",
      phone: `@ ${telegramUsername}`,
      action: "Chat now",
      link: `https://t.me/${telegramUsername}`,
    },
    {
      icon: "🎥",
      title: "Whatsup Video Call ",
      phone: phoneNumber,
      action: "Video Call now",
      link: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: "✉︎",
      title: "SMS Message",
      phone: phoneNumber,
      action: "Message now",
      link: `sms:${phoneNumber}`,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Easy to Contact Me</h2>
      <p className="contact-subtitle">
        I'm always ready to help you by providing the best services for you.
        I believe a good place to live can make your life better.
      </p>

      <div className="contact-grid">
        {contactOptions.map((option, index) => (
          <div key={index} className="contact-card">
            <div className="contact-header">
              <span className="contact-icon">{option.icon}</span>
            <h3 className="contact-sub-title">{option.title}</h3>
            </div>
            <p className="contact-phone">{option.phone}</p>
            <a href={option.link} target="_blank" rel="noopener noreferrer">
              <button className="btn contact">{option.action}</button>
            </a>
          </div>
        ))}
      </div>

     <div className="get-started">
        <h2>Ready to start your project?</h2>
        <p>
          I’d love to hear from you — whether it’s a new idea, collaboration, or freelance work.  
          Let’s create something impactful together.
        </p>
        <a href={`mailto:${emailAddress}`}>
          <button className="get-started-btn btn contact">Send me an Email</button>
        </a>
      </div>
    </section>
  );
}
