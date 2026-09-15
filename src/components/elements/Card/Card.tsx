import { CardContent, CardImage, CardStyled, CardSubtitle, CardTitle } from "./Card.styled"
import type { CardProps } from "./Card.types"

export const Card = ({ image, title, subtitle }: CardProps) => {
  return (
    <CardStyled>

      <CardImage
        src={image}
        alt={title}
      />

      <CardContent>

        <CardTitle>
          {title}
        </CardTitle>

        <CardSubtitle>
          {subtitle}
        </CardSubtitle>

      </CardContent>

    </CardStyled>
  )
}
