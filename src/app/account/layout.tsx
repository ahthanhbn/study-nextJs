import React from 'react'
import SideNavigation from '../_components/SideNavigation'

type AccountLayoutProps = {
    children :React.ReactNode;
}
export default function Layout({children} : AccountLayoutProps) {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
        <SideNavigation />
        <div className="py-1">{children}</div>
    </div>
    )
}
