import React, { ReactNode } from 'react'

const Title = ({ subtitle, children, centered }: { subtitle?: string, children: ReactNode, centered?: boolean }) => {
    return (
        <div className="flex flex-col gap-4" style={{ justifyContent: centered ? 'center' : 'start' }}>
            {subtitle && <p className="font-light text-sm tracking-widest" style={{ textAlign: centered ? 'center' : 'start' }}>{subtitle}</p>}
            <h2 className="title" style={{ textAlign: centered ? 'center' : 'start' }}>{children}</h2>
        </div >
    )
}

export default Title