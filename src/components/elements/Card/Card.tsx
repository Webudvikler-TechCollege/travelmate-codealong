import { truncateText } from "../../../utils/txtUtils"
import { CardContent, CardIcon, CardImage, CardStyled, CardSubtitle, CardTitle } from "./Card.styled"
import type { CardProps } from "./Card.types"

export const Card = ({ image, title, subtitle, code }: CardProps) => {
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

        {code && (
          <CardIcon
            src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
            alt={`Flag for ${code}`}
          />
        )}

        <CardSubtitle>
          {truncateText(subtitle, 100)}
        </CardSubtitle>

      </CardContent>

    </CardStyled>
  )
}
