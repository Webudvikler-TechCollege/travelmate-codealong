
import { Container } from "../../components/elements/Container/Container"

export type ContentWrapperProps = {
    children?: React.ReactNode,
    pagetitle: string
}

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {
  return (
    <div>
      <title>{pagetitle}</title>
      <Container className="center">
        <h1 className="page-heading">{pagetitle}</h1>
      </Container>
      <Container className="center">
        {children}
      </Container>
    </div>
  )
}
