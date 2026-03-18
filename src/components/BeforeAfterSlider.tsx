import { useEffect, useRef, useState } from 'react'

type BeforeAfterSliderProps = {
  id: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function BeforeAfterSlider({
  id,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updatePosition = (clientX: number) => {
    if (!trackRef.current) {
      return
    }

    const bounds = trackRef.current.getBoundingClientRect()
    const percent = ((clientX - bounds.left) / bounds.width) * 100
    setPosition(clamp(percent, 0, 100))
  }

  useEffect(() => {
    if (!dragging) {
      return
    }

    const handleMove = (event: PointerEvent) => updatePosition(event.clientX)
    const handleUp = () => setDragging(false)

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [dragging])

  return (
    <div className='space-y-3'>
      <div
        ref={trackRef}
        onPointerDown={(event) => {
          event.preventDefault()
          updatePosition(event.clientX)
          setDragging(true)
        }}
        className='relative aspect-[5/4] overflow-hidden rounded-3xl border border-line bg-sand/20 shadow-card touch-none select-none'
      >
        <img
          src={afterImage}
          alt={afterAlt}
          loading='lazy'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div
          className='absolute inset-0 overflow-hidden'
          style={{
            clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading='lazy'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </div>

        <div
          aria-hidden='true'
          className='absolute inset-y-0 z-10 w-8 -translate-x-1/2'
          style={{ left: `${position}%` }}
        >
          <div className='mx-auto h-full w-[2px] bg-white/85' />
          <span className='absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-[10px] font-semibold text-ink shadow-sm'>
            &lt;-&gt;
          </span>
        </div>

        <span className='absolute left-3 top-3 rounded-full bg-black/55 px-2 py-1 text-xs font-medium text-white'>
          Before
        </span>
        <span className='absolute right-3 top-3 rounded-full bg-accent px-2 py-1 text-xs font-medium text-white'>
          After
        </span>
      </div>

      <label htmlFor={id} className='block text-xs font-medium uppercase tracking-[0.14em] text-muted'>
        Drag to compare
      </label>
      <input
        id={id}
        type='range'
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className='h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-accent'
      />
    </div>
  )
}
