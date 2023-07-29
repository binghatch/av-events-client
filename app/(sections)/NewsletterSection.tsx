import MailchimpForm from "../components/MailchimpForm";

export default async function NewsletterSection() {

  return (
    <section className="mt-12 p-6" id="speakers">
      <h2 className="text-3xl font-bold text-terracotta-400">Subscribe</h2>
      <p>Subscribe to our newsletter.</p>
      <div className="mt-8">
        <MailchimpForm />
      </div>
    </section>
  )
}