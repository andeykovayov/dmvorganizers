import { holidayDecorations } from '@/data/holidayDecorations'

const typicalProjects = [
  'Decorating Christmas trees and staircases',
  'Styling dinner tables and holiday centerpieces',
  'Setting up seasonal decorations around the home',
  'Arranging Halloween, Easter, or fall decor',
  'Creating cozy holiday corners and displays',
]

export function HolidayDecorationsSection() {
  return (
    <section id='holiday-decorations' className='border-b border-line/70 bg-white/70'>
      <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6'>
        <div className='mb-8 space-y-3'>
          <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted'>
            Seasonal Service
          </p>
          <h2 className='font-serif text-3xl sm:text-4xl'>Holiday Decorations</h2>
          <p className='text-lg font-semibold text-accent'>
            Prepare your home for the holidays without the stress.
          </p>
          <p className='max-w-4xl text-sm leading-relaxed text-muted sm:text-base'>
            DMV Organizers also helps prepare homes for the holidays using your existing
            decorations.
          </p>
          <p className='max-w-4xl text-sm leading-relaxed text-muted sm:text-base'>
            This service focuses on small seasonal decorating projects that make your home feel
            festive and welcoming without needing to buy new decor.
          </p>
          <p className='max-w-4xl text-sm leading-relaxed text-muted sm:text-base'>
            We help arrange and style decorations you already own, including staircases, tables,
            shelves, entryways, and other areas of your home.
          </p>
        </div>

        <div className='rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6'>
          <p className='text-sm font-semibold text-ink'>Typical projects include:</p>
          <ul className='mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2'>
            {typicalProjects.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className='mt-4 text-sm text-muted'>
            All decoration work uses the customer&apos;s decorations unless discussed otherwise.
          </p>
        </div>

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {holidayDecorations.map((item) => (
            <article
              key={item.title}
              className='overflow-hidden rounded-3xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-md'
            >
              <img
                src={item.image}
                alt={`${item.title} example`}
                loading='lazy'
                decoding='async'
                className='h-40 w-full object-cover'
              />
              <div className='p-4'>
                <h3 className='text-base font-semibold text-ink'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
