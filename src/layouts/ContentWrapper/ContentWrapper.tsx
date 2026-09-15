
type ContentWrapperProps = {
    pagetitle: string,
    children: React.ReactNode
}

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {
  return (
    <div>
        <title>{pagetitle}</title>
        <div>
            {children}
        </div>
    </div>
  )
}
