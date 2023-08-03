import HeaderSection from '../(sections)/HeaderSection'

export default function Page() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen min-w-screen items-center justify-start bg-hero-bg bg-no-repeat bg-top bg-auto">
      <main className="w-full md:w-2/3">
        <section className="my-12 px-6 max-w-prose">
          <h2 className="text-4xl font-bold text-terracotta-400">Imprint</h2> 
          <p className='opacity-30'>Information in accordance with Section 5 TMG:</p>

          <p className='mt-4'>
            Assembly Ventures Management, LLC<br />
            1555 Broadway St, 3rd Floor<br />
            Detroit, MI 48226<br />
            United States
          </p>

          <h3 className='font-bold mt-8 text-sm'>Represented by</h3>
          <p>Co-Founders and Partners: Jessica Robinson and Chris Thomas</p>

          <h3 className='font-bold mt-8 text-sm'>Contact</h3>
          <p>
            Telephone: +1 (313) 277-9837<br />
            Email: contact@assemblyventures.com
          </p>
{/* 
          <h3 className='font-bold mt-8 text-sm'>Register entry</h3>
          <p>
            Entry in the Handelsregister.<br />
            Registering court: Local Court SampleCity<br />
            Registration number: HRB 12345
          </p>

          <h3 className='font-bold mt-8 text-sm'>VAT ID</h3>
          <p>
            VAT indentification number in accorance with Section 27a of the German VAT act: DE123456789
          </p> */}

          <h3 className='font-bold mt-8 text-sm'>Person responsible for content in accordance with 55 Abs. 2 RStV</h3>
          <p>
            Felix Scheuffelen<br />
            Heinrich-Roller-Straße 16B<br />
            10405 Berlin
          </p>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}