import { truncateText } from "../../../utils/txtUtils"
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
          {truncateText(subtitle,100)}
        </CardSubtitle>

      </CardContent>

    </CardStyled>
  )
}
