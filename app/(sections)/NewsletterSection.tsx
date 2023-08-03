import MailchimpForm from "../components/MailchimpForm";

export default async function NewsletterSection() {

  return (
    <section className="mt-12 px-4 py-6" id="speakers">
      <h2 className=""><span className="thick-underline text-3xl font-black">Subscribe</span></h2>
      <p className="mt-1">Sign up to our newsletter.</p>
      <div className="mt-8">
        <MailchimpForm />
      </div>
    </section>
  )
}