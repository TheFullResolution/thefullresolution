import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Img from 'gatsby-image'
import { AllFileImageQuery } from '../../graphql-types'

interface Props {
  image: string
  alt: string
  className?: string
}

export const ResponsiveImg: React.FC<Props> = ({ image, alt, className }) => {
  const { allFile }: AllFileImageQuery = useStaticQuery(graphql`
    query AllFileImage {
      allFile(filter: { relativeDirectory: { eq: "uploads" } }) {
        nodes {
          base
          relativeDirectory
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const gatsbyImageConfig = allFile.nodes.find(el => {
    return el.base === image.substr(image.lastIndexOf('/') + 1)
  })

  if (!gatsbyImageConfig) return null

  return <Img fluid={gatsbyImageConfig.childImageSharp.fluid} fadeIn={false} alt={alt}  className={className} />
}
