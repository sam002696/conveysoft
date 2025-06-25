import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Dhaka" invert={invert}>
          Block C, Bashundhara R/A
          <br />
          Dhaka 1229, Bangladesh
        </Office>
      </li>
      <li>
        <Office name="Any query?" invert={invert}>
          Email us at
          <br />
          <a href="mailto:conveysoft@gmail.com">conveysoft@gmail.com</a>
        </Office>
      </li>
    </ul>
  )
}
