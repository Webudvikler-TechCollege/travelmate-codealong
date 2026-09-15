import { ContainerStyled } from "./Container.styled"
import type { ContainerProps } from "./Container.types"

export const Container = ({
  className,
  children
} : ContainerProps) => {
  return (
    <ContainerStyled className={className}>
        {children}
    </ContainerStyled>
  )
}
